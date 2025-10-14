import { FaBrain, FaCode, FaLanguage } from 'react-icons/fa'

export default function Skills() {
    const skills = [
        {
            category: "Soft Skills",
            icon: FaBrain,
            color: "from-blue-500 to-cyan-500",
            items: [
                "Effective communication",
                "Teamwork",
                "Adaptability",
                "Critical thinking",
                "Time Management"
            ]
        },
        {
            category: "Technical Skills",
            icon: FaCode,
            color: "from-green-500 to-emerald-500",
            items: [
                "JavaScript/TypeScript",
                "React/Next.js",
                "Node.js",
                "Databases (MongoDB/PostgreSQL)",
                "Tailwind CSS/Daisy UI",
                "Git/GitHub"
            ]
        },
        {
            category: "Languages",
            icon: FaLanguage,
            color: "from-purple-500 to-pink-500",
            items: [
                "Spanish - Native",
                "English - Intermediate (B1)"
            ]
        }
    ]

    return (
        <section id="skills" className="bg-gradient-to-br from-gray-900 via-emerald-950 to-slate-950 text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
                    <p className="text-gray-400 text-lg">Technologies and abilities I work with</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillSet, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-transparent transition-all duration-300 overflow-hidden"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skillSet.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon and Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${skillSet.color} shadow-lg`}>
                                        <skillSet.icon className="text-2xl text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{skillSet.category}</h3>
                                </div>

                                {/* Skills list */}
                                <ul className="space-y-3">
                                    {skillSet.items.map((item, itemIndex) => (
                                        <li 
                                            key={itemIndex} 
                                            className="flex items-start gap-3 text-gray-300 group/item"
                                        >
                                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skillSet.color} flex-shrink-0`}></div>
                                            <span className="text-sm leading-relaxed group-hover/item:text-white transition-colors">
                                                {typeof item === 'string' ? item : item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}