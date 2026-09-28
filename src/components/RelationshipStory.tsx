"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const story = [
  {
    number: "01",
    title: "HOW IT STARTED",
    subtitle: "the most unexpected friendship",
    text: "We became friends because of some people we really don't like. At least I don't. 😭 Honestly, I don't think either of us knew what that friendship was going to turn into.",
    emoji: "👀",
  },
  {
    number: "02",
    title: "THE USELESS ERA",
    subtitle: "your first nickname",
    text: "I don't even remember exactly when I started calling you Useless. But honestly, the details don't matter anymore. What matters is that somehow, the most needed person in my life got the nickname Useless.",
    emoji: "😭",
    highlight: "USELESS.",
  },
  {
    number: "03",
    title: "SOMEWHERE ALONG THE WAY...",
    subtitle: "things started changing",
    text: "You started becoming more than just my friend. Your care for me, how attached we became, that tiny little jealousy that would show up on your face, and all the effort you made just to be around me... I noticed all of it.",
    emoji: "👀❤️",
  },
  {
    number: "04",
    title: "OUR VERY SERIOUS FIGHTS",
    subtitle: "the pani puri solution",
    text: "And then there are moments like us being in the middle of a fight and you suddenly asking...",
    quote: "“Chal pani poori khane chalte hai?”",
    afterQuote:
      "Like... excuse me??? Are we fighting or are we going to eat pani poori? 😭",
    emoji: "😭🍥",
  },
  {
    number: "05",
    title: "THE MOVIE",
    subtitle: "the moment I realised",
    text: "Our first movie together. Just us. I remember sitting next to you and crying, and for the first time I realised just how much I was going to miss you.",
    quote: "“How am I going to stay without you?”",
    afterQuote:
      "And I think that was the moment I understood just how important you had become to me.",
    emoji: "🎬🥹",
  },
  {
    number: "06",
    title: "YOU CAME TO HYDERABAD",
    subtitle: "you actually came for me",
    text: "You actually made the effort to come and meet me in Hyderabad. You kept finding ways to be by my side, and somehow you made it very difficult for me to imagine you not being there.",
    emoji: "🥹",
  },
];

