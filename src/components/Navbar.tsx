import { useState, useEffect } from 'react'
import { FaBriefcase, FaTools, FaEnvelope, FaUserTie, FaCode, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Experience', href: '#experience', icon: FaUserTie },
        { name: 'Skills', href: '#skills', icon: FaTools },
        { name: 'Projects', href: '#projects', icon: FaBriefcase },
        { name: 'Contact', href: '#contact', icon: FaEnvelope },
    ];

    const socialLinks = [
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/fernandobarreraa', color: 'hover:text-blue-400' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ferjbadev', color: 'hover:text-gray-300' },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
                    : 'bg-transparent'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center space-x-2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="flex items-center space-x-2 group cursor-pointer"
                        >
                            <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                                <FaCode className="text-white text-xl" />
                            </div>
                            <span className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                                Fernando<span className="text-green-400">Dev</span>
                            </span>
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav 
                        className="hidden md:flex items-center space-x-1"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white text-base font-medium rounded-lg hover:bg-gray-800/50 transition-all group cursor-pointer"
                            >
                                <link.icon className="text-green-400 group-hover:scale-110 transition-transform text-lg" />
                                {link.name}
                            </button>
                        ))}

                        {/* Divider */}
                        <div className="h-6 w-px bg-gray-700 mx-2"></div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 text-gray-300 ${link.color} transition-all hover:scale-110 rounded-lg hover:bg-gray-800/50`}
                                    aria-label={`Follow me on ${link.name}`}
                                >
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className="p-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all"
                            aria-label="Toggle menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div 
                            className="md:hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <nav className="px-2 pt-2 pb-4 space-y-1 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <button
                                            onClick={() => scrollToSection(link.href)}
                                            className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg text-base font-medium transition-all w-full text-left cursor-pointer"
                                        >
                                            <link.icon className="text-green-400" />
                                            {link.name}
                                        </button>
                                    </motion.div>
                                ))}
                                
                                {/* Mobile Social Links */}
                                <div className="flex justify-center gap-4 pt-4 border-t border-gray-800 mt-2">
                                    {socialLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`p-3 text-gray-300 ${link.color} transition-all hover:scale-110 rounded-lg bg-gray-800/50`}
                                            aria-label={`Follow me on ${link.name}`}
                                        >
                                            <link.icon className="w-6 h-6" />
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>  
            </div>
        </motion.header>
    );
}