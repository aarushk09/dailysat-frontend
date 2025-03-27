import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export function ScoreChart() {
  const controls = useAnimation()
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    })
  }, [controls])

  return (
    <div ref={chartRef} className="relative h-full w-full">
      <svg viewBox="0 0 300 200" className="h-full w-full">
        <motion.path
          d="M 0 150 Q 75 100 150 50 T 300 0"
          stroke="url(#gradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between text-sm text-gray-500">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  )
} 