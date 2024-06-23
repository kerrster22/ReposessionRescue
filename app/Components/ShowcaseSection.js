// components/MainSection.js
"use client"
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ShowCase from './Showcase';

const ShowcaseSection = () => {
  const data = [
    {
        title: "Financial Strategies",
        paragraph: "We create tailored financial plans to help you manage debt and maintain property ownership. Our strategies are designed to fit your unique circumstances."
    },
    {
        title: "Expert Legal Guidance",
        paragraph: "Our legal experts provide advice on navigating property laws and preventing repossession, ensuring you understand your rights and options."
    },
    {
        title: "Debt Management Solutions",
        paragraph: "We offer robust debt management solutions to help you consolidate and reduce debt, making it easier to keep up with your payments and protect your property."
    },
    {
        title: "Crisis Intervention",
        paragraph: "Our team is ready to step in during financial crises, offering immediate support and solutions to prevent repossession and stabilize your situation."
    },
    {
        title: "Long-Term Financial Planning",
        paragraph: "We assist you in developing a comprehensive long-term financial plan, ensuring sustainable financial health and helping you achieve your future goals while keeping your property secure."
    }
];


  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className="w-full py-52 px-2 sm:px-10">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        ref={ref}
      >
        <motion.h1
          className="text-6xl font-semibold max-w-2xl mx-auto font-antonio"
          variants={itemVariants}
        >
          Tailored Solutions For your needs
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          From personalized financial strategies to expert legal guidance, our team delivers comprehensive support to save you from being repossessed and help you navigate financial challenges to protect your property.
        </motion.p>
      </motion.div>
      <motion.div
        className="space-y-8 mt-32"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ShowCase title={item.title} paragraph={item.paragraph} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ShowcaseSection;
