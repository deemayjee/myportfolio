import React from 'react'
import SectionTitle from './SectionTitle'
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { profileimg } from '@/public/assets/images/index';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Javascript', icon: <BiLogoJavascript size={25} />, color: 'text-textYellow' },
    { name: 'React', icon: <FaReact size={25} />, color: 'text-textGreen' },
    { name: 'Node.js', icon: <FaNodeJs size={25} />, color: 'text-textIconGreen' },
    { name: 'Typescript', icon: <SiTypescript size={25} />, color: 'text-textBlue' },
    { name: 'MongoDB', icon: <SiMongodb size={25} />, color: 'text-textIconGreen' },
    { name: 'Wordpress', icon: <FaWordpress size={25} />, color: 'text-textDark' },
    { name: 'Next.js', icon: <TbBrandNextjs size={25} />, color: 'text-textLight' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={25} />, color: 'text-textGreen' },
  ];

  return (
    <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="About Me" titleNo="01" />
        
        <div className="flex flex-col lgl:flex-row gap-16">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-6"
            >
                <div className="space-y-4">
                    <p className="leading-relaxed">
                        I am a creative and passionate fullstack developer with a fantastic sense for design and user experience. With a solid foundation in both frontend and backend technologies, I am quite enthusiastic about bridging the gap between design and functionality. My journey into software development started with a fascination for the art of creating visually stunning and functional websites.
                    </p>
                    
                    <p className="leading-relaxed">
                        With a strong user-centric approach, I strive to create intuitive and delightful digital experiences. Collaboration is essential to me, and I thrive in team environments, always open to feedback and eager to adapt to new challenges. Witnessing positive user responses to my work fuels my motivation.
                    </p>
                    
                    <p className="leading-relaxed">
                        Outside of development, I enjoy playing video games, reading, and meeting new people. I'm excited to collaborate with like-minded individuals and organizations to create something amazing together. Let's embark on an exciting journey to shape the digital world!
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mt-8">
                    <h4 className="text-textLight font-titleFont text-lg mb-6">Technologies I work with</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-bodyColor/50 to-[#112240]/50 border border-textGreen/10 hover:border-textGreen/30 transition-all duration-300"
                            >
                                <span className={`${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                                    {skill.icon}
                                </span>
                                <span className="text-sm font-titleFont text-textDark group-hover:text-textLight transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full lgl:w-1/3 h-fit relative group"
            >
                <div className="relative">
                    <div className="relative z-20 overflow-hidden rounded-2xl">
                        <Image
                            className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                            src={profileimg}
                            alt="Profile Image"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-textGreen/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Decorative border */}
                    <div className="absolute inset-0 border-2 border-textGreen/30 rounded-2xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    
                    {/* Floating elements */}
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                            rotate: [0, 3, 0]
                        }}
                        transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-textGreen/30 to-purple-500/30 rounded-full blur-xl"
                    ></motion.div>
                    
                    <motion.div
                        animate={{ 
                            y: [0, 8, 0],
                            rotate: [0, -2, 0]
                        }}
                        transition={{ 
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                        className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-textGreen/30 rounded-full blur-xl"
                    ></motion.div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default About