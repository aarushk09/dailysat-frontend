"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function FeatureCard({ icon, title, description, color }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card className="overflow-hidden border-0 shadow-md bg-white rounded-xl h-full">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className={`mb-4 rounded-full bg-${color}-100 p-3`}>{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-500">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

