import { motion } from "framer-motion"

// Definición de la interfaz del proyecto
interface Project {
    id: number
    name: string
    description: string
    technologies: string[]
    html_url: string
    created_at: string
    live_url?: string
    image: string
}

// Componente principal que muestra los proyectos
export default function Projects() {
    // Datos estáticos de los proyectos
    const projects: Project[] = [
        {
            id: 1,
            name: "MyPortfolio",
            description: "My personal website! Built with Next.js, TypeScript and Tailwind CSS to showcase my projects and skills.",
            technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
            html_url: "https://github.com/ferjbadev/MyPortfolio",
            created_at: "2025-01-07",
            live_url: "https://my-portfolio-wheat-mu.vercel.app/",
            image: "/MyPorfolio.png"
        },
        {
            id: 2,
            name: "AngelisNutricion",
            description: "Nutritionist Landing Page - Vite | Tailwind CSS | Framer Motion. Modern, responsive website with smooth animations and professional design for health and wellness services.",
            technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion"],
            html_url: "https://github.com/ferjbadev/AngelisNutricion",
            created_at: "2025-11-30",
            image: "/Nutricion.png"
        },
        {
            id: 3,
            name: "FocusSpace",
            description: "FocusSpace is a productivity-focused Chrome Extension designed to help you reclaim your attention. It removes digital clutter: distracting tabs, social media history, and time-wasting content to prepare your browser environment for Deep Work.",
            technologies: ["TypeScript", "Chrome Extension"],
            html_url: "https://github.com/joseorono/clean-my-history",
            created_at: "2025-11-26",
            image: "/foto.png"
        },
        {
            id: 4,
            name: "ONG-Red Caribe y Amazonia",
            description: "A digital platform dedicated to preserving Indigenous, Caribbean, and Amazonian heritage through research-driven education, cultural documentation, and environmental protection initiatives.",
            technologies: ["TypeScript", "Next.js"],
            html_url: "https://ong-amazonia.vercel.app/",
            created_at: "2025-11-12",
            image: "/Caribe.png"
        },
        {
            id: 5,
            name: "IKPonteGuapa",
            description: "At IK Ponte Guapa, we bring your style to life through the art of sewing. From custom-made dresses to delicate alterations, every stitch is crafted with passion, precision, and a touch of elegance",
            technologies: ["TypeScript", "React", "Tailwind CSS"],
            html_url: "https://github.com/ferjbadev/IKPonteGuapa",
            created_at: "2025-10-29",
            image: "/PonteGuapa.png"
        },
        {
            id: 6,
            name: "MotoStore",
            description: "MotoStore is a modern eCommerce platform focused on selling motorcycles and motorcycle accessories. Built with Vite, React, Tailwind CSS, and ShadCN/UI, it aims to deliver a fast, elegant, and mobile-friendly shopping experience.",
            technologies: ["Vite", "React", "Tailwind CSS", "ShadCN/UI"],
            html_url: "https://github.com/ferjbadev/MotoStore",
            created_at: "2025-10-25",
            live_url: "https://moto-store-ten.vercel.app/",
            image: "/motoStore.png"
        },
        {
            id: 7,
            name: "expenseTracker",
            description: "A modern and responsive expense tracking application built with Vite and Tailwind CSS. This project helps users easily manage their personal finances by allowing them to add, edit, and categorize expenses.",
            technologies: ["Vite", "React", "Tailwind CSS"],
            html_url: "https://github.com/ferjbadev/expenseTracker",
            created_at: "2025-10-25",
            live_url: "https://expense-tracker-six-gold-30.vercel.app/",
            image: "/expenseTracker.png"
        },
        {
            id: 8,
            name: "snakeGame",
            description: "A classic Snake game built with React and Vite, optimized for fast performance and a modern browser experience. The goal is simple: eat as much food as possible without crashing into yourself.",
            technologies: ["React", "Vite", "JavaScript"],
            html_url: "https://github.com/ferjbadev/snakeGame",
            created_at: "2025-10-24",
            image: "/snakeGame.png"
        },
        {
            id: 9,
            name: "DailyAgenda",
            description: "A modern and intuitive calendar application built with React and Vite, designed to help users efficiently manage and organize their events. The app allows users to create, edit, and delete events.",
            technologies: ["React", "Vite", "TypeScript"],
            html_url: "https://github.com/ferjbadev/DailyAgenda",
            created_at: "2025-10-24",
            image: "/dailyAgenda.png"
        },
        {
            id: 10,
            name: "OdinRestaurant",
            description: "Welcome to Valhalla Bistro, where Norse gods restore their strength. Blending mythology's grandeur with modern design using Vite, Tailwind CSS, and DaisyUI, this digital space embodies Asgard's majesty.",
            technologies: ["Vite", "React", "Tailwind CSS", "DaisyUI"],
            html_url: "https://github.com/ferjbadev/OdinRestaurant",
            created_at: "2025-10-13",
            live_url: "https://odin-restaurant-tau.vercel.app/",
            image: "/OdinRestaurant.png"
        },
        {
            id: 11,
            name: "SweetClashGame",
            description: "Sweet Clash is a colorful match-3 and match-4 puzzle game where players combine sweets to earn points, trigger special effects, and progress through increasingly challenging levels.",
            technologies: ["React", "TypeScript", "CSS"],
            html_url: "https://github.com/ferjbadev/SweetClashGame",
            created_at: "2025-10-13",
            live_url: "https://candy-crush-game.vercel.app/",
            image: "/SweetClashGame.png"
        },
        {
            id: 12,
            name: "UptmaPage",
            description: "A modern academic management system for Universidad Politécnica Territorial de Maracaibo 'Kléber Ramírez' (UPTMA), built with React, Tailwind CSS, and Firebase to streamline student, course, and grading management.",
            technologies: ["React", "Tailwind CSS", "Firebase"],
            html_url: "https://github.com/ferjbadev/UptmaPage",
            created_at: "2025-09-30",
            live_url: "https://uptma-page.vercel.app/",
            image: "/UptmaPage.png"
        },
        {
            id: 13,
            name: "color-palette-manager",
            description: "A modern, offline-first color palette management application built with React, TypeScript, and Tailwind CSS. Create, edit, and export beautiful color palettes for your design projects",
            technologies: ["TypeScript"],
            html_url: "https://color-palette-manager-one.vercel.app/",
            created_at: "2025-09-17",
            image: "/ColorPalette.webp"
        },
        {
            id: 14,
            name: "VainillaLabs",
            description: "Vainilla Labs is a financial platform designed to offer personalized financing plans and savings fund management solutions. It allows users to easily track their contributions, manage investments, and monitor their financial progress.",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            html_url: "https://github.com/ferjbadev/VainillaLabs",
            created_at: "2025-04-05",
            live_url: "https://vainilla-labs.vercel.app/",
            image: "/VainillaLabs.png"
        },
        {
            id: 15,
            name: "TrillionQuest",
            description: "JavaScript project for Trillion Quest platform",
            technologies: ["JavaScript"],
            html_url: "https://github.com/ferjbadev/TrillionQuest",
            created_at: "2025-01-03",
            live_url: "https://trillion-quest.vercel.app/",
            image: "/TrillionQuest.png"
        }
    ]

    // Función para obtener el año de creación
    const getYear = (dateString: string): string => {
        return new Date(dateString).getFullYear().toString()
    }

    return (
        <section id="projects" className="bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Título y subtítulo de la sección */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">My Projects</h2>
                    <p className="text-gray-400 text-lg">Check out some of my recent work</p>
                </motion.div>

                {/* Grid de proyectos */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                {/* Título y año */}
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors text-center mb-2">
                                        {project.name}
                                    </h3>
                                    <span className=" text-sm font-medium block text-center">{getYear(project.created_at)}</span>
                                </div>

                                {/* Descripción */}
                                <p className=" text-sm mb-4 leading-relaxed line-clamp-4">
                                    {project.description}
                                </p>

                                {/* Tecnologías */}
                                {project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/80 text-gray-300 border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Enlaces */}
                                <div className="flex gap-3 pt-4 border-t border-gray-800">
                                    <a
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-700 hover:border-green-500/50"
                                    >
                                        GitHub
                                    </a>
                                    {project.live_url && (
                                        <a
                                            href={project.live_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-colors"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}