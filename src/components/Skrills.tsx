import { useState, useEffect } from 'react'
import { FaBrain, FaCode, FaLanguage, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import {  SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb,  SiTailwindcss } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import type { IconType } from 'react-icons'

interface SkillSliderProps {
    title: string
    subtitle: string
    items: Array<{ name: string; icon: IconType; color: string }>
    icon: IconType
    iconColor: string
    gradientFrom: string
    gradientTo: string
}

function SkillSlider({ title, subtitle, items, icon: Icon, iconColor, gradientFrom, gradientTo }: SkillSliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const itemsPerSlide = 6
    const totalSlides = Math.ceil(items.length / itemsPerSlide)
    
    const getCurrentItems = () => {
        const start = currentSlide * itemsPerSlide
        return items.slice(start, start + itemsPerSlide)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 5000)
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide, totalSlides])

    return (
        <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${gradientFrom} to-${gradientTo} shadow-lg`}>
                    <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {title}
                </h3>
            </div>
            <p className="text-gray-400 text-center mb-8">{subtitle}</p>
            
            <div className="relative flex items-center justify-center gap-4">

                {/* Items Display */}
                <div className="flex-1 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            {getCurrentItems().map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <item.icon style={{ color: item.color }} className="text-xl" />
                                    <span className="text-sm font-medium text-gray-300">{item.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                            currentSlide === index ? `bg-${iconColor} w-8` : 'bg-gray-600'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const [currentCategory, setCurrentCategory] = useState(0)

    const skillCategories = [
        {
            title: "Technical Skills",
            subtitle: "Languages, frameworks and tools I use to bring ideas to reality.",
            icon: FaCode,
            iconColor: "green-500",
            gradientFrom: "green-500",
            gradientTo: "emerald-500",
            items: [
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
                { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
                { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            ]
        },
        {
            title: "Soft Skills",
            subtitle: "Personal abilities that help me work effectively with teams.",
            icon: FaBrain,
            iconColor: "blue-400",
            gradientFrom: "blue-500",
            gradientTo: "cyan-500",
            items: [
                { name: "Effective communication", icon: FaBrain, color: "#60A5FA" },
                { name: "Teamwork", icon: FaBrain, color: "#60A5FA" },
                { name: "Adaptability", icon: FaBrain, color: "#60A5FA" },
                { name: "Critical thinking", icon: FaBrain, color: "#60A5FA" },
                { name: "Problem Solving", icon: FaBrain, color: "#60A5FA" },
            ]
        },
        {
            title: "Languages",
            subtitle: "Languages I speak and my proficiency level.",
            icon: FaLanguage,
            iconColor: "purple-500",
            gradientFrom: "purple-500",
            gradientTo: "pink-500",
            items: [
                { name: "Spanish - Native", icon: FaLanguage, color: "#A855F7" },
                { name: "English - Intermediate (B1)", icon: FaLanguage, color: "#A855F7" },
            ]
        }
    ]

    const nextCategory = () => {
        setCurrentCategory((prev) => (prev + 1) % skillCategories.length)
    }

    const prevCategory = () => {
        setCurrentCategory((prev) => (prev - 1 + skillCategories.length) % skillCategories.length)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCategory((prev) => (prev + 1) % skillCategories.length)
        }, 5000) // Cambia de categoría cada 5 segundos
        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCategory])

    const currentSkillSet = skillCategories[currentCategory]

    return (
        <section id="skills" className="bg-gradient-to-br from-gray-900 via-emerald-950 to-slate-950 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 text-lg">Technologies and abilities I work with</p>
                </motion.div>

                {/* Main Category Slider */}
                <div className="relative">
                    {/* Category Navigation Buttons */}
                    <button
                        onClick={prevCategory}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all shadow-lg"
                        aria-label="Previous category"
                    >
                        <FaChevronLeft className="text-blue-400 text-xl" />
                    </button>

                    <button
                        onClick={nextCategory}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all shadow-lg"
                        aria-label="Next category"
                    >
                        <FaChevronRight className="text-blue-400 text-xl" />
                    </button>

                    {/* Slider Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentCategory}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <SkillSlider
                                title={currentSkillSet.title}
                                subtitle={currentSkillSet.subtitle}
                                items={currentSkillSet.items}
                                icon={currentSkillSet.icon}
                                iconColor={currentSkillSet.iconColor}
                                gradientFrom={currentSkillSet.gradientFrom}
                                gradientTo={currentSkillSet.gradientTo}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Category Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {skillCategories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentCategory(index)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                    currentCategory === index
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                }`}
                                aria-label={`Go to ${category.title}`}
                            >
                                {category.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}