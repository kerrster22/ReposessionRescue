// components/Marquee.js
"use client";

import { motion } from "framer-motion";

const MarqueeLogo = () => {
  const items = [
    { name: "Support" },
    { name: "Guidance" },
    { name: "Solutions" },
    { name: "Protection" },
    { name: "Expertise" },
    { name: "Relief" },
    { name: "Stability" },
    { name: "Planning" },
    { name: "Success" },
    { name: "Empowerment" },
    { name: "Assurance" },
    { name: "Commitment" },
    { name: "Resilience" },
    { name: "Recovery" },
    { name: "Security" },
    { name: "Prevention" },
    { name: "Advocacy" },
    { name: "Trust" },
    { name: "Savings" },
    { name: "Strategy" }
  ];

  const content = items.map((item, index) => (
    <div key={index} className="flex items-center mx-8">
      <span>{item.name}</span>
      <span className="text-[#f1fd82] px-20">•</span>
    </div>
  ));

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden bg-black py-8">
      <motion.div
        className="whitespace-nowrap text-white text-6xl font-antonio flex"
        variants={marqueeVariants}
        animate="animate"
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
};

export default MarqueeLogo;
