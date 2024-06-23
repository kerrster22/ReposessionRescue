// components/FeatureSection.js
"use client";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaStar, FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';
import BoxComponent from './CardFeature';

const FeatureSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // Adjusted threshold for better delay
  });

  const features = [
    {
        icon: FaUser,
        title: "Personalized Support",
        subtitle: "Our team provides personalized support tailored to your unique situation, ensuring you have the guidance you need to navigate through tough times and avoid repossession."
    },
    {
        icon: FaStar,
        title: "Expert Advice",
        subtitle: "Receive expert advice on financial management, debt consolidation, and legal options to help you maintain ownership of your property and secure your future."
    },
    {
        icon: FaMapMarkedAlt,
        title: "Strategic Planning",
        subtitle: "We assist in creating a strategic plan to manage your finances and explore alternative solutions, giving you a clear roadmap to prevent property repossession."
    },
    {
        icon: FaCalendarAlt,
        title: "Timely Intervention",
        subtitle: "Our timely intervention services ensure you get the help you need when you need it most, providing immediate support to address urgent issues and prevent repossession."
    }
];


  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  const featureVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    }),
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <section className="max-w-7xl mx-auto px-10 sm:px-10 py-52">
      <div ref={ref} className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/5 flex flex-col justify-center">
          <motion.h1
            initial="hidden"
            animate={controls}
            variants={titleVariants}
            className="text-3xl lg:text-6xl font-semibold mb-4 tracking-tight "
          >
            Committed Experts and Compassionate Allies
          </motion.h1>
          <motion.p
            initial="hidden"
            animate={controls}
            variants={subtitleVariants}
            className="text-lg text-gray-600"
          >
            We are dedicated to providing innovative solutions and empathetic support. Our team is committed to helping you navigate the challenges of property repossession with expertise and care.
          </motion.p>
        </div>
        <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index % 4 === 0 ? 'left' : index % 4 === 1 ? 'right' : index % 4 === 2 ? 'up' : 'down'}
              initial="hidden"
              animate={controls}
              variants={featureVariants}
            >
              <BoxComponent icon={feature.icon} title={feature.title} subtitle={feature.subtitle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
