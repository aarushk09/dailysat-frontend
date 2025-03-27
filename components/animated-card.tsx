import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"

interface Badge {
  text: string
  color?: string
}

interface AnimatedCardProps {
  title: string
  description: string
  badges: Badge[]
  duration: string
  points: string
  buttonText: string
  onStart: () => void
  className?: string
}

export function AnimatedCard({
  title,
  description,
  badges,
  duration,
  points,
  buttonText,
  onStart,
  className,
}: AnimatedCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-0 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              className={cn(
                "bg-opacity-10",
                badge.color === "blue" && "bg-blue-500 text-blue-700",
                badge.color === "green" && "bg-green-500 text-green-700",
                badge.color === "purple" && "bg-purple-500 text-purple-700",
                badge.color === "yellow" && "bg-yellow-500 text-yellow-700",
                badge.color === "pink" && "bg-pink-500 text-pink-700",
                badge.color === "orange" && "bg-orange-500 text-orange-700"
              )}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <span>{duration}</span>
          <span>{points}</span>
        </div>
        <button
          onClick={onStart}
          className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          {buttonText}
        </button>
      </div>
    </Card>
  )
} 