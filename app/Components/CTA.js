"use client";
import { useState, useEffect } from 'react';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import IconBox from "./IconBox";
import { useInView } from "react-intersection-observer"

// Define SVG icons
const ClockIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <path d="M80 30H350V70H80V30Z" stroke="#121331" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M315 70V132.732C315 146.906 308.984 160.414 298.448 169.897L248.333 215L298.448 260.103C308.984 269.586 315 283.094 315 297.268V360M115 70V132.732C115 146.906 121.016 160.414 131.552 169.897L181.667 215L131.552 260.103C121.016 269.586 115 283.094 115 297.268V360" stroke="#121331" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M80 360H350V400H80V360Z" stroke="#121331" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M155 299.367C155 293.432 157.636 287.803 162.196 284.003L205.397 248.002C210.96 243.367 219.04 243.367 224.603 248.002L267.804 284.003C272.364 287.803 275 293.432 275 299.367V320H155V299.367Z" stroke="#FFD700" strokeWidth="12" strokeLinejoin="round"/>
    </svg>
  );
  
  
  const CalendarIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <mask id="mask0_2174_7179" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="40" y="70" width="354" height="317">
        <path d="M393.526 70.752H40.0825V386.182H285.962C264.51 374.221 250 351.305 250 325C250 286.34 281.34 255 320 255C358.66 255 390 286.34 390 325C390 335.136 387.845 344.77 383.969 353.467H393.526V70.752Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2174_7179)">
        <path d="M376 370H54V87.4004H376V370Z" fill="white" stroke="#121331" strokeWidth="12" strokeMiterlimit="12.88" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <path d="M129.9 87.4008H86.2002V48.8008H129.9V87.4008Z" stroke="#121331" strokeWidth="12" strokeMiterlimit="12.88" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M343.8 87.4008H300.1V48.8008H343.8V87.4008Z" stroke="#121331" strokeWidth="12" strokeMiterlimit="12.88" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="215" cy="290" r="25" stroke="#121331" strokeWidth="12"/>
      <path d="M376 135H54" stroke="#121331" strokeWidth="12" strokeMiterlimit="12.88" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="320" cy="325" r="70" stroke="#FFD700" strokeWidth="12"/>
      <path d="M320 295V355M350 325L290 325" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="125" cy="290" r="25" stroke="#FFD700" strokeWidth="12"/>
      <circle cx="125" cy="200" r="25" stroke="#121331" strokeWidth="12"/>
      <circle cx="215" cy="200" r="25" stroke="#FFD700" strokeWidth="12"/>
      <circle cx="305" cy="200" r="25" stroke="#121331" strokeWidth="12"/>
    </svg>
  );
  
  const ChecklistIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <path d="M133.1 250.6L294.2 151.9" stroke="#FFD700" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M273.6 148.3L294.2 151.9L290.7 172.5" stroke="#FFD700" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M161.8 295H133.1V334.2H161.8V295Z" stroke="#FFD700" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M228.1 255.8H199.4V334.2H228.1V255.8Z" stroke="#FFD700" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M294.4 215H265.7V334.2H294.4V215Z" stroke="#FFD700" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M352.8 375.2H77.4C65 375.2 55 365.2 55 352.8V77.4C55 65 65 55 77.4 55H352.8C365.2 55 375.2 65 375.2 77.4V352.8C375.2 365.2 365.2 375.2 352.8 375.2Z" stroke="#121331" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M373.2 106.4H55" stroke="#121331" strokeWidth="12" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M143 80.7H143.1" stroke="#FFD700" strokeWidth="15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M86.7002 80.7H86.8002" stroke="#FFD700" strokeWidth="15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M114.8 80.7H115" stroke="#FFD700" strokeWidth="15" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  
  const HourglassIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <path d="M268 340L251.986 323.219C240.748 311.443 233.966 296.117 232.806 279.88L230.243 244M161 340L177.014 323.219C188.252 311.443 195.034 296.117 196.194 279.88L198.757 244" stroke="#121331" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M295 340H135V390H295V340Z" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M304 174.971C343.399 173.872 375 141.588 375 101.923C375 89.8153 365.185 80 353.077 80H312.5M117.5 80H77.1538C64.9186 80 55 89.9186 55 102.154C55 142.053 86.6424 174.561 126.202 175.954" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M115 45H315L306.357 160.238C302.772 208.043 262.939 245 215 245C167.061 245 127.228 208.043 123.643 160.238L115 45Z" stroke="#121331" strokeWidth="12" strokeLinejoin="round"/>
      <path d="M214.915 95L201.039 122.978L170 127.468L192.462 149.249L187.153 180L214.915 165.483L242.676 180L237.367 149.249L259.83 127.468L228.79 122.978L214.915 95Z" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M175 365H255" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  
  const PlannerIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <path d="M185.56 148.57C185.56 148.57 120.15 140.38 74.5098 186.02C122.95 187.28 141.02 205.34 141.02 205.34" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M281.79 244.81C281.79 244.81 289.98 310.22 244.34 355.86C243.08 307.42 225.02 289.35 225.02 289.35" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M208.21 284.57L193.39 289.2C178.59 293.83 162.44 289.86 151.47 278.89C140.5 267.92 136.53 251.77 141.16 236.97L145.8 222.15" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M277.36 194.17C265.73 205.8 246.88 205.8 235.25 194.17C223.62 182.54 223.62 163.69 235.25 152.07C246.88 140.45 265.73 140.44 277.36 152.07C288.99 163.69 288.99 182.54 277.36 194.17Z" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M209.8 283.57C215.57 289.34 224.64 290.22 231.37 285.61C247.31 274.7 266.75 257.96 291.97 232.74C339.42 185.29 361.97 124.65 356.66 72.7599C304.78 67.4499 244.13 89.9999 196.68 137.45C171.47 162.66 154.72 182.11 143.81 198.05C139.2 204.79 140.08 213.85 145.85 219.62L209.8 283.57Z" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M276.94 86.5199C276.94 86.5199 278.73 106.35 301.31 128.93C323.89 151.51 342.91 152.48 342.91 152.48" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M135.81 335.34C124.55 346.6 95.65 355.11 73 357.37C76.26 333.71 83.76 305.82 95.03 294.56C106.29 283.3 124.55 283.3 135.81 294.56C147.07 305.82 147.07 324.08 135.81 335.34Z" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  const TimerIcon = () => (
    <svg width="430" height="430" viewBox="0 0 430 430" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <path d="M145 222.22C168.5 245.72 190.14 267.36 190.14 267.36C190.14 267.36 252.8 204.49 297.15 160" stroke="#FFD700" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M214.999 395C402.992 304.527 384.187 167.204 384.187 84.3221C329.964 76.5151 214.999 35 214.999 35C214.999 35 100.035 76.5151 45.8117 84.3116C45.8117 167.204 27.0063 304.527 214.999 395Z" stroke="#121331" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

const CtaCard = () => {
    const [isHoveringYes, setIsHoveringYes] = useState(false);
    const [isHoveringNo, setIsHoveringNo] = useState(false);
  
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
  
    return (
      <div className="flex items-center justify-center min-h-[1300px] bg-gray-100 ">
        <div className="relative px-4">
          <motion.div
       
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="bg-white rounded-3xl shadow-md max-w-2xl w-full h-[480px] py-8 px-6 sm:px-12 md:px-24 flex flex-col items-center mx-auto z-50"
          >
            <div className="mb-4 mt-6">
              <Image src="/assets/apple.png" alt="Logo" width={100} height={100} />
            </div>
            <h2 className="text-5xl font-semibold mb-4 mt-6 text-center font-antonio">Ready To Get Organised?</h2>
            <div className="flex space-x-4 mb-4 mt-8">
              <motion.button
                className="bg-[#f1fd82] text-black py-3 px-14 rounded-full text-2xl border border-black font-semibold"
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHoveringYes(true)}
                onHoverEnd={() => setIsHoveringYes(false)}
              >
                Hover
              </motion.button>
              <motion.button
                className="bg-white text-black py-3 px-14 rounded-full text-2xl border border-black font-semibold"
                whileHover={{ backgroundColor: "#d3d3d3" }}
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsHoveringNo(true)}
                onHoverEnd={() => setIsHoveringNo(false)}
              >
                No
              </motion.button>
            </div>
            <div className="text-center mt-4">
              <div className="flex flex-col items-center mb-2">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="text-xl mr-2 text-gray-700"
                  />
                  <p className="text-xl text-gray-700 ">
                    Your safety is our priority
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className="text-xl mr-2 text-gray-700"
                  />
                  <p className="text-xl text-gray-700">No money required</p>
                </div>
              </div>
            </div>
          </motion.div>
  
          {/* IconBoxes around the CTA card */}
          <motion.div
            className="absolute -bottom-2/4 left-0 transform -translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "300%", y: "-300%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={ClockIcon} size={80} rotation={-8} />
          </motion.div>
          <motion.div
            className="absolute top-1/4 -left-1/4 transform -translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "250%", y: "100%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={CalendarIcon} size={80} rotation={-15} />
          </motion.div>
          <motion.div
            className="absolute -top-2/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "100%", y: "300%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={ChecklistIcon} size={80} rotation={-15} />
          </motion.div>
  
          <motion.div
            className="absolute -top-2/4 right-0 transform translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "-80%", y: "300%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={HourglassIcon} size={80} rotation={18} />
          </motion.div>
          <motion.div
            className="absolute top-1/4 -right-2/4 transform translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "-400%", y: "50%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={PlannerIcon} size={80} rotation={25} />
          </motion.div>
          <motion.div
            className="absolute -bottom-2/4 -right-1/4 transform translate-x-1/2 -translate-y-1/2"
            animate={isHoveringYes ? { x: "-250%", y: "-300%", opacity: "0" } : { x: 0, y: 0 }}
          >
            <IconBox icon={TimerIcon} size={80} rotation={15} />
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default CtaCard;