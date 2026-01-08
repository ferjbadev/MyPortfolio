import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa"

// Definición de la interfaz del repositorio de GitHub
interface GitHubRepo {
    id: number
    name: string
    description: string | null
    language: string | null
    html_url: string
    stargazers_count: number
    created_at: string
    homepage: string | null
}

// Componente principal que muestra los proyectos
export default function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const githubUsername = "ferjbadev"

    // Mapeo de imágenes personalizadas por nombre de repositorio
    const projectImages: Record<string, string> = {
        "MyPortfolio": "/MyPorfolio.png",
        "OdinRestaurant": "/OdinRestaurant.png",
        "SweetClashGame": "/SweetClashGame.png",
        "TrillionQuest": "/TrillionQuest.png",
        "UptmaPage": "/UptmaPage.png",
        "VainillaLabs": "/VainillaLabs.png",
        "DailyAgenda": "/dailyAgenda.png",
        "snakeGame": "/snakeGame.png",
        "MotoStore": "/motoStore.png",
        "expenseTracker": "/expenseTracker.png",
        "AngelisNutricion": "/Nutricion.png",
        "IKPonteGuapa": "/PonteGuapa.png",
        "default": "/foto.png"
    }

    // Mapeo de URLs de Live Demo personalizadas
    const projectLiveUrls: Record<string, string> = {
        "OdinRestaurant": "https://odin-restaurant-tau.vercel.app/",
        "SweetClashGame": "https://candy-crush-game.vercel.app/",
        "TrillionQuest": "https://trillion-quest.vercel.app/",
        "UptmaPage": "https://uptma-page.vercel.app/",
        "VainillaLabs": "https://vainilla-labs.vercel.app/",
        "MyPortfolio": "https://my-portfolio-wheat-mu.vercel.app/",
        "motoStore": "https://moto-store-ten.vercel.app/",
        "MotoStore": "https://moto-store-ten.vercel.app/",
        "moto-store": "https://moto-store-ten.vercel.app/",
        "expenseTracker": "https://expense-tracker-six-gold-30.vercel.app/",
        "ExpenseTracker": "https://expense-tracker-six-gold-30.vercel.app/",
        "expense-tracker": "https://expense-tracker-six-gold-30.vercel.app/",
        // Agrega las URLs cuando las despliegues
        // "dailyAgenda": "https://tu-url-aqui.vercel.app/",
        // "daily-agenda": "https://tu-url-aqui.vercel.app/",
        // "DailyAgenda": "https://tu-url-aqui.vercel.app/",
        // "snakeGame": "https://tu-url-aqui.vercel.app/",
        // "snake-game": "https://tu-url-aqui.vercel.app/",
        // "SnakeGame": "https://tu-url-aqui.vercel.app/",
    }

    // Mapeo de tecnologías usadas en cada proyecto
    const projectTechnologies: Record<string, string[]> = {
        "OdinRestaurant": ["Next.js", "Tailwind CSS", "TypeScript"],
        "SweetClashGame": ["React", "TypeScript", "CSS"],
        "TrillionQuest": ["React", "TypeScript", "Tailwind CSS"],
        "UptmaPage": ["Next.js", "Tailwind CSS", "TypeScript"],
        "VainillaLabs": ["React", "TypeScript", "Tailwind CSS"],
        "MyPortfolio": ["Next.js", "TypeScript", "Tailwind CSS"],
        "dailyAgenda": ["React", "TypeScript", "CSS"],
        "daily-agenda": ["React", "TypeScript", "CSS"],
        "DailyAgenda": ["React", "TypeScript", "CSS"],
        "snakeGame": ["JavaScript", "HTML", "CSS"],
        "snake-game": ["JavaScript", "HTML", "CSS"],
        "SnakeGame": ["JavaScript", "HTML", "CSS"],
        "motoStore": ["React", "TypeScript", "Tailwind CSS"],
        "MotoStore": ["React", "TypeScript", "Tailwind CSS"],
        "moto-store": ["React", "TypeScript", "Tailwind CSS"],
        "expenseTracker": ["React", "TypeScript", "Tailwind CSS"],
        "ExpenseTracker": ["React", "TypeScript", "Tailwind CSS"],
        "expense-tracker": ["React", "TypeScript", "Tailwind CSS"],
    }

    // Función para obtener la imagen del proyecto
    const getProjectImage = (repoName: string): string => {
        return projectImages[repoName] || projectImages["default"]
    }

    // Función para obtener la URL de Live Demo
    const getLiveUrl = (repoName: string, homepage: string | null): string | null => {
        return projectLiveUrls[repoName] || homepage
    }

    // Función para obtener las tecnologías del proyecto
    const getTechnologies = (repoName: string, language: string | null): string[] => {
        return projectTechnologies[repoName] || (language ? [language] : [])
    }

    // Función para obtener el año de creación
    const getYear = (dateString: string): string => {
        return new Date(dateString).getFullYear().toString()
    }

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories')
                }
                const data = await response.json()
                setRepos(data)
                setIsLoading(false)
            } catch (error) {
                console.error("Error fetching repos:", error)
                setError('Failed to load repositories. Please try again later.')
                setIsLoading(false)
            }
        }

        fetchRepos()
    }, [])

    if (isLoading) {
        return (
            <section id="projects" className="bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white py-10 min-h-screen flex items-center justify-center">
                <FaSpinner className="animate-spin text-4xl text-green-500" />
            </section>
        )
    }

    if (error) {
        return (
            <section id="projects" className="bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white py-10 min-h-screen flex flex-col items-center justify-center">
                <FaExclamationTriangle className="text-4xl text-yellow-500 mb-4" />
                <p className="text-center">{error}</p>
            </section>
        )
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
                    {repos.map((repo, index) => (
                        <motion.div
                            key={repo.id}
                            className="group bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Imagen del proyecto */}
                            <div className="relative h-48 overflow-hidden bg-gray-900">
                                <img
                                    src={getProjectImage(repo.name)}
                                    alt={repo.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                {/* Título y año */}
                                <div className="mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors text-center mb-2">
                                        {repo.name}
                                    </h3>
                                    <span className=" text-sm font-medium block text-center">{getYear(repo.created_at)}</span>
                                </div>

                                {/* Descripción */}
                                <p className=" text-sm mb-4 leading-relaxed line-clamp-4">
                                    {repo.description || "No description available"}
                                </p>

                                {/* Tecnologías */}
                                {getTechnologies(repo.name, repo.language).length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {getTechnologies(repo.name, repo.language).map((tech, index) => (
                                            <span
                                                key={index}
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
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors border border-gray-700 hover:border-green-500/50"
                                    >
                                        GitHub
                                    </a>
                                    {getLiveUrl(repo.name, repo.homepage) && (
                                        <a
                                            href={getLiveUrl(repo.name, repo.homepage)!}
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