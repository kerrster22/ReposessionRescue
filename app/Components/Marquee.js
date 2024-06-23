// components/Marquee.js
"use client";

import { motion } from "framer-motion";

const Marquee = () => {
  const words = [
    "Support", "Guidance", "Solutions", "Protection", "Expertise",
    "Relief", "Stability", "Planning", "Success", "Empowerment",
    "Assurance", "Commitment", "Resilience", "Recovery", "Security",
    "Prevention", "Advocacy", "Trust", "Savings", "Strategy"
];
  const content = words.map((word, index) => (
    <span key={index} className="mr-2">
      {word} <span className="text-[#f1fd82] px-10">•</span>
    </span>
  ));

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-black py-8">
      <motion.div
        className="whitespace-nowrap text-white text-6xl font-antonio"
        variants={marqueeVariants}
        animate="animate"
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
};

export default Marquee;
