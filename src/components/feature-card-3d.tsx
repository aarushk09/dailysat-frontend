"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function FeatureCard3D({ icon, title, description, color }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove(e) {
    if (!isHovered) return

    const card = e.currentTarget
    const box = card.getBoundingClientRect()
    const x = e.clientX - box.left
    const y = e.clientY - box.top

    const centerX = box.width / 2
    const centerY = box.height / 2

    const rotateXValue = ((y - centerY) / centerY) * 10
    const rotateYValue = ((centerX - x) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  function handleMouseEnter() {
    setIsHovered(true)
  }

  function handleMouseLeave() {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className="h-full perspective"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="h-full rounded-xl overflow-hidden"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: isHovered ? "none" : "transform 0.5s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.05 }}
      >
        <Card className="overflow-hidden border-0 shadow-lg bg-white rounded-xl h-full">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className={`mb-4 rounded-full bg-${color}-100 p-3`}>{icon}</div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

