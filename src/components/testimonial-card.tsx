import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export function TestimonialCard({ name, role, testimonial, avatar, rating }) {
  return (
    <Card className="overflow-hidden border-0 shadow-lg bg-white/80 backdrop-blur-sm rounded-xl h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="h-12 w-12 border-2 border-blue-100">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-blue-600">{role}</p>
          </div>
        </div>

        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        <blockquote className="text-gray-600 flex-grow">"{testimonial}"</blockquote>
      </CardContent>
    </Card>
  )
}

