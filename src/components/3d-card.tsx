"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type ThreeDCardProps = {
  children: React.ReactNode
  className?: string
}

export function ThreeDCard({ 
  children, 
  className,
  ...props
}: ThreeDCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
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

  function handleMouseLeave() {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      className={cn(
        "group relative rounded-lg border bg-white shadow-md cursor-pointer transition-all duration-200 hover:shadow-xl",
        className,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d" as const,
        transition: "transform 0.2s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>

      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />
    </div>
  )
}

