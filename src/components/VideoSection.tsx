"use client";

import { motion } from "framer-motion";

export default function VideoSection() {
  const handleVideoStart = () => {
    window.dispatchEvent(new Event("birthday-video-start"));
  };

  const handleVideoEnd = () => {
    window.dispatchEvent(new Event("birthday-video-end"));
  };

  return (
    <section className="relative overflow-hidden bg-[#3d2925] px-6 py-24 text-[#e8d2c3] md:py-32">
      {/* Floating doodles */}

      <motion.div
        className="absolute left-[8%] top-[15%] text-3xl text-[#e8a87c]/60"
        animate={{
          y: [0, -12, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute right-[10%] top-[20%] text-4xl text-[#e86f70]/60"
        animate={{
          y: [0, 15, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ♡
      </motion.div>

      <motion.div
        className="absolute bottom-[15%] left-[12%] text-2xl text-[#e8a87c]/40"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        ✿
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}

        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="handwritten text-3xl text-[#e8a87c]"
          >
            okay... I made something for you.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-4xl font-black tracking-tight text-[#e8d2c3] md:text-6xl"
          >
            The embarrassing
            <br />
            part. 🎥
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-5 max-w-lg text-sm leading-7 text-[#bfa79a] md:text-base"
          >
            Because apparently a whole website wasn't enough.
            <br />
            So yes... I also made a video.
          </motion.p>
        </div>

        {/* Video */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            rotate: 2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
          }}
          className="relative mx-auto mt-14 max-w-3xl"
        >
          {/* Tape */}

          <div className="absolute -top-5 left-1/2 z-20 h-10 w-28 -translate-x-1/2 rotate-[-3deg] bg-[#d8b98b]/50" />

          {/* Paper frame */}

          <div className="mx-auto w-full max-w-[430px] bg-[#c9aa97] p-4 pb-8 shadow-2xl">
            <div className="overflow-hidden bg-[#2b1b18]">
              <video
                controls
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full object-contain"
                src="/video/birthday-message.mp4"
                onPlay={handleVideoStart}
                onEnded={handleVideoEnd}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="handwritten mt-5 rotate-[-1deg] text-center text-2xl text-[#3d2925]">
              yes, I really recorded a whole video for you. ♡
            </p>
          </div>

          {/* Little note */}

          <p className="handwritten absolute -bottom-12 right-0 rotate-[-5deg] text-xl text-[#e8a87c]">
            don't cry yet. 😭
          </p>
        </motion.div>

        {/* Bottom message */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
          className="mt-20 max-w-xl"
        >
          <p className="handwritten text-3xl text-[#e8d2c3]">
            and yes...
          </p>

          <p className="mt-2 text-sm leading-7 text-[#bfa79a]">
            you are absolutely not allowed to make fun of me for this.
            <br />
            I already know I am embarrassing.
          </p>

          <div className="mt-7 text-2xl tracking-[0.5em] text-[#e86f70]">
            · ♡ · ✦ · ♡ ·
          </div>
        </motion.div>
      </div>
    </section>
  );
}