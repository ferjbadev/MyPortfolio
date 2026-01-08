import { useEffect, useState } from "react";
import { FaWhatsapp, FaProjectDiagram, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-emerald-950 via-gray-900 to-slate-950 text-white py-10 min-h-screen flex items-center overflow-hidden"
    >
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
                {isClient && (
                  <img
                    src="/foto.png"
                    alt="Fernando Barrera"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                )}
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
              className="space-y-4 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Passionate about building web applications with React,
                TypeScript, and Vite. I specialize in creating immersive,
                animated interfaces using Tailwind CSS and Framer Motion, while
                optimizing server-state management via React Query. With a
                robust backend foundation in PostgreSQL and MongoDB, I lean into
                vibe-coding to bridge the gap between technical precision and
                creative storytelling. I also use AI-assisted development to
                streamline my workflow and ship faster.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start pt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://wa.me/584124389712?text=Hello!%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/50"
              >
                <FaWhatsapp className="mr-2 text-base group-hover:scale-110 transition-transform" />
                Contact Me
              </a>

              <a
                href="/CV.pdf"
                download="Fernando_Barrera_CV.pdf"
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
              >
                <FaDownload className="mr-2 text-base group-hover:scale-110 transition-transform" />
                Download CV
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <FaProjectDiagram className="mr-2 text-base group-hover:scale-110 transition-transform" />
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
