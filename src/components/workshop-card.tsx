"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface WorkshopCardProps {
  image: string
  title: string
  partner: string
  attendees: string
  description: string
  className?: string
}

export function WorkshopCard({
  image,
  title,
  partner,
  attendees,
  description,
  className,
}: WorkshopCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl",
        className
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "https://placehold.co/600x400/png"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <span>{partner}</span>
          <span>{attendees} attendees</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </Card>
  )
}

