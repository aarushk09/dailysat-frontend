import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
}

interface FloatingNavProps {
  navItems: NavItem[]
}

export function FloatingNav({ navItems }: FloatingNavProps) {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  const y = useTransform(scrollY, [0, 100], [0, -50])
  const opacity = useTransform(scrollY, [0, 100], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      style={{ y, opacity }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 mx-auto max-w-7xl px-4 py-4",
        isScrolled && "bg-white/80 backdrop-blur-md shadow-sm"
      )}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          DailySAT
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </motion.div>
  )
} 