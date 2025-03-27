import { cn } from "@/lib/utils"
import { Card } from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface Badge {
  text: string
  color?: string
}

interface Action {
  text: string
  onClick: () => void
}

interface ResourceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  color?: "blue" | "green" | "purple" | "orange"
  badges: Badge[]
  primaryAction: Action
  secondaryAction: Action
  className?: string
}

export function ResourceCard({
  icon,
  title,
  description,
  color = "blue",
  badges,
  primaryAction,
  secondaryAction,
  className,
}: ResourceCardProps) {
  const colorClasses = {
    blue: "from-blue-500/10 to-blue-600/10",
    green: "from-green-500/10 to-green-600/10",
    purple: "from-purple-500/10 to-purple-600/10",
    orange: "from-orange-500/10 to-orange-600/10",
  }

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-0 bg-gradient-to-br p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl",
        colorClasses[color],
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-block rounded-lg bg-white/10 p-3 backdrop-blur-sm">
          {icon}
        </div>
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
                badge.color === "yellow" && "bg-yellow-500 text-yellow-700"
              )}
            >
              {badge.text}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button onClick={primaryAction.onClick} className="flex-1">
            {primaryAction.text}
          </Button>
          <Button variant="outline" onClick={secondaryAction.onClick}>
            {secondaryAction.text}
          </Button>
        </div>
      </div>
    </Card>
  )
} 