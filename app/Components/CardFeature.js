// components/BoxComponent.js
"use client";
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const BoxComponent = ({ icon: Icon, title, subtitle }) => {
  return (
    <motion.div 
      whileHover={{
        scale: 1.05,
        borderColor: '#e6e851', // Stronger shade of yellow
        boxShadow: '0px 0px 20px 5px rgba(230, 232, 81, 0.7)',
        rotate:1.2
      }}
      className="w-full border border-gray-200 bg-white py-8 px-4 rounded-3xl"
    >
      <div className="flex flex-col items-start">
        <div className="bg-gray-200 rounded-2xl p-4 mb-2">
          <Icon className="text-gray-600 text-2xl" />
        </div>
        <h2 className="text-xl font-bold mt-4">{title}</h2>
        <p className="text-sm text-gray-500 mt-2">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default BoxComponent;
