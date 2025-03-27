"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

export function FloatingNav({ navItems }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
      setIsVisible(true) // Always visible after initial load
    }

    // Set initial state to visible
    setIsVisible(true)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 inset-x-0 z-50 mx-auto w-fit"
        >
          <div
            className={`rounded-full border ${isScrolled ? "bg-white/95" : "bg-white/80"} backdrop-blur-md shadow-lg px-4 py-2`}
          >
            <div className="flex items-center justify-between gap-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  DailySAT
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                      item.active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                    {item.badge && (
                      <Badge
                        variant="outline"
                        className={`bg-${item.badge.variant}-100 text-${item.badge.variant}-800 border-${item.badge.variant}-200 text-[10px] py-0`}
                      >
                        {item.badge.text}
                      </Badge>
                    )}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <Link
                  href="/sign-in"
                  className="hidden md:block text-sm font-medium transition-colors hover:text-primary"
                >
                  Sign In
                </Link>
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                  Get Started
                </Button>
                <Sheet>
                  <SheetTrigger>
                    <div>
                      <Button variant="outline" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                      </Button>
                    </div>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="grid gap-2 py-6">
                      {navItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex w-full items-center py-2 text-lg font-semibold ${
                            item.active ? "text-primary" : ""
                          }`}
                        >
                          {item.name}
                          {item.badge && (
                            <Badge
                              variant="outline"
                              className={`ml-2 bg-${item.badge.variant}-100 text-${item.badge.variant}-800 border-${item.badge.variant}-200 text-[10px] py-0`}
                            >
                              {item.badge.text}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

