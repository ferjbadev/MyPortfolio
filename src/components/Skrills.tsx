import { motion } from 'framer-motion'
import { FaBrain, FaCode, FaLanguage } from 'react-icons/fa'
import { SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiTailwindcss } from 'react-icons/si'
import type { IconType } from 'react-icons'

interface SkillCategory {
    title: string
    subtitle: string
    items: Array<{ name: string; icon: IconType; color: string }>
    icon: IconType
    iconColor: string
    gradientFrom: string
    gradientTo: string
}

function SkillCategory({ title, subtitle, items, icon: Icon, gradientFrom, gradientTo }: SkillCategory) {
    return (
        <motion.div 
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-${gradientFrom} to-${gradientTo} shadow-lg`}>
                    <Icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {title}
                </h3>
            </div>
            <p className="text-gray-400 text-center mb-8">{subtitle}</p>
            
            <div className="flex flex-col gap-3">
                {items.map((item, index) => (
                    <motion.div
                        key={item.name}
                        className="flex items-center gap-3 px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-all"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        <item.icon style={{ color: item.color }} className="text-xl" />
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default function Skills() {
    const skillCategories: SkillCategory[] = [
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

                {/* Skills Categories in Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <SkillCategory
                            key={category.title}
                            title={category.title}
                            subtitle={category.subtitle}
                            items={category.items}
                            icon={category.icon}
                            gradientFrom={category.gradientFrom}
                            gradientTo={category.gradientTo} iconColor={''}                        />
                    ))}
                </div>
            </div>
        </section>
    )
}