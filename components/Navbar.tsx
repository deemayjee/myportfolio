import Link from 'next/link'
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialTwitter, SlSocialInstagram } from "react-icons/sl";

const Navbar = () => {
    const ref = useRef<string | any>("")
    const [showMenu, setShowMenu] = useState(false) 
    
    const handleScroll = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setShowMenu(false);

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const el = document.getElementById(targetId)
        el?.scrollIntoView({
            behavior: "smooth"
        });
        
        const links = document.querySelectorAll(".nav-link")
        links.forEach((link) => {
            link.classList.remove("active")
        });
        e.currentTarget.classList.add("active");
    }

    function handleClick (e: any) {
        if(e.target.contains(ref.current)) {
            setShowMenu(false);
        }
    }

    const navItems = [
        { href: "#home", label: "Home", number: "" },
        { href: "#about", label: "About", number: "01." },
        { href: "#projects", label: "Projects", number: "02." },
        { href: "#contact", label: "Contact", number: "03." },
    ];

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor/80 backdrop-blur-md border-b border-textGreen/10 px-4">
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between"> 
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="group"
            >
                <Link href="#home" onClick={handleScroll}>
                    <div className="text-3xl lg:text-4xl font-bold font-titleFont text-textLight hover:text-textGreen transition-colors duration-300 cursor-pointer select-none">
                        <span className="text-textGreen">{'{'}</span>
                        <span className="text-textGreen">{'{'}</span>
                        <span className="bg-gradient-to-r from-textLight via-textGreen to-textLight bg-clip-text text-transparent hover:from-textGreen hover:via-textLight hover:to-textGreen transition-all duration-500">
                            oola
                        </span>
                        <span className="text-textGreen">{'}'}</span>
                        <span className="text-textGreen">{'}'}</span>
                    </div>
                </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden mdl:inline-flex items-center gap-7">
                <ul className="flex text-[13px] gap-7">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.href}
                            href={item.href} 
                            onClick={handleScroll}
                            className="group flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link relative"
                        >
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: index * 0.1 }}
                                className="flex items-center gap-1 py-2 px-3 rounded-lg transition-all duration-300 group-hover:bg-textGreen/10"
                            >
                                {item.number && <span className="text-textGreen">{item.number}</span>} 
                                {item.label}
                            </motion.li>
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-textGreen transition-all duration-300 group-hover:w-full"></div>
                        </Link>
                    ))}
                </ul>
            </div>
            
            {/* Mobile Hamburger Menu */}
            <div  
                onClick={() => setShowMenu(true)} 
                className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
            >
                <motion.span 
                    className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"
                    whileHover={{ scaleX: 1.1 }}
                ></motion.span>
                <motion.span 
                    className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"
                    whileHover={{ scaleX: 1.1 }}
                ></motion.span>
                <motion.span 
                    className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"
                    whileHover={{ scaleX: 1.1 }}
                ></motion.span>          
            </div>
            
            {/* Mobile Menu */}
            {showMenu && (
                <div 
                    ref={(node) => (ref.current = node)}
                    className="fixed mdl:hidden top-0 right-0 w-full h-screen bg-black/50 backdrop-blur-sm flex flex-col items-end z-50"
                >
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-gradient-to-b from-bodyColor to-[#112240] backdrop-blur-lg border-l border-textGreen/20 flex flex-col items-center px-4 py-10 relative"
                    >
                        <MdOutlineClose 
                            onClick={() => setShowMenu(false)} 
                            className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4 transition-colors duration-300"
                        />
                        
                        <div className="flex flex-col text-base gap-7 mt-16">
                            <ul className="flex flex-col text-base gap-7">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.href}
                                        href={item.href} 
                                        onClick={handleScroll}
                                        className="group flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                    >
                                        <motion.li
                                            initial={{ x: 20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2, delay: index * 0.1, ease: "easeIn" }}
                                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-textGreen/10 transition-all duration-300 w-full"
                                        >
                                            {item.number && <span className="text-textGreen font-mono">{item.number}</span>}
                                            {item.label}
                                        </motion.li>
                                    </Link>
                                ))}
                            </ul>
                            
                            {/* Social Links */}
                            <div className="flex gap-4 justify-center pt-8">
                                <motion.a
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                    href="https://github.com/deemayjee"
                                    target="_blank"
                                    className="w-12 h-12 text-xl bg-textGreen/10 border border-textGreen/20 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:bg-textGreen/20 transition-all duration-300"
                                >
                                    <TbBrandGithub />
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.7 }}
                                    href="https://linkedin.com/in/oladimeji-onatunde"
                                    target="_blank"
                                    className="w-12 h-12 text-xl bg-textGreen/10 border border-textGreen/20 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:bg-textGreen/20 transition-all duration-300"
                                >
                                    <SlSocialLinkedin />
                                </motion.a>
                                <motion.a
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 }}
                                    href="https://twitter.com/deemayjee"
                                    target="_blank"
                                    className="w-12 h-12 text-xl bg-textGreen/10 border border-textGreen/20 rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:bg-textGreen/20 transition-all duration-300"
                                >
                                    <SlSocialTwitter />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar