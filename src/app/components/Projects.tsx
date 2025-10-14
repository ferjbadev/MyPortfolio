"use client"

import { useState, useEffect } from "react"
import { FaGithub, FaSpinner, FaExclamationTriangle } from "react-icons/fa"

// Definición de la interfaz del repositorio
interface Repo {
    id: number // ID único del repositorio
    name: string // Nombre del repositorio
    description: string | null // Descripción del repositorio, puede ser null
    language: string | null // Lenguaje principal del repositorio, puede ser null
    html_url: string // URL del repositorio en GitHub
    stargazers_count: number // Número de estrellas del repositorio
}

// Componente principal que muestra los repositorios de GitHub
export default function Projects() {
    // Estado que guarda los repositorios
    const [repos, setRepos] = useState<Repo[]>([])
    // Estado para indicar si se están cargando los repositorios
    const [isLoading, setIsLoading] = useState(true)
    // Estado para manejar errores de carga de repositorios
    const [error, setError] = useState<string | null>(null)

    // Nombre de usuario de GitHub 
    const githubUsername = "ferjbadev"

    // Hook useEffect para obtener los repositorios al montar el componente
    useEffect(() => {
        // Función asincrónica para buscar los repositorios desde la API de GitHub
        const fetchRepos = async () => {
            try {
                // Petición a la API de GitHub 
                const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated`)
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories') // Error si la respuesta no es exitosa
                }
                const data = await response.json() // Conversión de la respuesta en JSON
                setRepos(data) // Guardado de los datos de los repositorios en el estado
                setIsLoading(false) // Cambia el estado de carga a falso
            } catch (error) {
                console.error("Error fetching repos:", error)
                // Guardado del mensaje de error en el estado y fin de la carga
                setError('Failed to load repositories. Please try again later.')
                setIsLoading(false)
            }
        }

        fetchRepos() // Llamado a la función de carga de repositorios
    }, [])

    // Renderizado condicional si los repositorios están cargando
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-900">
                {/* Icono de carga */}
                <FaSpinner className="animate-spin text-4xl text-blue-500" />
            </div>
        )
    }

    // Renderizado condicional en caso de error
    if (error) {
        return (
            <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
                {/* Icono de advertencia y mensaje de error */}
                <FaExclamationTriangle className="text-4xl text-yellow-500 mb-4" />
                <p>{error}</p>
            </div>
        )
    }

    // Renderizado de la lista de proyectos 
    return (
        <section id="projects" className="bg-gradient-to-br from-slate-950 via-gray-900 to-emerald-950 text-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Título y subtítulo de la sección */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">My GitHub Projects</h2>
                    <p className="text-gray-400 text-lg">Check out some of my recent work</p>
                </div>
                {/* Grid de repositorios */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mapeo de los repositorios para crear un enlace de cada uno */}
                    {repos.map((repo) => (
                        <a
                            href={repo.html_url} // Enlace al repositorio en GitHub
                            key={repo.id}
                            className="group block bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-start justify-between mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors line-clamp-1">
                                        {repo.name}
                                    </h3>
                                    <FaGithub className="text-gray-600 group-hover:text-green-500 transition-colors flex-shrink-0 ml-2 text-xl" />
                                </div>
                                
                                {/* Descripción del repositorio, se muestra texto alternativo si no hay descripción */}
                                <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3 leading-relaxed">
                                    {repo.description || "No description available"}
                                </p>
                                
                                {/* Lenguaje y número de estrellas */}
                                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                                    {repo.language && (
                                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-lg text-xs font-medium text-gray-300 border border-gray-700">
                                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                            {repo.language}
                                        </span>
                                    )}
                                    <div className="flex items-center text-gray-400 text-sm">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
