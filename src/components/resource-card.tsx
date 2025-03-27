"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ResourceCard({ title, description, icon, badges, primaryAction, secondaryAction, color = "blue" }) {
  return (
    <motion.div
      className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-md transition-all"
      whileHover={{
        y: -6,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className={`bg-${color}-100 p-2 rounded-lg`}>
            {icon || <BookOpen className={`h-6 w-6 text-${color}-600`} />}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} className={`bg-${badge.color}-100 text-${badge.color}-700`}>
              {badge.text}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            className={`text-${color}-600 border-${color}-200 hover:bg-${color}-50`}
            onClick={primaryAction.onClick}
          >
            {primaryAction.text}
          </Button>
          <Button variant="ghost" className="text-gray-500" onClick={secondaryAction.onClick}>
            {secondaryAction.text}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

