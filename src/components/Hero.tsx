"use client";

import { motion } from "framer-motion";

interface HeroProps {
  onEnter: () => void;
}

export default function Hero({ onEnter }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2b1b18] text-[#e8d2c3]">
      {/* Warm glow */}

      <div className="pointer-events-none absolute right-[15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#e86f70]/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[10%] left-[20%] h-[300px] w-[300px] rounded-full bg-[#e8a87c]/10 blur-[100px]" />

      {/* Doodles */}

      <motion.div
        className="absolute left-[7%] top-[12%] text-4xl text-[#e86f70]"
        animate={{ y: [0, -15, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        ♡
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[18%] text-3xl text-[#e8a87c]"
        animate={{ y: [0, 12, 0], rotate: [8, -8, 8] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ✦
      </motion.div>

      <div className="absolute bottom-[12%] left-[12%] text-2xl text-[#e8a87c]/60">
        ✿
      </div>

      <div className="absolute bottom-[20%] right-[10%] text-3xl text-[#e86f70]/70">
        ♡
      </div>

      {/* Main layout */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-16 sm:px-8 sm:py-20 md:px-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}

          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-[#e8a87c]"
            >
              a very important birthday message
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg text-[#bfa79a] md:text-xl"
            >
              Before you were
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2 text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl"
            >
              my boyfriend...
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 text-lg text-[#bfa79a]"
            >
              you were just...
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -3,
              }}
              transition={{
                delay: 1.2,
                duration: 0.8,
                type: "spring",
              }}
              className="relative mt-2 inline-block"
            >
              <h2 className="text-6xl font-black tracking-tight text-[#e86f70] sm:text-7xl md:text-9xl">
                USELESS.
              </h2>

              <div className="absolute -bottom-1 left-0 h-[3px] w-full rotate-[-2deg] bg-[#e86f70]" />

              <span className="absolute -right-8 -top-5 text-3xl">
                😭
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="handwritten mt-6 text-3xl text-[#e8a87c] sm:mt-8"
            >
              and somehow I fell for the idiot. ♡
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="mt-6 max-w-md text-sm leading-7 text-[#a9918b]"
            >
              Yes. That was your first nickname.
              <br />
              And somehow... things escalated from there.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 }}
              whileHover={{
                scale: 1.05,
                x: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={onEnter}
              className="mt-9 rounded-full bg-[#e86f70] px-8 py-4 text-sm font-bold text-[#2b1b18] shadow-lg"
            >
              COME HERE →
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="handwritten mt-8 text-2xl text-[#a9918b]"
            >
              P.S. you're still annoying.
            </motion.p>
          </div>

          {/* RIGHT SCRAPBOOK CARD */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
              rotate: 5,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: 3,
            }}
            transition={{
              duration: 1,
              delay: 0.7,
              type: "spring",
            }}
            className="relative mx-auto hidden w-full max-w-sm lg:block"
          >
            <div className="absolute -right-6 -top-6 z-20 rotate-6 text-3xl">
              ♡
            </div>

            <div className="absolute -top-5 left-1/2 z-20 h-10 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#d8b98b]/70" />

            <div className="rotate-2 bg-[#c9aa97] p-4 pb-7 shadow-2xl">
              <div className="flex aspect-[4/5] items-center justify-center bg-[#3a2622]">
                <div className="px-8 text-center">
                  <p className="handwritten -rotate-2 text-5xl text-[#e8d2c3]">
                    our story
                  </p>

                  <p className="handwritten mt-5 text-2xl text-[#bfa79a]">
                    started with...
                  </p>

                  <p className="handwritten mt-2 -rotate-2 text-6xl font-bold text-[#e86f70]">
                    useless.
                  </p>

                  <p className="handwritten mt-5 text-3xl text-[#e8d2c3]">
                    😭
                  </p>
                </div>
              </div>

              <p className="handwritten mt-5 text-center text-2xl text-[#3d2925]">
                still useless, just mine now. ♡
              </p>
            </div>

            <p className="handwritten absolute -bottom-12 -right-8 rotate-[-8deg] text-xl text-[#e8a87c]">
              don't get emotional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}