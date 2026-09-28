"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Intro() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#2b1b18] px-6 py-20 md:py-24 text-center">
      
      {/* Background glow */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e86f70]/10 blur-3xl"
        animate={{
          scale: revealed ? 1.3 : 1,
          opacity: revealed ? 0.8 : 0.5,
        }}
        transition={{ duration: 1 }}
      />

      {/* Floating decorations */}

      <motion.div
        className="absolute left-[10%] top-[18%] text-3xl text-[#e8a87c]"
        animate={{
          y: [0, -15, 0],
          rotate: [-10, 10, -10],
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
        className="absolute right-[10%] top-[25%] text-3xl text-[#e56b6f]"
        animate={{
          y: [0, 12, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        ♡
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[15%] text-2xl text-[#8b6fcb]"
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

      <div className="relative z-10 max-w-4xl">

        {/* Heading */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e8a87c]"
        >
          a very important question
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 text-4xl font-black text-[#e8d2c3] md:text-6xl"
        >
          Do you remember
          <br />
          your first nickname?
        </motion.h2>

        {/* Nickname reveal */}

        <div className="relative mt-10 min-h-[170px]">

          <AnimatePresence mode="wait">

            {!revealed ? (
              <motion.div
                key="useless"
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
                exit={{
                  opacity: 0,
                  scale: 1.4,
                  rotate: 8,
                  y: -30,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                }}
                className="flex flex-col items-center"
              >
                <div className="relative inline-block">

                  <p className="text-6xl font-black tracking-tight text-[#e56b6f] md:text-8xl">
                    USELESS.
                  </p>

                  <motion.span
                    animate={{
                      rotate: [-5, 5, -5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="absolute -right-8 -top-6 text-3xl"
                  >
                    😭
                  </motion.span>

                </div>

                <p className="mt-5 text-sm text-[#cdb9af]">
                  Yeah. That's what I called you.
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setRevealed(true)}
                  className="mt-8 rounded-full bg-[#3d2925] px-8 py-4 text-sm font-semibold text-white shadow-lg"
                >
                  BUT WAIT... 👀
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                key="needed"
                initial={{
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  bounce: 0.4,
                }}
                className="flex flex-col items-center"
              >

                {/* Old nickname */}

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="relative"
                >
                  <p className="text-3xl font-bold text-[#cdb9af] md:text-5xl">
                    USELESS.
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                    }}
                    className="absolute left-0 top-1/2 h-[3px] bg-[#e56b6f]"
                  />
                </motion.div>

                {/* Arrow */}

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="my-5 text-3xl text-[#e56b6f]"
                >
                  ↓
                </motion.div>

                {/* New nickname */}

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -2,
                  }}
                  transition={{
                    delay: 0.7,
                    duration: 0.8,
                    type: "spring",
                  }}
                >
                  <p className="text-5xl font-black text-[#e56b6f] md:text-7xl">
                    MOST NEEDED.
                  </p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="mt-2 text-2xl"
                  >
                    ❤️
                  </motion.p>
                </motion.div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Revealed message */}

        <AnimatePresence>
          {revealed && (
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.8,
              }}
              className="mx-auto mt-6 max-w-xl"
            >
              <p className="text-base leading-8 text-[#bfa79a]">
                Funny how things change.
                <br />
                The person I once called{" "}
                <span className="font-bold text-[#e56b6f]">
                  "Useless"
                </span>{" "}
                somehow became the person I need the most.
              </p>

              <p className="mt-6 text-lg font-semibold text-[#e8d2c3]">
                Life has jokes.
                <br />
                This one happens to be my favorite. 😭❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tiny bottom decoration */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-14 text-sm tracking-[0.5em] text-[#e8a87c]"
        >
          · ♡ · ✦ · ♡ ·
        </motion.div>

      </div>
    </section>
  );
}