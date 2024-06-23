"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 530) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Static Navbar */}
      <nav className="absolute top-0 left-0 right-0 bg-transparent p-4 z-20">
        <div className="container mx-auto flex justify-center md:justify-between items-center text-black">
          <div className="text-4xl font-bold font-antonio">
            <Link href="/">BrandLogo</Link>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="hover:text-gray-400 font-semibold">
              About Us
            </Link>
            <Link href="/" className="hover:text-gray-400 font-semibold">
              Learn More
            </Link>
            <Link href="/">
              <motion.button
                className="bg-black text-white px-8 py-2 rounded-full font-semibold flex items-center border border-black"
                whileHover={{
                  backgroundColor: "#f1fd82",
                  color: "#000",
                  transition: { duration: 0.3 },
                }}
              >
                Contact Us
                <span className="ml-2">→</span>
              </motion.button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Floating Navbar */}
      <AnimatePresence>
        {isScrolled && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed w-full z-30 px-4"
          >
            <div className="bg-[#28292b] rounded-full shadow-lg max-w-xl mx-auto px-6 py-3 mt-4 md:px-10">
              <div className="flex justify-between items-center text-white">
                <div className="flex items-center text-lg font-bold">
                  <span className="bg-[#f1fd82] w-2 h-2 mt-1 rounded-full mr-2"></span>
                  <Link href="/" className='font-antonio'>BrandLogo</Link>
                </div>
                <div className="flex items-center space-x-6">
                  <Link href="/" className="text-gray-200">
                    Pricing
                  </Link>
                  <Link href="/" className="text-gray-200">
                    Login
                  </Link>
                  <Link href="/" className='text-[#f1fd82] font-semibold'>
                    <motion.span
                      whileHover={{ color: "#ffffff" }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      Start Free
                      <span className="ml-2">→</span>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
