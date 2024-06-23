// components/LineWithContent.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const ShowCase = ({ title, paragraph }) => {
  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    initial: { y: 0 },
    hover: {
      y: [-5, 10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="w-full px-4 py-2 max-w-7xl mx-auto group">
      <motion.div
        className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[500px_auto_50px]"
        variants={containerVariants}
        initial="initial"
        whileHover="hover"
      >
        <div className="flex-shrink-0">
          <h1 className="text-2xl lg:text-4xl md:text-4xl sm:text-3xl font-semibold flex flex-wrap">
            {title.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>
        {paragraph && (
          <div className="hidden lg:block flex-grow">
            <p className="text-[0.95rem] max-w-lg text-gray-400">
              {paragraph}
            </p>
          </div>
        )}
        <motion.div 
          className="text-xl group-hover:rotate-45 transition-transform duration-300 flex-shrink-0"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-12 h-12"
            fill="none"
            strokeWidth="0.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-labelledby="arrowRightTopIconTitle"
          >
            <title id="arrowRightTopIconTitle">Arrow Right Top</title>
            <path d="M19 13V5h-8"/>
            <path strokeLinecap="round" d="M19 5l-1 1"/>
            <path d="M18 6L5 19"/>
          </svg>
        </motion.div>
      </motion.div>
      <motion.div 
        className="w-full h-0.5 bg-gray-300 mt-4 group-hover:bg-[#f1fd82] group-hover:shadow-[0px_0px_8px_#f1fd82] transition-all duration-300"
      ></motion.div>
    </div>
  );
};

export default ShowCase;
