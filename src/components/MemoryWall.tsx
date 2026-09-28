"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const memories = [
  {
    image: "/photos/photo1.jpeg",
    caption: "When I was sick and you came to take care of me. 🥹",
    rotation: -6,
    offset: "lg:translate-y-10",
    size: "lg:scale-105",
  },
  {
    image: "/photos/photo2.jpeg",
    caption: "Us... after we finally became US. ❤️",
    rotation: 4,
    offset: "lg:-translate-y-6",
    size: "",
  },
  {
    image: "/photos/photo3.jpeg",
    caption: "You apologizing for absolutely no mistake. 😭",
    rotation: -3,
    offset: "lg:translate-y-16",
    size: "lg:scale-95",
  },
  {
    image: "/photos/photo4.jpeg",
    caption: "That cute little hair massage before convocation. 🫶🏻",
    rotation: 7,
    offset: "lg:-translate-y-10",
    size: "lg:scale-105",
  },
  {
    image: "/photos/photo5.jpeg",
    caption: "Our very serious skincare sessions. ✨",
    rotation: -5,
    offset: "lg:translate-y-8",
    size: "lg:scale-95",
  },
  {
    image: "/photos/photo6.jpeg",
    caption: "My birthday + two certified bhukkads. 🍕😭",
    rotation: 4,
    offset: "lg:-translate-y-12",
    size: "lg:scale-105",
  },
  {
    image: "/photos/photo7.jpeg",
    caption:
      "Doing random shitty things just to keep each other entertained. 😂",
    rotation: -7,
    offset: "lg:translate-y-12",
    size: "",
  },
  {
    image: "/photos/photo8.jpeg",
    caption: "Our first trip as besties — Manali with everyone. 🏔️",
    rotation: 5,
    offset: "lg:-translate-y-8",
    size: "lg:scale-95",
  },
];

