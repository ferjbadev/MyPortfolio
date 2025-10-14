"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
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
        // Aquí puedes agregar las imágenes para cada proyecto
        // "nombre-del-repo": "URL-de-la-imagen",
        "default": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
    }

    // Función para obtener la imagen del proyecto
    const getProjectImage = (repoName: string): string => {
        return projectImages[repoName] || projectImages["default"]
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
            <div className="flex justify-center items-center h-screen bg-gray-900">
                <FaSpinner className="animate-spin text-4xl text-green-500" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
                <FaExclamationTriangle className="text-4xl text-yellow-500 mb-4" />
                <p>{error}</p>
            </div>
        )
    }

    return (
        <section id="projects" className="bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white py-20">
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
                                <Image
                                    src={getProjectImage(repo.name)}
                                    alt={repo.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Contenido del proyecto */}
                            <div className="p-6">
                                {/* Título y año */}
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
                                        {repo.name}
                                    </h3>
                                    <span className="text-gray-400 text-sm font-medium">{getYear(repo.created_at)}</span>
                                </div>

                                {/* Descripción */}
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-4">
                                    {repo.description || "No description available"}
                                </p>

                                {/* Lenguaje principal */}
                                {repo.language && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800/80 text-gray-300 border border-gray-700">
                                            {repo.language}
                                        </span>
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
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
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
