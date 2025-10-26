"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaProjectDiagram } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-emerald-950 via-gray-900 to-slate-950 text-white py-10 min-h-screen flex items-center overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Image - Left side on desktop */}
          <motion.div 
            className="lg:w-5/12 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl transform rotate-6"
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
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
          </motion.div>

          {/* Content - Right side on desktop */}
          <div className="lg:w-7/12 text-center lg:text-left space-y-6">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-green-400 font-medium tracking-wide uppercase text-sm">
                Full Stack Developer
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I&apos;m
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  Fernando Barrera
                </span>
              </h1>
            </motion.div>

            <motion.div 
              className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Always in constant learning, I am passionate about developing
                modern web applications using technologies like{" "}
                <span className="text-white font-medium">Next.js</span>,
                databases (
                <span className="text-white font-medium">
                  Firebase, PostgreSQL, MongoDB
                </span>
                ), and{" "}
                <span className="text-white font-medium">Tailwind CSS</span> to
                create functional and visually appealing interfaces.
              </p>
              <p>
                I am a big fan of anime and reading, which inspires me to keep
                an open and creative mind. I enjoy combining the logic of
                programming with the imagination that storytelling awakens,
                creating innovative solutions that make a difference.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://wa.me/584124389712?text=Hello!%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                <FaWhatsapp className="mr-2 group-hover:scale-110 transition-transform" />
                Contact Me on WhatsApp
              </a>

              <Link
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <FaProjectDiagram className="mr-2 group-hover:scale-110 transition-transform" />
                View My Projects
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
