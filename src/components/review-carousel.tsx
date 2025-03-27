"use client"

import { InfiniteCarousel } from "@/components/infinite-carousel"
import { TestimonialCard } from "@/components/testimonial-card"

// Sample review data
const reviews = [
  {
    name: "Alex Johnson",
    role: "Improved 200+ points",
    testimonial:
      "DailySAT's practice tests were incredibly similar to the actual SAT. The detailed explanations helped me understand my mistakes and avoid them on test day.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Perfect 1600 scorer",
    testimonial:
      "The strategies I learned from DailySAT were game-changers. The practice tests identified my weak areas, and the targeted practice helped me achieve a perfect score.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "Improved 150+ points",
    testimonial:
      "I was struggling with the math section until I found DailySAT. The focused practice and step-by-step explanations made complex problems much easier to understand.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Improved 180+ points",
    testimonial:
      "The daily practice approach really worked for me. I went from a 1320 to a 1500 in just two months of consistent practice with DailySAT.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Improved 220+ points",
    testimonial:
      "The stress-free environment made all the difference. I could focus on learning without pressure, and my score improved dramatically.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Olivia Taylor",
    role: "Improved 190+ points",
    testimonial:
      "The personalized recommendations helped me focus on exactly what I needed to improve. The targeted practice was incredibly effective.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Improved 170+ points",
    testimonial:
      "The vocabulary builder was a game-changer for me. It helped me tackle the reading section with much more confidence.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    name: "Ava Martinez",
    role: "Perfect 1600 scorer",
    testimonial:
      "I couldn't have achieved a perfect score without DailySAT. The comprehensive question bank covered every possible topic I encountered on test day.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

// Create four rows of reviews with different speeds and directions
export function ReviewCarousel() {
  // Create four different sets of reviews with slight variations
  const row1 = [...reviews].sort(() => Math.random() - 0.5).slice(0, 4)
  const row2 = [...reviews].sort(() => Math.random() - 0.5).slice(0, 4)
  const row3 = [...reviews].sort(() => Math.random() - 0.5).slice(0, 4)
  const row4 = [...reviews].sort(() => Math.random() - 0.5).slice(0, 4)

  return (
    <div className="w-full space-y-6">
      <InfiniteCarousel direction="left" speed={15} className="py-2">
        {row1.map((review, index) => (
          <div key={`row1-${index}`} className="inline-block px-4 w-80">
            <TestimonialCard {...review} />
          </div>
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel direction="right" speed={20} className="py-2">
        {row2.map((review, index) => (
          <div key={`row2-${index}`} className="inline-block px-4 w-80">
            <TestimonialCard {...review} />
          </div>
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel direction="left" speed={25} className="py-2">
        {row3.map((review, index) => (
          <div key={`row3-${index}`} className="inline-block px-4 w-80">
            <TestimonialCard {...review} />
          </div>
        ))}
      </InfiniteCarousel>

      <InfiniteCarousel direction="right" speed={18} className="py-2">
        {row4.map((review, index) => (
          <div key={`row4-${index}`} className="inline-block px-4 w-80">
            <TestimonialCard {...review} />
          </div>
        ))}
      </InfiniteCarousel>
    </div>
  )
}

