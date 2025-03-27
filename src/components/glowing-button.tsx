"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function GlowingButton({ children, className, ...props }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.button
      className={cn(
        "relative w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 text-lg font-medium shadow-lg",
        className,
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 blur-xl"
        animate={{ opacity: hovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