export default function RelationshipStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#2b1b18] px-6 py-24 text-[#e8d2c3] md:py-32"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-[20%] top-[15%] h-[450px] w-[450px] rounded-full bg-[#e86f70]/8 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[15%] right-[10%] h-[400px] w-[400px] rounded-full bg-[#e8a87c]/6 blur-[120px]" />

      {/* Floating scrapbook doodles */}

      <motion.div
        className="absolute left-[6%] top-[10%] text-3xl text-[#e8a87c]/60"
        animate={{
          y: [0, -15, 0],
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
        className="absolute right-[7%] top-[25%] text-4xl text-[#e86f70]/60"
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
        className="absolute bottom-[20%] left-[8%] text-2xl text-[#e8a87c]/50"
        animate={{
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        ✿
      </motion.div>

      {/* Heading */}

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rotate-[-1deg]">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="handwritten text-3xl text-[#e8a87c]"
          >
            somewhere between friendship & chaos...
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-3 text-5xl font-black tracking-tight text-[#e8d2c3] md:text-7xl"
          >
            Our story.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="handwritten mt-2 text-3xl text-[#e86f70] md:text-4xl"
          >
            unfortunately documented. 😭
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 max-w-xl text-sm leading-7 text-[#bfa79a] md:text-base"
        >
          I could have written a normal romantic story.
          <br />
          But unfortunately, we are not normal.
          <br />
          So here we are.
        </motion.p>
      </div>

      {/* Timeline */}

      <div className="relative z-10 mx-auto mt-16 max-w-6xl md:mt-20">
        {/* Timeline line */}

        <div className="absolute left-4 top-0 h-full w-px bg-[#e8d2c3]/10 md:left-1/2 md:-translate-x-1/2" />

        <motion.div
          style={{ scaleY }}
          className="absolute left-4 top-0 h-full w-[2px] origin-top bg-[#e86f70] md:left-1/2 md:-translate-x-1/2"
        />

        {story.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className={`relative mb-16 last:mb-0 md:mb-24 ${
                index % 2 === 0
                  ? "md:translate-y-2"
                  : "md:-translate-y-4"
              }`}
            >
              {/* Timeline dot */}

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                }}
                className="absolute left-4 top-8 z-20 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-[#2b1b18] bg-[#e86f70] md:left-1/2"
              />

              {/* Card wrapper */}

              <div
                className={`ml-10 md:ml-0 md:w-[45%] ${
                  isLeft
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    rotate: 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className={`relative overflow-hidden rounded-sm border border-[#e8d2c3]/10 bg-[#3a2622] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.2)] md:p-8 ${
                    index % 3 === 0
                      ? "rotate-[-1.5deg]"
                      : index % 3 === 1
                        ? "rotate-[1.5deg]"
                        : "rotate-[-0.5deg]"
                  }`}
                >
                  {/* Tape */}

                  <div
                    className={`absolute -top-3 h-8 w-20 rotate-[-3deg] bg-[#d8b98b]/40 ${
                      isLeft ? "left-8" : "right-8"
                    }`}
                  />

                  {/* Small handwritten number */}

                  <div className="flex items-start justify-between">
                    <span className="handwritten text-3xl text-[#e8a87c]">
                      #{item.number}
                    </span>

                    <span className="text-2xl">{item.emoji}</span>
                  </div>

                  {/* Title */}

                  <h3 className="mt-4 text-xl font-black tracking-wide text-[#e8d2c3] md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="handwritten mt-1 text-2xl text-[#e86f70]">
                    {item.subtitle}
                  </p>

                  {/* Text */}

                  <p className="mt-5 text-sm leading-7 text-[#bfa79a] md:text-base">
                    {item.text}
                  </p>

                  {/* Useless highlight */}

                  {item.highlight && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotate: -5,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: -3,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3,
                        type: "spring",
                      }}
                      className="handwritten mt-6 inline-block rounded-sm bg-[#e86f70]/10 px-5 py-2 text-4xl font-bold text-[#e86f70]"
                    >
                      {item.highlight} 😭
                    </motion.div>
                  )}

                  {/* Quote */}

                  {item.quote && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="my-6 rotate-[-1deg] border-l-2 border-[#e8a87c] bg-[#e8a87c]/5 px-5 py-4"
                    >
                      <p className="handwritten text-3xl leading-8 text-[#e8a87c]">
                        {item.quote}
                      </p>
                    </motion.div>
                  )}

                  {item.afterQuote && (
                    <p className="text-sm leading-7 text-[#bfa79a] md:text-base">
                      {item.afterQuote}
                    </p>
                  )}

                  {/* Little doodle */}

                  <div
                    className={`handwritten absolute bottom-3 text-xl text-[#e8d2c3]/30 ${
                      isLeft ? "right-5" : "left-5"
                    }`}
                  >
                    ♡
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Hyderabad special ending */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.9,
        }}
        className="relative z-10 mx-auto mt-20 max-w-3xl md:mt-28"
      >
        <div className="relative rotate-[1deg] border border-[#e8a87c]/20 bg-[#3a2622] px-7 py-10 text-center shadow-[0_25px_60px_rgba(0,0,0,0.25)] md:px-14 md:py-14">
          {/* Tape */}

          <div className="absolute -top-4 left-1/2 h-9 w-28 -translate-x-1/2 rotate-[-2deg] bg-[#d8b98b]/40" />

          <p className="handwritten text-3xl text-[#e8a87c]">
            and then...
          </p>

          <h3 className="mt-3 text-3xl font-black text-[#e8d2c3] md:text-5xl">
            YOU CAME TO HYDERABAD.
          </h3>

          <p className="handwritten mt-3 text-2xl text-[#e86f70]">
            you actually came for me. 🥹
          </p>

          <div className="mx-auto mt-7 h-px w-20 bg-[#e86f70]/40" />

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#bfa79a] md:text-base">
            You kept finding ways to be by my side, and somehow you made it
            very difficult for me to imagine you not being there.
          </p>

          <p className="handwritten mt-8 text-3xl text-[#e8d2c3]">
            maybe that's when it really hit me...
          </p>

          <p className="handwritten mt-3 text-4xl text-[#e86f70]">
            you're home. ❤️
          </p>
        </div>
      </motion.div>

      {/* Final emotional ending */}

      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-10 mx-auto mt-24 max-w-3xl text-center md:mt-32"
      >
        <div className="handwritten text-4xl text-[#e8a87c]">
          ♡
        </div>

        <p className="handwritten mt-5 text-3xl text-[#bfa79a]">
          And after everything...
        </p>

        <h3 className="mt-3 text-4xl font-black text-[#e86f70] md:text-6xl">
          you're still
          <br />
          my favorite person. ❤️
        </h3>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#bfa79a] md:text-base">
          Which is slightly ironic considering your first nickname was
          <span className="font-bold text-[#e8a87c]"> Useless.</span> 😭
        </p>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mx-auto mt-7 h-px bg-[#e86f70]/50"
        />

        <p className="handwritten mt-7 text-2xl text-[#8f756e]">
          and I wouldn't change a thing.
        </p>
      </motion.div>
    </section>
  );
}