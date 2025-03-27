"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LineChart, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

export function AnimatedCard({ title, badges, description, duration, points, buttonText, className, onStart }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ duration: 0.3 }}
      className={cn("rounded-lg border border-gray-200 bg-white overflow-hidden", className)}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} className={`bg-${badge.color}-100 text-${badge.color}-700 hover:bg-${badge.color}-200`}>
              {badge.text}
            </Badge>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-500">{description}</p>
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            {duration}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <LineChart className="mr-1 h-4 w-4" />
            {points}
          </div>
        </div>
      </div>
      <div className="p-6 bg-gray-50 border-t">
        <Button className="w-full" onClick={onStart}>
          {buttonText || "Start Now"}
        </Button>
      </div>
    </motion.div>
  )
}

