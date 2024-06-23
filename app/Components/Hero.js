'use client'

import React, { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline';

// const stats = [
//   { id: 1, name: 'Total Subscribers', stat: '71,897', icon: UsersIcon, change: '122', changeType: 'increase' },
//   { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: EnvelopeOpenIcon, change: '5.4%', changeType: 'increase' },
//   { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: CursorArrowRaysIcon, change: '3.2%', changeType: 'decrease' },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const spring = useSpring(from, { stiffness: 50, damping: 20 });

  useEffect(() => {
    spring.set(to);
    spring.onChange((value) => setCount(Math.round(value)));
  }, [spring, to]);

  return <motion.span>{count}</motion.span>;
};

export default function Hero() {
  const images = [
    '/house1.jpg',
    '/house2.jpg',
    '/house3.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-gray-100 py-20 p-4 flex items-starts justify-center rounded-lg">
      <div className="flex flex-col xl:flex-row flex-1 max-w-screen-2xl h-full gap-4">
        <motion.div
          initial={{ x: '-10vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          layout
          className="flex-1 flex items-center justify-center"
        >
          <div className="bg-white rounded-lg p-4 shadow-lg w-full h-full flex flex-col items-start justify-start">
            <h1 className="text-4xl md:text-6xl lg:text-6xl mt-12 mb-4 text-left ml-10">
              Protect Your Property, Secure Your Future
            </h1>
            <p className="text-left ml-10 mr-10 mb-8 mt-6 text-gray-500">
            At Repossession Rescue, we are dedicated to helping individuals facing the threat of property repossession. Our mission is to provide comprehensive support and practical solutions to safeguard your home and assets.
            </p>
            <div className="ml-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 mt-6">
              <button className="bg-slate-900 text-white rounded-full px-8 py-4 flex items-center hover:bg-gray-300 hover:text-slate-900 text-xs sm:text-lg">
                  Find out more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-gray-300 text-slate-900 rounded-full px-8 py-4 hover:bg-slate-900 hover:text-white text-xs sm:text-lg">
                Book a call
              </button>
            </div>
            <div className="md:mt-40 mt-20 ml-10 flex space-x-16 mb-12">
              <div className="flex flex-col items-start">
                <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                  <Counter from={0} to={12} />+
                </p>
                <p className="text-sm text-gray-500 mt-2 max-w-40">Houses saved from repossession.</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                  <Counter from={0} to={1} />M+
                </p>
                <p className="text-sm text-gray-500 mt-2 max-w-40">Property value saved from repossession</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: '10vw', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          layout
          className="flex-1 flex items-center justify-center relative overflow-hidden rounded-lg shadow-lg w-full"
        >
          <AnimatePresence>
            {images.map((image, index) => (
              index === currentImageIndex && (
                <motion.div
                  key={index}
                  initial={{ x: '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: '-100%'}}
                  transition={{ type: 'spring', stiffness: 70, damping: 12, duration: 1 }}
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              )
            ))}
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 mb-4 ml-4 space-y-4">
            {/* {stats.slice(0, 2).map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 shadow sm:px-6 sm:pt-6 w-96"
              >
                <dt>
                  <div className="absolute rounded-md bg-slate-900 p-3 hover:bg-slate-700">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-4 sm:pb-4">
                  <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                  <p
                    className={classNames(
                      item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                      'ml-2 flex items-baseline text-sm font-semibold'
                    )}
                  >
                    {item.changeType === 'increase' ? (
                      <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                    ) : (
                      <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                    )}
                    <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                    {item.change}
                  </p>
                </dd>
              </div>
            ))} */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};