"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  Database,
  Search,
  Rocket,
  Award,
  BookCheck,
  Target,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"
import { ScoreChart } from "@/components/score-chart"
import { FloatingNav } from "@/components/floating-nav"
import { HeroParallax } from "@/components/hero-parallax"
import { GlowingButton } from "@/components/glowing-button"
import { AnimatedCard } from "@/components/animated-card"
import { FeatureCard3D } from "@/components/feature-card-3d"
import { ResourceCard } from "@/components/resource-card"
import { StatsCounter } from "@/components/stats-counter"
import { WorkshopCard } from "@/components/workshop-card"
import { ReviewCarousel } from "@/components/review-carousel"

export default function Home() {
  const isMobile = useMobile()
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Update navbar items to just be links without practice tests:
  const navItems = [
    {
      name: "Math",
      href: "/math",
    },
    {
      name: "Reading & Writing",
      href: "/reading-writing",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Schools",
      href: "/schools",
    },
    {
      name: "Tips",
      href: "/tips",
    },
    {
      name: "Tutorials",
      href: "/tutorials",
    },
    {
      name: "Tutor",
      href: "/tutor",
    },
    {
      name: "Planner",
      href: "/planner",
    },
  ]

  // Update the heroItems array to remove practice test items and keep only general SAT content:
  const heroItems = [
    {
      title: "SAT Study Strategies",
      link: "/resources/strategies",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "SAT Reading Tips",
      link: "/resources/reading",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "SAT Math Concepts",
      link: "/resources/math",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "SAT Writing Guide",
      link: "/resources/writing",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Study Plans",
      link: "/resources/plans",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Vocabulary Builder",
      link: "/resources/vocabulary",
      thumbnail: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Floating Navigation - Now visible on initial load */}
      <FloatingNav navItems={navItems} />

      {/* Hero Section with Parallax */}
      <section
        ref={targetRef}
        className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-green-400/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="container relative px-4 md:px-6 flex flex-col items-center justify-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-2"
            >
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700 backdrop-blur-md border border-blue-200">
                3,500+ Practice Questions <ArrowRight className="inline h-4 w-4 ml-1" />
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                SAT Prep
                <div className="relative">
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
                    Made Easy
                  </span>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                  />
                </div>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-6"
              >
                DailySAT makes preparing for the SAT simple and effective in a stress-free environment. With our large
                question bank and daily practice approach, we'll help you achieve a 1550+ score and get into your dream
                school 🚀
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-full max-w-sm space-y-2 mt-8"
            >
              <GlowingButton className="w-full">Start Practicing Now</GlowingButton>
            </motion.div>
          </motion.div>

          {/* Centered Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center text-center"
          >
            <span className="text-sm text-gray-500 mb-2 font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              className="bg-blue-100 rounded-full p-2"
            >
              <ChevronDown className="h-6 w-6 text-blue-600" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 bg-white border-y border-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <StatsCounter value={80000} label="Users Worldwide" />
            <StatsCounter value={3500} label="Practice Questions" />
            <StatsCounter value={95} label="Success Rate" suffix="%" />
          </div>
        </div>
      </section>

      {/* Parallax Content Section */}
      <HeroParallax items={heroItems} />

      {/* Why Us Section */}
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50 to-transparent" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <Badge className="px-3 py-1 bg-blue-100 text-blue-700 border-blue-200 rounded-full mb-2">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The Ultimate
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  SAT Preparation Resource
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                Our mission is to empower students to achieve their best scores by providing an interactive,
                personalized, and efficient study experience.
              </p>
            </div>
          </motion.div>

          {/* Why Us Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard3D
                icon={<BookCheck className="h-6 w-6 text-blue-600" />}
                title="Comprehensive Question Bank"
                description="Access 3,500+ questions covering all SAT topics and difficulty levels."
                color="blue"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard3D
                icon={<Target className="h-6 w-6 text-purple-600" />}
                title="Personalized Learning"
                description="Adaptive practice that focuses on your specific areas for improvement."
                color="purple"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard3D
                icon={<Award className="h-6 w-6 text-green-600" />}
                title="Proven Results"
                description="Our students consistently achieve 1550+ scores on their SAT exams."
                color="green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard3D
                icon={<Rocket className="h-6 w-6 text-orange-600" />}
                title="Stress-Free Environment"
                description="Practice at your own pace in a supportive, no-pressure learning space."
                color="orange"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <div className="space-y-2">
              <Badge className="px-3 py-1 bg-blue-100 text-blue-700 border-blue-200 rounded-full mb-2">Features</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Find the right
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  {" "}
                  resources to boost your score
                </span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                DailySAT enables you to find the perfect practice materials and study guides for your SAT preparation
                journey.
              </p>
            </div>
          </motion.div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatedCard
                className="w-full"
                onStart={() => {}}
                title="Official SAT Practice Resources"
                badges={[
                  { text: "Reading", color: "blue" },
                  { text: "Writing", color: "green" },
                  { text: "Math", color: "purple" },
                  { text: "Complete", color: "yellow" },
                ]}
                description="Official College Board SAT practice resources with detailed answer explanations and scoring guides."
                duration="Self-paced"
                points="1600 points"
                buttonText="Access Resources"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedCard
                className="w-full"
                onStart={() => {}}
                title="Math Concept Review"
                badges={[
                  { text: "Math", color: "purple" },
                  { text: "Algebra", color: "blue" },
                  { text: "Geometry", color: "green" },
                  { text: "Detailed", color: "orange" },
                ]}
                description="Comprehensive review of math concepts with step-by-step solutions and strategy tips."
                duration="4 weeks"
                points="800 points"
                buttonText="Start Review"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedCard
                className="w-full"
                onStart={() => {}}
                title="Reading & Writing Review"
                badges={[
                  { text: "Reading", color: "blue" },
                  { text: "Writing", color: "green" },
                  { text: "Grammar", color: "pink" },
                  { text: "Comprehensive" },
                ]}
                description="Complete verbal review with detailed explanations and vocabulary building exercises."
                duration="4 weeks"
                points="800 points"
                buttonText="Start Review"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Score Improvement Section */}
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Badge className="px-3 py-1 bg-indigo-100 text-indigo-700 border-indigo-200 rounded-full">Results</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  Boost your SAT score
                </span>{" "}
                with our proven methods
              </h2>
              <p className="text-gray-500 md:text-xl">
                Our students see an average improvement of 150+ points after completing our comprehensive practice
                program.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Personalized Practice</h3>
                    <p className="text-sm text-gray-500">Adaptive tests that focus on your weak areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Detailed Analytics</h3>
                    <p className="text-sm text-gray-500">Track your progress and identify improvement areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Expert Strategies</h3>
                    <p className="text-sm text-gray-500">Learn proven techniques from 1500+ scorers</p>
                  </div>
                </div>
              </div>

              <Button className="mt-6" size="lg">
                Start Your Journey
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-3xl opacity-20" />
              <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Average Score Improvement</h3>
                  <div className="h-80">
                    <ScoreChart />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <Badge className="px-3 py-1 bg-blue-100 text-blue-700 border-blue-200 rounded-full mb-2">Workshops</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Learning Together
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Growing Together
              </span>
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
              We love educating, sharing, and learning! We encourage students to work together and bring each other up
              as they prepare for this rigorous exam. By instituting numerous workshops, we cultivate a positive and
              supportive environment where everyone has access to the same resources.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <WorkshopCard
                image="https://placehold.co/600x400/3b82f6/ffffff/png?text=Education+Workshop"
                title="Post-Secondary Education and Finances"
                partner="DailySAT x StockSavvy"
                attendees="60+"
                description="Hosted a workshop on post-secondary education and finances, helping students understand the financial aspects of college planning."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <WorkshopCard
                image="https://placehold.co/600x400/3b82f6/ffffff/png?text=Broadcasting+Workshop"
                title="Broadcasting and Content Development"
                partner="DailySAT x FTN Broadcasting"
                attendees="1000+"
                description="Collaborated with a broadcasting network with in-house content developments to reach a wider audience of students preparing for the SAT."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Study Resources Section */}
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <Badge className="px-3 py-1 bg-blue-100 text-blue-700 border-blue-200 rounded-full mb-2">Resources</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Finding SAT Resources
              <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Made Accessible.
              </span>
            </h2>
          </motion.div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ResourceCard
                icon={<Database className="h-6 w-6 text-blue-600" />}
                title="SAT Math Formula Sheet"
                description="A comprehensive collection of all math formulas you need to know for the SAT. Includes geometry, algebra, and statistics formulas with examples."
                color="blue"
                badges={[
                  { text: "Math", color: "purple" },
                  { text: "Formulas", color: "blue" },
                  { text: "Quick Reference", color: "green" },
                ]}
                primaryAction={{
                  text: "Download PDF",
                  onClick: () => {},
                }}
                secondaryAction={{
                  text: "Bookmark",
                  onClick: () => {},
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ResourceCard
                icon={<BookCheck className="h-6 w-6 text-green-600" />}
                title="SAT Vocabulary Builder"
                description="Master the most common SAT vocabulary words with our interactive flashcards and memory techniques. Includes usage examples from past tests."
                color="green"
                badges={[
                  { text: "Reading", color: "blue" },
                  { text: "Vocabulary", color: "green" },
                  { text: "Interactive", color: "yellow" },
                ]}
                primaryAction={{
                  text: "Start Learning",
                  onClick: () => {},
                }}
                secondaryAction={{
                  text: "Bookmark",
                  onClick: () => {},
                }}
              />
            </motion.div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FeatureCard3D
                icon={<Database className="h-6 w-6 text-blue-600" />}
                title="Diverse Collection"
                description="Explore 100+ diverse SAT resources, ensuring options for every student's needs."
                color="blue"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FeatureCard3D
                icon={<Search className="h-6 w-6 text-purple-600" />}
                title="Intuitive Sorting"
                description="Find the right study materials easily with our intuitive filters and search."
                color="purple"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FeatureCard3D
                icon={<CheckCircle className="h-6 w-6 text-green-600" />}
                title="Score Tracking"
                description="Track your progress and get personalized recommendations for improvement."
                color="green"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard3D
                icon={<Calendar className="h-6 w-6 text-orange-600" />}
                title="Regular Updates"
                description="Stay updated with new study materials added regularly for fresh preparation."
                color="orange"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <GlowingButton className="w-full">Let's Go</GlowingButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with Infinite Carousel */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-br from-indigo-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          >
            <Badge className="px-3 py-1 bg-indigo-100 text-indigo-700 border-indigo-200 rounded-full mb-2">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Students Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
              Hear from students who have improved their SAT scores with DailySAT.
            </p>
          </motion.div>

          {/* Multi-row Infinite Carousel */}
          <ReviewCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl" />

        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge className="px-3 py-1 bg-blue-100 text-blue-700 border-blue-200 rounded-full mb-4">
              Get Started Today
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Ready to
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {" "}
                boost your SAT score?
              </span>
            </h2>
            <p className="text-gray-500 md:text-xl mb-8">
              Join thousands of students who have improved their SAT scores with DailySAT. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowingButton className="w-full">Start Free Trial</GlowingButton>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t bg-white py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              DailySAT
            </div>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4">
              Cookies
            </Link>
          </nav>
          <div className="text-xs text-gray-500">© 2025 DailySAT. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

