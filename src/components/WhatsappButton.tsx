import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "584124389712"; // Número sin el + y sin espacios
    const message = "Hello! I'm interested in your services."; // Mensaje predeterminado

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* Botón flotante de WhatsApp */}
            <motion.div
                className="fixed bottom-6 right-6 z-50"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
            >
                <motion.button
                    onClick={handleWhatsAppClick}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 group relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Contact via WhatsApp"
                >
                    <FaWhatsapp className="text-3xl" />
                    
                    {/* Efecto de pulso */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
                </motion.button>

                {/* Tooltip */}
                <AnimatePresence>
                    {showTooltip && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border border-gray-700"
                        >
                            <p className="text-sm font-medium">Chat on WhatsApp</p>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                                <div className="border-8 border-transparent border-l-gray-800"></div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}