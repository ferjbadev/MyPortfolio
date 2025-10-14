"use client"

import Link from 'next/link'
import { useState } from 'react'
import { FaHome, FaBriefcase, FaTools, FaEnvelope, FaUserTie } from 'react-icons/fa'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'


// Componente principal del Navbar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const socialLinks = [
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/fernandobarreraa', color: 'text-blue-700 hover:text-blue-600 hover:scale-150' },
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ferjbadev', color: 'text-white hover:text-gray-300 hover:scale-150' },
    ]

    return (
        // Encabezado con fondo oscuro y sombra
        <motion.header 
            className="bg-gray-800 shadow-xl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Contenedor principal, centrado y con un límite de ancho */}
            <div className="max-w-screen-2xl mx-auto sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-2">
                    <motion.div 
                        className="flex items-center space-x-2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {/* Ícono de Inicio al lado del nombre del portafolio */}
                        <FaHome className="text-white ml-24 text-2xl" />
                        <Link href="/">
                            <span className="text-3xl font-bold text-white hover:bg-gray-700 px-3 py-2 rounded-md transition duration-300 hover:scale-105">
                                My Portfolio
                            </span>
                        </Link>
                    </motion.div>

                    {/* Menú  */}
                    <motion.nav 
                        className="hidden md:flex space-x-8"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {/* Enlace a 'Experience' con ícono y texto */}
                        <Link href="#experience">
                            <span className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium transition duration-300 hover:scale-105">
                                <FaUserTie className="mr-2" /> Experience
                            </span>
                        </Link>
                        {/* Enlace a 'Skills' con ícono y texto */}
                        <Link href="#skills">
                            <span className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium transition duration-300 hover:scale-105">
                                <FaTools className="mr-2" /> Skills
                            </span>
                        </Link>
                        {/* Enlace a 'Projects' con ícono y texto */}
                        <Link href="#projects">
                            <span className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium transition duration-300 hover:scale-105">
                                <FaBriefcase className="mr-2" /> Projects
                            </span>
                        </Link>
                        {/* Enlace a 'Contact' con ícono y texto */}
                        <Link href="#contact">
                            <span className="flex items-center text-white hover:bg-gray-700 px-3 py-2 rounded-md text-2xl font-medium transition duration-300 hover:scale-105">
                                <FaEnvelope className="mr-2" /> Contact
                            </span>
                        </Link>

                        {/* Redes sociales */}
                        <div className=" flex items-center justify-between p-3 rounded-lg shadow-md space-x-3 border border-white">
                            <h3 className="text-2xl font-bold text-white">Follow Me</h3>
                            <div className="flex space-x-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${link.color} transition duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                                        aria-label={`Follow me on ${link.name}`}
                                    >
                                        <link.icon className="w-8 h-8" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.nav>

                    {/* Botón para abrir/cerrar el menú móvil */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
                            {/* Ícono que cambia según el estado 'isOpen' */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    // Ícono 'X' cuando el menú está abierto
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    // Ícono de 'hamburguesa' cuando el menú está cerrado
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isOpen && (
                    <div className="md:hidden">
                        <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {/* Cada enlace tiene ícono y texto */}
                            <Link href="#experience">
                                <span className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                    <FaUserTie className="mr-2" /> Experience
                                </span>
                            </Link>
                            <Link href="#skills">
                                <span className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                    <FaTools className="mr-2" /> Skills
                                </span>
                            </Link>
                            <Link href="#projects">
                                <span className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                    <FaBriefcase className="mr-2" /> Projects
                                </span>
                            </Link>
                            <Link href="#contact">
                                <span className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                    <FaEnvelope className="mr-2" /> Contact
                                </span>
                            </Link>
                        </nav>
                    </div>
                )}  
            </div>
        </motion.header>
    );
}
