import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

interface HeroItem {
  title: string
  link: string
  thumbnail: string
}

interface HeroParallaxProps {
  items: HeroItem[]
}

export function HeroParallax({ items }: HeroParallaxProps) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="relative h-[500vh] overflow-hidden">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {items.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 