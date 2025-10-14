"use client";

import { FaBriefcase, FaCalendar } from 'react-icons/fa'
import { motion } from 'framer-motion'

interface ExperienceItem {
    title: string
    company: string
    period: string
    description: string[]
    technologies: string[]
}

export default function Experience() {
    const experiences: ExperienceItem[] = [
        {
            title: "Full Stack Developer",
            company: "Exologic LLC",
            period: "Feb 2024 - Present",
            description: [
                "Developed and maintained web applications using Next.js and React",
                "Implemented RESTful APIs with Node.js and Express",
                "Collaborated with cross-functional teams to deliver high-quality solutions"
            ],
            technologies: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS"]
        },
        {
            title: "Intern Frontend Developer Engineer",
            company: "Vainilla Labs",
            period: "Dec 2022 - Jan 2024",
            description: [
                "Built responsive user interfaces with React and TypeScript",
                "Optimized application performance and user experience",
                "Worked closely with designers to implement pixel-perfect designs"
            ],
            technologies: ["React", "TypeScript", "CSS", "Git"]
        },
        {
            title: "Frontend Developer",
            company: "Trillion Quest",
            period: "Mar 2023 - Nov 2023",
            description: [
                "Developed and maintained web applications and features",
                "Learned modern web development best practices",
                "Contributed to code reviews and team discussions"
            ],
            technologies: ["MongoDB", "React", "Next.js", "TypeScript", "Tailwind CSS", "Git"]
        }
    ]

    return (
        <section id="experience" className="bg-gradient-to-br from-slate-950 via-emerald-950 to-gray-900 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Work Experience</h2>
                    <p className="text-gray-400 text-lg">My professional journey and achievements</p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>

                    {/* Experience items */}
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div 
                                key={index} 
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {/* Timeline dot */}
                                <motion.div 
                                    className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full ring-4 ring-gray-800 z-10"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                                ></motion.div>

                                {/* Content card */}
                                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div 
                                        className="bg-gray-900 rounded-xl p-6 shadow-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {/* Header */}
                                        <div className="mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <FaBriefcase className="text-green-500 text-xl" />
                                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                            </div>
                                            <p className="text-xl text-green-400 font-medium mb-2">{exp.company}</p>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <FaCalendar className="text-sm" />
                                                <span className="text-sm">{exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <ul className="space-y-2 mb-4 text-left">
                                            {exp.description.map((desc, i) => (
                                                <li key={i} className="text-gray-300 text-sm leading-relaxed">
                                                    • {desc}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Technologies */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="px-3 py-1 bg-gray-800 text-green-400 text-xs font-medium rounded-full border border-gray-700 group-hover:border-green-500/50 transition-colors"
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
