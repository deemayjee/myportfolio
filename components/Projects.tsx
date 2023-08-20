import { projectone, projecttwo, projectthree } from '@/public/assets/images/index'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx"
import React from 'react'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitle title="Featured Projects" titleNo="02"/>
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a 
                        href="https://sandlebloomco.com/" 
                        target="_blank"
                        className="w-full xl:w-1/2 h-auto relative group"
                    >
                        <div>
                            <Image 
                                className="w-full h-full object-contain"
                                src={projectone}
                                alt="sandlebloomco"
                            />
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-10 z-10">
                    <div>
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            E-Commerce
                        </p>
                        <h3 className="text-2xl font-bold">SandleBloom Co.</h3>
                    </div>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                        A home fragrance company, providing quality hand crafted fragrance products and solutions to meet your needs.
                        Most products use plant based wax and other ingredients that are Non-Toxic, Phthalates and Parabens free.
                    </p>
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                        <li>Php</li>
                        <li>Wordpress</li>
                        <li>Adobe Photoshop</li>
                        <li>Adobe Illustrator</li>
                        <li>Woocommerce</li>
                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://instagram.com/sandlebloomco"
                            target="_blank"
                        >
                            <FaInstagram />
                        </a>
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://sandlebloomco.com/"
                            target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row-reverse gap-6">
                    <a 
                        href="https://devgym.netlify.app/" 
                        target="_blank"
                        className="w-full xl:w-1/2 h-auto relative group"
                    >
                        <div>
                            <Image 
                                className="w-full h-full object-contain"
                                src={projecttwo}
                                alt="sandlebloomco"
                            />
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10">
                    <div>
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Health & Wellness App
                        </p>
                        <h3 className="text-2xl font-bold">Fitness Club</h3>
                    </div>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xl:-mr-10">
                    The all-in-one fitness app for developers. Improve posture, reduce eye strain, and manage stress with tailored workouts and guided meditations. 
                    Stay connected, track progress, and boost productivity
                    </p>
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Material UI</li>
                        <li>Netlify</li>
                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/deemayjee/gym-app"
                            target="_blank"
                        >
                            <FiGithub />
                        </a>
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://devgym.netlify.app/"
                            target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
                <div className="flex flex-col xl:flex-row gap-6">
                    <a 
                        href="https://pintree.netlify.app/" 
                        target="_blank"
                        className="w-full xl:w-1/2 h-auto relative group"
                    >
                        <div>
                            <Image 
                                className="w-full h-full object-contain"
                                src={projectthree}
                                alt="sandlebloomco"
                            />
                        </div>
                    </a>
                    <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-10 z-10">
                    <div>
                        <p className="font-titleFont text-textGreen text-sm tracking-wide">
                            Social Media App
                        </p>
                        <h3 className="text-2xl font-bold">Share Me</h3>
                    </div>
                    <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                    A visual discovery app like Pinterest. Explore and save inspiring ideas, images, and recipes from around the web. 
                    Organize and share your collections effortlessly
                    </p>
                    <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>Tailwind</li>
                        <li>Sanity</li>
                        <li>Express.js</li>
                    </ul>
                    <div className="text-2xl flex gap-4">
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://github.com/deemayjee/pintree"
                            target="_blank"
                        >
                            <FiGithub />
                        </a>
                        <a 
                            className="hover:text-textGreen duration-300"
                            href="https://pintree.netlify.app/"
                            target="_blank"
                        >
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects