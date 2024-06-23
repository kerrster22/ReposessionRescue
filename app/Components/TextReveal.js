"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaStar, FaExclamation, FaCheck } from "react-icons/fa"; // Import different icons from react-icons

const TextReveal = ({ text, className = "" }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const words = text.split(" ");

  const emphasizedWords = {
    complex: <FaStar />,
    simplifying: <FaExclamation />,
    opposite: <FaCheck />,
    time: <FaStar />
  };

  return (
    <div ref={targetRef} className={`relative z-0 h-[200vh] ${className}`}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-7xl items-center bg-black px-[1rem] py-[5rem]">
        <div
          ref={targetRef}
          className="flex flex-col gap-8 p-5 text-2xl text-white/50 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
        >
          {text.split(". ").map((sentence, index) => (
            <p key={index} className="flex flex-wrap">
              {sentence.split(" ").map((word, i) => {
                const start = (i + index * sentence.split(" ").length) / words.length;
                const end = start + 1 / words.length;
                const icon = emphasizedWords[word.toLowerCase()];
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]} icon={icon}>
                    {word}
                  </Word>
                );
              })}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range, icon }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const color = useTransform(progress, range, ["#ffffff", "#f1fd82"]); // Transition from white to yellow (#f1fd82 is light yellow)
  
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5 flex items-center">
      <span className="absolute opacity-60">{children}</span>
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
      {icon && (
        <motion.span style={{ color: color, opacity: opacity }} className="ml-2">
          {icon}
        </motion.span>
      )}
    </span>
  );
};

const TextScrollRevealSection = () => {
  const text = `At some point along the way project management tools got too complex instead of simplifying work they did the opposite. So we stripped it all away and chose to organize everything by the most basic fundamental concept: time`;

  return (
    <section className="bg-black text-white py-10">
      <TextReveal text={text} />
    </section>
  );
};

export default TextScrollRevealSection;
