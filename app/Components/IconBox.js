// IconBox.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';

const floatAnimation = (rotation) => ({
  y: [0, -15, 0],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
  },
  rotate: rotation,
});

const IconBox = ({ icon: Icon, rotation = 20, size = 80 }) => {
  const boxSize = `${size}px`;

  return (
    <motion.div
      className="flex items-center justify-center rounded-xl"
      style={{
        width: boxSize,
        height: boxSize,
        background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        boxShadow: '9px 9px 18px #b8b8b8, -9px -9px 18px #ffffff',
      }}
      initial={{ rotate: rotation }}
      animate={floatAnimation(rotation)}
    >
      <Icon className="w-1/2 h-1/2" />
    </motion.div>
  );
};

export default IconBox;
