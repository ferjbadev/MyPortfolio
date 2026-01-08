import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
    const contactMethods = [
        {
            title: 'WhatsApp',
            description: 'Chat with me instantly',
            icon: FaWhatsapp,
            color: 'from-green-500 to-emerald-600',
            hoverColor: 'hover:shadow-green-500/50',
            url: 'https://wa.me/584124389712?text=Hello!%20I%27m%20interested%20in%20your%20services.',
            buttonText: 'Start Chat'
        },
        {
            title: 'Email',
            description: 'Send me an email',
            icon: FaEnvelope,
            color: 'from-blue-500 to-cyan-600',
            hoverColor: 'hover:shadow-blue-500/50',
            url: 'mailto:barrerafernando54@gmail.com',
            buttonText: 'Send Email'
        },
        {
            title: 'LinkedIn',
            description: 'Connect professionally',
            icon: FaLinkedin,
            color: 'from-blue-600 to-blue-700',
            hoverColor: 'hover:shadow-blue-600/50',
            url: 'https://linkedin.com/in/fernandobarreraa',
            buttonText: 'View Profile'
        },
    ]

    return (
        <section id="contact" className="bg-gradient-to-br from-emerald-950 via-slate-950 to-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-gray-400 text-lg">Let&apos;s discuss your next project</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-start gap-4 group">
                            <div className="p-3 bg-gray-800 rounded-xl border border-gray-700 group-hover:border-green-500/50 transition-colors">
                                <FaMapMarkerAlt className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Location</h3>
                                <p className="text-gray-400">Maracaibo, Venezuela</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-3 bg-gray-800 rounded-xl border border-gray-700 group-hover:border-green-500/50 transition-colors">
                                <FaEnvelope className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                                <a 
                                    href="mailto:barrerafernando54@gmail.com" 
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    barrerafernando54@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 group">
                            <div className="p-3 bg-gray-800 rounded-xl border border-gray-700 group-hover:border-green-500/50 transition-colors">
                                <FaPhone className="text-green-500 text-xl" />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                                <p className="text-gray-400">+58 - 412 - 4389712</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {/* Availability Card */}
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="relative">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                                </div>
                                <h3 className="text-white font-bold text-xl">Available for Work</h3>
                            </div>
                            <p className="text-gray-300 text-sm">I&apos;m currently available for freelance projects and full-time opportunities.</p>
                        </div>

                        {/* Contact Method Cards */}
                        <div className="space-y-4">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={method.title}
                                    href={method.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`block bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 shadow-lg ${method.hoverColor} group`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className={`p-4 rounded-xl bg-gradient-to-br ${method.color} group-hover:scale-110 transition-transform`}>
                                                <method.icon className="text-white text-2xl" />
                                            </div>
                                            <div>
                                                <h3 className="text-white font-bold text-lg mb-1">{method.title}</h3>
                                                <p className="text-gray-400 text-sm">{method.description}</p>
                                            </div>
                                        </div>
                                        <div className="hidden sm:block">
                                            <span className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium group-hover:bg-gray-950 transition-colors">
                                                {method.buttonText} →
                                            </span>
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* GitHub Link */}
                        <motion.a
                            href="https://github.com/ferjbadev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-950 text-gray-300 hover:text-white py-4 rounded-xl border border-gray-700 hover:border-gray-600 transition-all group"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.8 }}
                        >
                            <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                            <span className="font-medium">View My GitHub Profile</span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}