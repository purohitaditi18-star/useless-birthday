"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const confetti = Array.from({ length: 55 }, (_, index) => ({
  id: index,
  x: ((index * 47) % 100) - 50,
  y: 70 + ((index * 83) % 120),
  rotate: (index * 71) % 720,
  delay: (index % 10) * 0.04,
  duration: 1.8 + (index % 5) * 0.15,
}));

export default function FinalSurprise() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2b1b18] px-6 py-24 text-[#e8d2c3] md:py-32">
      {/* Stadium glow */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e86f70]/10 blur-[140px]"
        animate={{
          scale: finished ? 1.5 : started ? 1.15 : 1,
          opacity: finished ? 1 : 0.5,
        }}
        transition={{ duration: 1.2 }}
      />

      {/* Floating decorations */}

      <motion.div
        className="absolute left-[7%] top-[15%] text-4xl text-[#e8a87c]/60"
        animate={{
          y: [0, -15, 0],
          rotate: [-8, 8, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        ⚽
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[20%] text-3xl text-[#e86f70]/60"
        animate={{
          y: [0, 12, 0],
          rotate: [8, -8, 8],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        ✦
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] left-[9%] text-3xl text-[#e8a87c]/50"
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

      {/* Confetti */}

      <AnimatePresence>
        {finished &&
          confetti.map((piece) => (
            <motion.div
              key={piece.id}
              initial={{
                opacity: 0,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: piece.x * 7,
                y: piece.y * -5,
                rotate: piece.rotate,
              }}
              transition={{
                duration: piece.duration,
                delay: piece.delay,
                ease: "easeOut",
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-50 text-lg"
            >
              {piece.id % 4 === 0
                ? "❤️"
                : piece.id % 4 === 1
                  ? "⚽"
                  : piece.id % 4 === 2
                    ? "✦"
                    : "♡"}
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center">
        <AnimatePresence mode="wait">

          {/* ===================== */}
          {/* PRE MATCH */}
          {/* ===================== */}

          {!started && !finished && (
            <motion.div
              key="prematch"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.92,
              }}
              transition={{
                duration: 0.8,
              }}
              className="w-full max-w-4xl"
            >
              <div className="mb-10 text-center">
                <p className="handwritten text-3xl text-[#e8a87c]">
                  okay... one last thing.
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-[#8f756e]">
                  final matchday
                </p>
              </div>

              {/* Dialogue */}

              <motion.div
                initial={{
                  opacity: 0,
                  rotate: -1,
                }}
                animate={{
                  opacity: 1,
                  rotate: -1,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="mx-auto max-w-2xl"
              >
                <div className="relative border border-[#e8d2c3]/10 bg-[#3a2622] px-7 py-8 shadow-[0_25px_60px_rgba(0,0,0,0.25)] md:px-12 md:py-10">

                  {/* Tape */}

                  <div className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#d8b98b]/50" />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e8a87c]">
                    COMMENTATOR 🎙️
                  </p>

                  <p className="mt-5 text-xl leading-8 text-[#e8d2c3] md:text-2xl">
                    “Ladies and gentlemen...
                    <br />
                    we're entering the 22nd minute—”
                  </p>

                  <p className="handwritten mt-6 text-3xl text-[#e86f70]">
                    wait.
                  </p>

                  <p className="mt-3 text-xl leading-8 text-[#bfa79a] md:text-2xl">
                    “It's actually his 22nd YEAR.”
                  </p>

                  <div className="my-7 h-px bg-[#e8d2c3]/10" />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e8a87c]">
                    ME 🙄
                  </p>

                  <p className="mt-4 text-lg leading-8 text-[#e8d2c3] md:text-xl">
                    Can we please stop pretending you're Cristiano
                    Ronaldo for five minutes? 😭
                  </p>

                  <p className="handwritten mt-5 text-3xl text-[#e86f70]">
                    HIM:
                  </p>

                  <p className="mt-1 text-2xl font-bold text-[#e8d2c3]">
                    “No.”
                  </p>

                  <p className="handwritten mt-5 text-2xl text-[#e8a87c]">
                    ...yeah. Thought so.
                  </p>
                </div>
              </motion.div>

              {/* Match information */}

              <div className="mx-auto mt-10 max-w-xl text-center">
                <p className="handwritten text-3xl text-[#bfa79a]">
                  anyway...
                </p>

                <p className="mt-2 text-sm text-[#8f756e]">
                  since apparently everything has to be a football match...
                </p>

                <motion.button
                  whileHover={{
                    scale: 1.06,
                    rotate: -2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setStarted(true)}
                  className="mt-8 rounded-full bg-[#e86f70] px-9 py-4 text-sm font-bold text-[#2b1b18] shadow-[0_10px_30px_rgba(232,111,112,0.25)]"
                >
                  ENTER THE FINAL MATCH ⚽
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ===================== */}
          {/* MATCHDAY */}
          {/* ===================== */}

          {started && !finished && (
            <motion.div
              key="matchday"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
              }}
              className="w-full max-w-4xl text-center"
            >
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#e8a87c]">
                MATCHDAY
              </p>

              <div className="mt-5">
                <p className="handwritten text-4xl text-[#e8d2c3]">
                  22 years.
                </p>

                <h2 className="mt-1 text-6xl font-black text-[#e86f70] md:text-8xl">
                  FULL TIME.
                </h2>
              </div>

              {/* Scoreboard */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="mx-auto mt-12 max-w-3xl"
              >
                <div className="relative overflow-hidden border border-[#e8d2c3]/10 bg-[#3a2622] shadow-[0_25px_60px_rgba(0,0,0,0.25)]">

                  {/* Stadium top */}

                  <div className="border-b border-[#e8d2c3]/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-[#8f756e]">
                    birthday championship
                  </div>

                  <div className="grid grid-cols-3 items-center px-6 py-10 md:px-12 md:py-14">

                    <div>
                      <p className="handwritten text-2xl text-[#bfa79a]">
                        PLAYER
                      </p>

                      <p className="mt-2 text-xl font-black text-[#e8d2c3]">
                        YOU
                      </p>
                    </div>

                    <div>
                      <div className="text-5xl md:text-7xl">
                        ⚽
                      </div>

                      <p className="mt-3 text-3xl font-black text-[#e86f70]">
                        22
                      </p>
                    </div>

                    <div>
                      <p className="handwritten text-2xl text-[#bfa79a]">
                        POSITION
                      </p>

                      <p className="mt-2 text-xl font-black text-[#e8d2c3]">
                        MY FAVORITE
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#e8d2c3]/10 px-5 py-5">
                    <p className="handwritten text-2xl text-[#e8a87c]">
                      undefeated at being my favorite person. ❤️
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.7,
                }}
                className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4"
              >
                {[
                  ["GOALS", "INFINITY"],
                  ["ASSISTS", "INFINITY"],
                  ["YELLOW CARDS", "too many 😭"],
                  ["SPECIAL SKILL", "pani poori"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-[#e8d2c3]/10 bg-[#3a2622] px-4 py-5"
                  >
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8f756e]">
                      {label}
                    </p>

                    <p className="handwritten mt-2 text-2xl text-[#e8a87c]">
                      {value}
                    </p>
                  </div>
                ))}
              </motion.div>

              <motion.button
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1,
                }}
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setFinished(true)}
                className="mt-12 rounded-full bg-[#e86f70] px-10 py-4 text-sm font-bold text-[#2b1b18]"
              >
                FULL TIME → 🎉
              </motion.button>
            </motion.div>
          )}

          {/* ===================== */}
          {/* FINAL BIRTHDAY WISH */}
          {/* ===================== */}

          {finished && (
            <motion.div
              key="finished"
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                type: "spring",
                bounce: 0.3,
              }}
              className="w-full max-w-4xl text-center"
            >
              {/* Cake */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-6xl md:text-8xl"
              >
                🎂
              </motion.div>

              <p className="handwritten mt-5 text-3xl text-[#e8a87c]">
                full time. 🥹
              </p>

              <h2 className="mt-3 text-5xl font-black text-[#e86f70] md:text-8xl">
                HAPPY
                <br />
                22ND.
              </h2>

              <p className="handwritten mt-5 text-4xl text-[#e8d2c3] md:text-5xl">
                my favorite useless person. ❤️
              </p>

              {/* Actual wish */}

              <div className="mx-auto mt-10 max-w-2xl">
                <p className="text-sm leading-8 text-[#bfa79a] md:text-base">
                  I hope 22 is ridiculously good to you.
                  <br />
                  I hope you get everything you've been working for.
                  <br />
                  I hope you laugh a lot, travel a lot,
                  <br />
                  and eat an unreasonable amount of pani poori. 😂
                </p>

                <p className="handwritten mt-8 text-4xl text-[#e8a87c] md:text-5xl">
                  And most importantly...
                </p>

                <p className="mt-3 text-2xl font-bold text-[#e8d2c3] md:text-3xl">
                  I hope I get to be there for all of it. ❤️
                </p>
              </div>

              {/* Final card */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 25,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: -2,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="relative mx-auto mt-12 max-w-xl"
              >
                <div className="bg-[#c9aa97] px-7 py-8 shadow-[0_20px_45px_rgba(0,0,0,0.2)]">
                  <p className="handwritten text-4xl text-[#3d2925]">
                    I love you. ❤️
                  </p>

                  <p className="mt-4 text-sm leading-7 text-[#5d4640]">
                    okay... that's all for now.
                    <br />
                    but this isn't everything.
                  </p>

                  <p className="handwritten mt-5 text-2xl text-[#e86f70]">
                    there's still so much more I want to give you. 🥹
                  </p>
                </div>

                <div className="absolute -top-4 left-1/2 h-8 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#d8b98b]/60" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="mt-12"
              >
                <div className="handwritten text-3xl tracking-[0.4em] text-[#e8a87c]">
                  · ⚽ · ♡ · ✦ · ♡ ·
                </div>

                <p className="handwritten mt-6 text-2xl text-[#8f756e]">
                  — from the person who still calls you useless. ♡
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}