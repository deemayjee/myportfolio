import React from 'react'
import SectionTitle from './SectionTitle'
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact, FaWordpress, FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTypescript, SiMongodb, SiTailwindcss } from "react-icons/si";
import { profileimg } from '@/public/assets/images/index';
import Image from 'next/image';
const About = () => {
  return (
    <section
        id="about"
        className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                I am a creative and passionate fullstack developer with a keen eye for design and user experience. With a solid foundation in both frontend and backend technologies, I thrive on bridging the gap between design and functionality. My journey into software development started with a fascination for the art of creating visually stunning and functional websites. I am proficient in a versatile tech stack, including JavaScript, React, Node.js, Next.js HTML5 and CSS3</p>
                <p>With a strong user-centric approach, I strive to create intuitive and delightful digital experiences. Collaboration is essential to me, and I thrive in team environments, always open to feedback and eager to adapt to new challenges. Witnessing positive user responses to my work fuels my motivation. Outside of development, I enjoy playing video games, reading, and meeting new people. </p>
                <p>I'm excited to collaborate with like-minded individuals and organizations to create something amazing together. Let's embark on an exciting journey to shape the digital world!
                </p>
                <p>Here are some of the technologies I have been working with recently</p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2">
                    <li className="flex items-center gap-2">
                        <span className="text-textYellow"><BiLogoJavascript size={25} /></span>
                        Javascript
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen"><FaReact size={25} /></span>
                        React
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textIconGreen"><FaNodeJs size={25} /></span>
                        Node.js
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textBlue"><SiTypescript size={25} /></span>
                        Typescript
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textIconGreen"><SiMongodb size={25} /></span>
                        MongoDB
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textDark"><FaWordpress size={25} /></span>
                        Wordpress
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textLight"><TbBrandNextjs size={25} /></span>
                        Next.js
                    </li>
                    <li className="flex items-center gap-2 pt-6">
                        <span className="text-textGreen"><SiTailwindcss size={25} /></span>
                        Tailwind CSS
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-2/3 h-full relative group">
                <div className="lgl:absolute w-full h-full -left-6 -top-6 rounded-lg">
                    <div className="w-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image
                            className="rounded-lg h-full object-cover"
                            src={profileimg}
                            alt="myImg"
                        />
                        <div className="hidden lgl:inline-block absolute h-full w-full bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
                    </div> 
                </div>
                <div className="hidden lgl:inline-flex w-full h-[720px] border-2 border-textGreen rounded-md group-hover: -translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
        </div>
    </section>
  )
}

export default About