import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
        id="home"
        className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 relative"
    >
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-textGreen/5 via-transparent to-purple-500/5 rounded-3xl blur-3xl"></div>
        
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} 
            className="text-lg font-titleFont tracking-wide text-textGreen relative z-10"
        >
            Hi, my name is
        </motion.h3>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }} 
            className="text-4xl lgl:text-6xl font-titleFont font-bold flex flex-col relative z-10"
        >
            <span className="bg-gradient-to-r from-textLight via-textGreen to-textLight bg-clip-text text-transparent">
                Oladimeji Onatunde
            </span>
            <span className="text-textDark mt-2 lgl:mt-4 md:max-w-[650px] text-2xl lgl:text-4xl">
                I craft meaningful digital experiences
            </span>
        </motion.h1>
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} 
            className="text-base md:max-w-[650px] text-textDark font-medium leading-relaxed relative z-10"
        >
            Welcome to my digital realm, where innovation meets elegant code. I'm a passionate software developer dedicated to transforming ideas into seamless, user-centric applications. With a keen eye for detail and a flair for problem-solving, I craft digital solutions that not only function flawlessly but also create meaningful experiences. 
        </motion.p>

        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex gap-4 relative z-10"
        >
            <a href="#projects">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-textGreen/10 to-textGreen/5 border border-textGreen rounded-lg text-textGreen font-titleFont tracking-wide hover:from-textGreen/20 hover:to-textGreen/10 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Check out my Projects!</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-textGreen/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </a>
            <a href="#contact">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/50 rounded-lg text-purple-300 font-titleFont tracking-wide hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </a>
        </motion.div>

        {/* Floating elements for visual interest */}
        <motion.div
            animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
            }}
            transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-textGreen/20 to-purple-500/20 rounded-full blur-xl"
        ></motion.div>
        
        <motion.div
            animate={{ 
                y: [0, 15, 0],
                rotate: [0, -3, 0]
            }}
            transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
            }}
            className="absolute bottom-20 left-5 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-textGreen/20 rounded-full blur-xl"
        ></motion.div>
    </section>
  );
}

export default Banner