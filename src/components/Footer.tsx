import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const quickLinks = [
        { name: 'Home', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ]

    const socialLinks = [
        { name: 'GitHub', icon: FaGithub, url: 'https://github.com/ferjbadev', color: 'hover:text-gray-300' },
        { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com/in/fernandobarreraa', color: 'hover:text-blue-400' },
        { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/584124389712?text=Hello!%20I%27m%20interested%20in%20your%20services.', color: 'hover:text-green-400' },
    ]

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t border-gray-700">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1: Información Personal */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            <span className="text-green-400">Fernando</span> Barrera
                        </h3>
                        <p className=" text-sm leading-relaxed mb-4">
                            Full Stack Web Developer | Working with React, TypeScript, Next.js | 
                            Tailwind CSS| MongoDB/MySQL | IT Consultant
                        </p>
                        <a 
                            href="/CV.pdf"
                            download="Fernando_Barrera_CV.pdf"
                            className="inline-block px-6 py-2 border border-gray-600 rounded-md text-sm hover:bg-gray-700 transition-colors"
                        >
                            View Full CV
                        </a>
                    </motion.div>

                    {/* Columna 2: Enlaces Rápidos */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className=" hover:text-green-400 transition-colors text-sm cursor-pointer hover:underline"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Columna 3: Contacto y Redes Sociales */}
                    <motion.div
                        className="text-center md:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-3 mb-6">
                            <a 
                                href="mailto:barrerafernando54@gmail.com"
                                className="flex items-center justify-center md:justify-start gap-2  hover:text-green-400 transition-colors text-sm"
                            >
                                <FaEnvelope className="text-green-500" />
                                barrerafernando54@gmail.com
                            </a>
                            <p className="flex items-center justify-center md:justify-start gap-2  text-sm">
                                <FaPhone className="text-green-500" />
                                +58 412 4389712
                            </p>
                        </div>
                        
                        <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                        <div className="flex gap-4 justify-center md:justify-start">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 bg-gray-800 rounded-lg border border-gray-700 ${link.color} transition-all`}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Línea divisoria */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <motion.p 
                            className=" text-sm text-center md:text-left"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            © {currentYear} Fernando Barrera. All rights reserved. 
                            <span className="text-green-400 ml-1">Fernando Dev</span>
                        </motion.p>
                        
                        <motion.div 
                            className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm text-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a href="#" className=" hover:text-green-400 transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#" className=" hover:text-green-400 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className=" hover:text-green-400 transition-colors">
                                Cookie Settings
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    )
}