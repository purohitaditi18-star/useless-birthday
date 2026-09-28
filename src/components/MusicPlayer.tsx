"use client";

import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  startMusic?: boolean;
}

export default function MusicPlayer({
  startMusic = false,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Keeps track of the real music state
  const isPlayingRef = useRef(false);

  // Whether music should resume after the video
  const shouldResumeAfterVideo = useRef(false);

  const [playing, setPlaying] = useState(false);

  // Create audio
  useEffect(() => {
    const audio = new Audio("/music/khayaal.mp3");

    audio.loop = true;
    audio.volume = 0.45;

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audioRef.current = null;
      isPlayingRef.current = false;
    };
  }, []);

  // Keep React state and ref synchronized
  const setMusicPlaying = (value: boolean) => {
    isPlayingRef.current = value;
    setPlaying(value);
  };

  // Start music when entering the website
  useEffect(() => {
    if (!startMusic) return;

    const startMusicPlayback = async () => {
      const audio = audioRef.current;

      if (!audio) return;

      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }

        console.error("Could not play music:", error);
      }
    };

    startMusicPlayback();
  }, [startMusic]);

  // VIDEO → MUSIC communication
  useEffect(() => {
    const handleVideoStart = () => {
      const audio = audioRef.current;

      if (!audio) return;

      // Remember whether music was playing BEFORE video started
      shouldResumeAfterVideo.current = isPlayingRef.current;

      if (isPlayingRef.current) {
        audio.pause();
        setMusicPlaying(false);
      }
    };

    const handleVideoEnd = async () => {
      const audio = audioRef.current;

      if (!audio) return;

      // Only resume if music was actually playing before the video
      if (!shouldResumeAfterVideo.current) {
        return;
      }

      try {
        await audio.play();
        setMusicPlaying(true);
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }

        console.error("Could not resume music:", error);
      }

      shouldResumeAfterVideo.current = false;
    };

    window.addEventListener(
      "birthday-video-start",
      handleVideoStart
    );

    window.addEventListener(
      "birthday-video-end",
      handleVideoEnd
    );

    return () => {
      window.removeEventListener(
        "birthday-video-start",
        handleVideoStart
      );

      window.removeEventListener(
        "birthday-video-end",
        handleVideoEnd
      );
    };
  }, []);

  // Manual play / pause button
  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlayingRef.current) {
      audio.pause();
      setMusicPlaying(false);
      return;
    }

    try {
      await audio.play();
      setMusicPlaying(true);
    } catch (error) {
      if (
        error instanceof DOMException &&
        error.name === "AbortError"
      ) {
        return;
      }

      console.error("Could not play music:", error);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-[200] h-16 w-16 rounded-full transition-transform duration-300 hover:scale-110"
    >
      <div
        className={`relative h-full w-full rounded-full bg-[#171110] shadow-[0_8px_25px_rgba(0,0,0,0.45)] ${
          playing ? "animate-[spin_4s_linear_infinite]" : ""
        }`}
      >
        <div className="absolute inset-2 rounded-full border border-[#3b2925]" />

        <div className="absolute inset-4 rounded-full border border-[#3b2925]" />

        <div className="absolute inset-6 rounded-full border border-[#3b2925]" />

        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e86f70]">
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2b1b18]" />
        </div>

        <div className="absolute left-3 top-3 h-2 w-5 rotate-[-35deg] rounded-full bg-white/10" />
      </div>

      <span
        className={`absolute -right-2 -top-3 text-lg text-[#e8a87c] ${
          playing ? "animate-bounce" : ""
        }`}
      >
        ♪
      </span>
    </button>
  );
}