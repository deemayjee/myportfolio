import React from 'react';
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
        id="home"
        className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
        <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }} 
            className="text-lg font-titleFont tracking-wide text-textGreen"
        >
            Hi, my name is
        </motion.h3>
        <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }} 
            className="text-4xl lgl:text-6xl font-titleFont font-bold flex flex-col"
        >
            Oladimeji Onatunde. 
            <span className="text-textDark mt-2 lgl:mt-4 md:max-w-[650px]">
                I craft meaningful experiences
            </span>
        </motion.h1>
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }} 
            className="text-base md:max-w-[650px] text-textDark font-medium"
        >
            Welcome to my digital realm, where innovation meets elegant code. I'm a passionate software developer dedicated to transforming ideas into seamless, user-centric applications. With a keen eye for detail and a flair for problem-solving, I craft digital solutions that not only function flawlessly but also create meaningful experiences. 
        </motion.p>

        <a href="#projects">
            <motion.button 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y:0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="w-52 h-14 text-sm font-titlefont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
                Check out my Projects!
            </motion.button>
        </a>
    </section>
  );
}

export default Banner