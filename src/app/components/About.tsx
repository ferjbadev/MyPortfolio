import Image from 'next/image'
import Link from 'next/link'
import { FaEnvelope, FaProjectDiagram } from 'react-icons/fa'

const About = () => {
    return (
        <section id="about" className="bg-gray-900 text-white py-20 min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Profile Image - Left side on desktop */}
                    <div className="lg:w-5/12 flex justify-center">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl transform rotate-6"></div>
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/foto.png"
                                    alt="Fernando Barrera"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content - Right side on desktop */}
                    <div className="lg:w-7/12 text-center lg:text-left space-y-6">
                        <div className="space-y-3">
                            <p className="text-green-400 font-medium tracking-wide uppercase text-sm">Full Stack Developer</p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Fernando Barrera</span>
                            </h1>
                        </div>

                        <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                Always in constant learning, I am passionate about developing modern web applications using technologies like <span className="text-white font-medium">Next.js</span>, databases (<span className="text-white font-medium">Firebase, PostgreSQL, MongoDB</span>), and <span className="text-white font-medium">Tailwind CSS</span> to create functional and visually appealing interfaces.
                            </p>
                            <p>
                                I am a big fan of anime and reading, which inspires me to keep an open and creative mind. I enjoy combining the logic of programming with the imagination that storytelling awakens, creating innovative solutions that make a difference.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link
                                href="#contact"
                                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                            >
                                <FaEnvelope className="mr-2 group-hover:scale-110 transition-transform" />
                                Contact Me
                            </Link>

                            <Link
                                href="#projects"
                                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300"
                            >
                                <FaProjectDiagram className="mr-2 group-hover:scale-110 transition-transform" />
                                View My Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
