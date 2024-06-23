import { motion } from 'framer-motion';

export default function StarfreeButton() {
  return (
    <motion.div
      className="flex items-center justify-center"
      whileHover={{ scaleX: 1.07 }}
      transition={{ duration: 0.3 }}
    >
      <a
        href="#"
        className="flex items-center justify-center bg-black text-white font-semibold px-10 py-3 rounded-full"
      >
        <span className="bg-[#f1fd82] h-2 w-2 rounded-full mr-3"></span>
        <span>Contact Us</span>
      </a>
    </motion.div>
  );
}
