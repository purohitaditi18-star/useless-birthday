"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import MemoryWall from "@/components/MemoryWall";
import RelationshipStory from "@/components/RelationshipStory";
import Intro from "@/components/Intro";
import FinalSurprise from "@/components/FinalSurprise";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [startMusic, setStartMusic] = useState(false);

  return (
    <main>
      {/* Music player stays mounted throughout the website */}
      <MusicPlayer startMusic={startMusic} />

      <AnimatePresence mode="wait">
        {!entered ? (
          <motion.div
            key="hero"
            exit={{
              opacity: 0,
              scale: 1.05,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Hero
              onEnter={() => {
  window.dispatchEvent(new Event("birthday-start-music"));
  setStartMusic(true);
  setEntered(true);
}}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="min-h-screen bg-[#2b1b18]"
          >
            <MemoryWall />

<Intro />

<RelationshipStory />

<VideoSection />

<FinalSurprise />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}