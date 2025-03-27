"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export function InfiniteCarousel({ children, className, direction = "left", speed = 20 }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return

    // Clone the content for seamless looping
    const scrollerContent = Array.from(scrollerRef.current.children)
    scrollerContent.forEach((item) => {
      const duplicate = item.cloneNode(true)
      scrollerRef.current?.appendChild(duplicate)
    })

    // Set animation
    const scrollerWidth = scrollerRef.current.offsetWidth / 2
    const animationDuration = scrollerWidth / speed

    const keyframes =
      direction === "left"
        ? [{ transform: "translateX(0)" }, { transform: `translateX(-${scrollerWidth}px)` }]
        : [{ transform: `translateX(-${scrollerWidth}px)` }, { transform: "translateX(0)" }]

    const animation = scrollerRef.current.animate(keyframes, {
      duration: animationDuration * 1000,
      iterations: Number.POSITIVE_INFINITY,
      easing: "linear",
    })

    // Pause animation when not in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animation.play()
          } else {
            animation.pause()
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(containerRef.current)

    return () => {
      animation.cancel()
      observer.disconnect()
    }
  }, [direction, speed])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden w-full", className)}>
      {/* Fade effect on edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Scrolling content */}
      <div ref={scrollerRef} className="flex whitespace-nowrap">
        {children}
      </div>
    </div>
  )
}