export default function MemoryWall() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#f4e9df] px-6 py-24 md:py-32">
      {/* =========================
          BACKGROUND DOODLES
      ========================== */}

      <motion.div
        className="absolute left-[5%] top-[12%] text-4xl text-[#e8a87c]"
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
        className="absolute right-[7%] top-[18%] text-4xl text-[#e86f70]"
        animate={{
          y: [0, 15, 0],
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
        className="absolute bottom-[18%] left-[8%] text-3xl text-[#e8a87c]"
        animate={{
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        ✿
      </motion.div>

      <motion.div
        className="absolute bottom-[10%] right-[8%] text-3xl text-[#e86f70]/70"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        ♡
      </motion.div>

      {/* =========================
          HEADING
      ========================== */}

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="max-w-3xl rotate-[-1deg]">
          <motion.p
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="handwritten text-3xl text-[#a97862]"
          >
            evidence that we actually have a life together...
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-2 text-5xl font-black tracking-tight text-[#3d2925] md:text-7xl"
          >
            A few pieces
            <br />
            <span className="text-[#e86f70]">of us. 📸</span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="mt-6 max-w-xl text-sm leading-7 text-[#7d6259] md:text-base"
          >
            Some memories are cute.
            <br />
            Some are completely stupid.
            <br />
            Some I wish I could relive.
            <br />
            And somehow, I love all of them. ❤️
          </motion.p>
        </div>

        {/* Tiny handwritten note */}

        <motion.p
          initial={{
            opacity: 0,
            rotate: -5,
          }}
          whileInView={{
            opacity: 1,
            rotate: -5,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.5,
          }}
          className="handwritten ml-auto mt-8 max-w-xs text-right text-2xl text-[#a97862]"
        >
          yes, I kept all these.
          <br />
          obviously. 🙄
        </motion.p>
      </div>

      {/* =========================
          SCRAPBOOK PHOTOS
      ========================== */}

      <div className="relative z-10 mx-auto mt-16 max-w-6xl md:mt-20">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-20">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.image}
              initial={{
                opacity: 0,
                y: 50,
                rotate: memory.rotation - 4,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: memory.rotation,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.07,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.08,
                rotate: 0,
                y: -12,
                zIndex: 30,
              }}
              className={`relative ${memory.offset} ${memory.size}`}
            >
              {/* Tape */}

              <div
                className={`absolute -top-5 z-20 h-10 w-24 bg-[#d8b98b]/70 shadow-sm ${
                  index % 2 === 0
                    ? "left-6 rotate-[-4deg]"
                    : "right-6 rotate-[4deg]"
                }`}
              />

              {/* Polaroid */}

              <div className="bg-[#fffaf6] p-3 pb-6 shadow-[0_20px_35px_rgba(61,41,37,0.18)]">
                <div className="aspect-[4/5] overflow-hidden bg-[#ead9cb]">
                  <img
                    src={memory.image}
                    alt={memory.caption}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <p className="handwritten mt-4 px-2 text-center text-2xl leading-6 text-[#4d3832]">
                  {memory.caption}
                </p>

                <p className="mt-3 text-center text-[10px] uppercase tracking-[0.25em] text-[#b79b92]">
                  memory #{String(index + 1).padStart(2, "0")}
                </p>
              </div>

              {/* Little heart sticker */}

              {index % 2 === 0 && (
                <div className="absolute -right-3 -top-3 z-30 flex h-8 w-8 rotate-12 items-center justify-center rounded-full bg-[#e86f70] text-sm text-white shadow-md">
                  ♥
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* =========================
          HIDDEN LOVE LETTER
      ========================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
        }}
        className="relative z-10 mx-auto mt-28 max-w-3xl md:mt-36"
      >
        {/* Hint */}

        {!envelopeOpen && (
          <motion.div
            initial={{
              opacity: 0,
              rotate: -3,
            }}
            whileInView={{
              opacity: 1,
              rotate: -3,
            }}
            viewport={{
              once: true,
            }}
            className="mb-10 text-center"
          >
            <p className="handwritten text-4xl text-[#a97862]">
              wait...
            </p>

            <p className="handwritten mt-1 text-2xl text-[#7d6259]">
              there's something hidden here. 👀
            </p>
          </motion.div>
        )}

        {/* =========================
            ENVELOPE SCENE
        ========================== */}

        <div className="relative mx-auto h-[470px] w-full max-w-[680px] md:h-[520px]">

          {/* =========================
              LETTER
          ========================== */}

          <motion.div
            initial={{
              y: 100,
              opacity: 0,
              rotate: -2,
            }}
            animate={
              envelopeOpen
                ? {
                    y: -30,
                    opacity: 1,
                    rotate: -2,
                  }
                : {
                    y: 70,
                    opacity: 0,
                    rotate: -2,
                  }
            }
            transition={{
              duration: 1.1,
              delay: envelopeOpen ? 0.4 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute left-1/2 top-0 z-[100] w-[92%] -translate-x-1/2 md:w-[88%]"
          >
            <div className="bg-[#f8eee6] px-5 py-6 shadow-[0_18px_40px_rgba(61,41,37,0.2)] md:px-12 md:py-8">
              <p className="handwritten text-3xl text-[#3d2925] md:text-5xl">
                And somehow...
              </p>

              <p className="handwritten mt-2 text-3xl font-bold leading-tight text-[#e86f70] md:text-5xl">
                I would choose all of
                <br />
                this again. ❤️
              </p>

              <div className="mt-4 space-y-0 md:mt-6 md:space-y-1">
                <p className="handwritten text-xl text-[#6e5550] md:text-3xl">
                  Even the fights.
                </p>

                <p className="handwritten text-xl text-[#6e5550] md:text-3xl">
                  Even the stupid stuff.
                </p>

                <p className="handwritten text-xl text-[#6e5550] md:text-3xl">
                  Even you. 😭
                </p>
              </div>

              <p className="handwritten mt-5 text-2xl text-[#e86f70] md:mt-7 md:text-3xl">
                ♡
              </p>
            </div>
          </motion.div>

          {/* =========================
              CLICKABLE ENVELOPE
          ========================== */}

          <motion.button
            type="button"
            aria-label="Open the hidden love letter"
            onClick={() => setEnvelopeOpen(true)}
            animate={
              envelopeOpen
                ? {
                    y: 45,
                  }
                : {
                    y: 20,
                  }
            }
            transition={{
              duration: 0.9,
              delay: envelopeOpen ? 0.3 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-0 left-1/2 z-20 h-[190px] w-[88%] -translate-x-1/2 cursor-pointer border-0 bg-transparent p-0 outline-none md:h-[250px]"
          >
            {/* Envelope body */}

            <div className="absolute inset-0 overflow-hidden rounded-md bg-[#c9aa97] shadow-[0_25px_55px_rgba(61,41,37,0.25)]">

              {/* Left fold */}

              <div
                className="
                  absolute bottom-0 left-0 h-0 w-0
                  border-b-[95px] border-l-[44vw]
                  border-solid border-b-[#b79582] border-l-transparent
                  md:border-b-[125px] md:border-l-[285px]
                "
              />

              {/* Right fold */}

              <div
                className="
                  absolute bottom-0 right-0 h-0 w-0
                  border-b-[95px] border-r-[44vw]
                  border-solid border-b-[#b79582] border-r-transparent
                  md:border-b-[125px] md:border-r-[285px]
                "
              />

              {/* Bottom fold */}

              <div
                className="
                  absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2
                  border-l-[44vw] border-r-[44vw] border-t-[105px]
                  border-solid border-l-transparent border-r-transparent border-t-[#ae8b79]
                  md:border-l-[285px] md:border-r-[285px] md:border-t-[145px]
                "
              />
            </div>

            {/* =========================
                FLAP
            ========================== */}

            <motion.div
              initial={{
                rotateX: 0,
              }}
              animate={
                envelopeOpen
                  ? {
                      rotateX: -180,
                    }
                  : {
                      rotateX: 0,
                    }
              }
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
              }}
              className="absolute left-0 top-0 z-40 h-[105px] w-full md:h-[140px]"
            >
              <div
                className="
                  absolute left-1/2 top-0 h-0 w-0 -translate-x-1/2
                  border-l-[44vw] border-r-[44vw] border-t-[105px]
                  border-solid border-l-transparent border-r-transparent border-t-[#d8b9a7]
                  md:border-l-[285px] md:border-r-[285px] md:border-t-[140px]
                "
              />
            </motion.div>

            {/* =========================
                HEART SEAL
            ========================== */}

            <motion.div
              animate={
                envelopeOpen
                  ? {
                      opacity: 0,
                      scale: 0.3,
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                    }
              }
              transition={{
                duration: 0.35,
              }}
              className="
                pointer-events-none absolute left-1/2 top-[68px] z-50
                flex h-14 w-14 -translate-x-1/2 items-center justify-center
                rounded-full bg-[#e86f70] text-2xl text-white
                shadow-[0_8px_20px_rgba(232,111,112,0.35)]
                md:top-[92px] md:h-16 md:w-16 md:text-3xl
              "
            >
              ❤️
            </motion.div>

            {/* =========================
                BOW
            ========================== */}

            <motion.div
              animate={
                envelopeOpen
                  ? {
                      opacity: 0,
                      scale: 0.5,
                      y: -10,
                    }
                  : {
                      opacity: 1,
                      scale: [1, 1.04, 1],
                    }
              }
              transition={{
                opacity: {
                  duration: 0.3,
                },
                scale: {
                  duration: 2.2,
                  repeat: Infinity,
                },
              }}
              className="pointer-events-none absolute -top-12 left-1/2 z-50 -translate-x-1/2 md:-top-14"
            >
              <div className="relative h-14 w-32 md:h-16 md:w-36">

                {/* Left loop */}

                <div className="absolute left-0 top-2 h-12 w-16 rotate-[25deg] rounded-full bg-[#e86f70] shadow-md md:h-14 md:w-20" />

                {/* Right loop */}

                <div className="absolute right-0 top-2 h-12 w-16 rotate-[-25deg] rounded-full bg-[#e86f70] shadow-md md:h-14 md:w-20" />

                {/* Center */}

                <div className="absolute left-1/2 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d9575d] text-lg text-white shadow-md md:h-12 md:w-12 md:text-xl">
                  ♥
                </div>
              </div>
            </motion.div>

            {/* Tape */}

            <div className="pointer-events-none absolute -bottom-5 left-1/2 z-50 h-8 w-24 -translate-x-1/2 rotate-[-3deg] bg-[#d8b98b]/60 md:h-9 md:w-28" />
          </motion.button>

          {/* =========================
              CLICK INSTRUCTION
          ========================== */}

          {!envelopeOpen && (
            <motion.p
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="pointer-events-none absolute bottom-[-25px] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap font-[var(--font-caveat)] text-2xl text-[#e86f70] md:bottom-[-30px] md:text-3xl"
            >
              tap to open ♡
            </motion.p>
          )}
        </div>

        {/* =========================
            AFTER OPENING
        ========================== */}

        {envelopeOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.4,
              duration: 0.8,
            }}
            className="mt-8 text-center"
          >
            <p className="handwritten text-4xl text-[#a97862]">
              okay...
            </p>

            <p className="handwritten mt-1 text-2xl text-[#7d6259]">
              you found the hidden part. 🥹
            </p>

            <div className="mt-5 text-xl tracking-[0.5em] text-[#e86f70]">
              · ♡ · ✦ · ♡ ·
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}