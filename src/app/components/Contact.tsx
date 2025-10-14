"use client"

import React, { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 2000)) // Simula una llamada a la API
            setSubmitMessage('Thank you for your message. I will get back to you soon!')
            setFormData({ name: '', email: '', message: '' })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            setSubmitMessage('Oops! There was an error sending your message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

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

                    {/* Formulario de contacto */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 text-white bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none transition-all"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                            
                            {submitMessage && (
                                <p className={`mt-4 text-center text-sm ${submitMessage.includes('error') ? 'text-red-400' : 'text-green-400'}`}>
                                    {submitMessage}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
