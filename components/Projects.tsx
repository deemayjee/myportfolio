import { projectone, projecttwo, projectthree, projectfour, ichota } from '@/public/assets/images/index'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RxOpenInNewWindow } from "react-icons/rx"
import React from 'react'
import SectionTitle from './SectionTitle'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SandleBloom Co.",
      category: "E-Commerce",
      description: "A home fragrance company, providing quality hand crafted fragrance products and solutions to meet your needs. Most products use plant based wax and other ingredients that are Non-Toxic, Phthalates and Parabens free.",
      image: projectone,
      technologies: ["Php", "Wordpress", "Adobe Photoshop", "Adobe Illustrator", "Woocommerce"],
      links: {
        instagram: "https://instagram.com/sandlebloomco",
        live: "https://sandlebloomco.com/"
      }
    },
    {
      id: 2,
      title: "Desta Group LLC",
      category: "Marketing & Advertising",
      description: "A digital marketing SaaS platform that combines traditional SMS/MMS campaign management with modern AI-powered content generation and sophisticated analytics capabilities.",
      image: projectfour,
      technologies: ["Nextjs", "Tailwind", "Nodejs", "Vercel"],
      links: {
        github: "https://github.com/deemayjee/sms-platform",
        live: "https://www.destagroupllc.xyz/"
      }
    },
    {
      id: 3,
      title: "Ichota",
      category: "Social Media App",
      description: "An innovative matchmaking platform combines traditional methods with cutting-edge technology, considering factors like family history, personality, mental well-being, and financial stability to create meaningful and compatible matches.",
      image: ichota,
      technologies: ["React", "JavaScript", "Tailwind", "ReactNative" ],
      links: {
        github: "#",
        live: "https://ichota.co.uk/"
      }
    }
  ];

  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
        <SectionTitle title="Featured Projects" titleNo="02"/>
        
        <div className="grid gap-12 mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`group relative bg-gradient-to-br from-bodyColor/50 to-[#112240]/50 backdrop-blur-sm border border-textGreen/10 rounded-2xl overflow-hidden hover:border-textGreen/30 transition-all duration-500 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex lg:min-h-[400px]`}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-textGreen/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Section */}
              <div className="lg:w-1/2 relative overflow-hidden">
                <div className="aspect-video lg:aspect-auto lg:h-full relative group">
                  <Image 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={project.image}
                    alt={project.title}
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-textGreen/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Overlay links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        className="p-3 bg-bodyColor/80 backdrop-blur-sm border border-textGreen rounded-full text-textGreen hover:bg-textGreen hover:text-bodyColor transition-all duration-300 transform hover:scale-110"
                      >
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.links.instagram && (
                      <a 
                        href={project.links.instagram}
                        target="_blank"
                        className="p-3 bg-bodyColor/80 backdrop-blur-sm border border-textGreen rounded-full text-textGreen hover:bg-textGreen hover:text-bodyColor transition-all duration-300 transform hover:scale-110"
                      >
                        <FaInstagram size={20} />
                      </a>
                    )}
                    <a 
                      href={project.links.live}
                      target="_blank"
                      className="p-3 bg-bodyColor/80 backdrop-blur-sm border border-textGreen rounded-full text-textGreen hover:bg-textGreen hover:text-bodyColor transition-all duration-300 transform hover:scale-110"
                    >
                      <RxOpenInNewWindow size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-textGreen font-titleFont text-sm tracking-wider uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold text-textLight mb-4 group-hover:text-textGreen transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="relative">
                    <p className="text-textDark leading-relaxed text-sm lg:text-base">
                      {project.description}
                    </p>
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-textGreen to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="px-3 py-1 text-xs font-titleFont bg-textGreen/10 border border-textGreen/20 rounded-full text-textGreen hover:bg-textGreen/20 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        className="text-textDark hover:text-textGreen transition-colors duration-300 transform hover:scale-110"
                      >
                        <FiGithub size={24} />
                      </a>
                    )}
                    {project.links.instagram && (
                      <a 
                        href={project.links.instagram}
                        target="_blank"
                        className="text-textDark hover:text-textGreen transition-colors duration-300 transform hover:scale-110"
                      >
                        <FaInstagram size={24} />
                      </a>
                    )}
                    <a 
                      href={project.links.live}
                      target="_blank"
                      className="text-textDark hover:text-textGreen transition-colors duration-300 transform hover:scale-110"
                    >
                      <RxOpenInNewWindow size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-textGreen/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500/20 to-textGreen/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}

export default Projects