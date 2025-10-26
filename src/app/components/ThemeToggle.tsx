"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSun, FaMoon } from "react-icons/fa"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("light", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    // Update localStorage
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    
    // Toggle class on html element
    document.documentElement.classList.toggle("light", !newTheme)
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-24 right-8 z-50 p-3 bg-gray-800 dark:bg-gray-800 light:bg-white rounded-full shadow-lg border border-gray-700 light:border-gray-300 hover:shadow-green-500/50 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-blue-600 text-xl" />
        )}
      </motion.div>
    </motion.button>
  )
}
