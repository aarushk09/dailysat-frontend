import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "./ui/card"

interface Review {
  name: string
  role: string
  content: string
  rating: number
}

const reviews: Review[] = [
  {
    name: "Sarah Johnson",
    role: "High School Senior",
    content: "DailySAT helped me improve my score by 200 points! The practice questions and explanations were incredibly helpful.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "College Freshman",
    content: "The personalized study plan and daily practice sessions made all the difference. I got into my dream school!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "High School Junior",
    content: "The math concept review was exactly what I needed. The step-by-step solutions helped me understand everything clearly.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "College Sophomore",
    content: "The reading and writing tips were game-changing. I improved my verbal score significantly.",
    rating: 5,
  },
]

export function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + reviews.length) % reviews.length)
  }

  return (
    <div className="relative h-[400px] w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
          className="absolute inset-0"
        >
          <Card className="h-full w-full p-6">
            <div className="flex h-full flex-col justify-between">
              <div>
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-lg text-gray-600">{reviews[currentIndex].content}</p>
              </div>
              <div>
                <h4 className="font-semibold">{reviews[currentIndex].name}</h4>
                <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 