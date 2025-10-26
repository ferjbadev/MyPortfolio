"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  delay?: number
}

export default function SectionTransition({ children, delay = 0 }: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {children}
    </motion.div>
  )
}
