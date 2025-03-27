import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: 'DailySAT - Master the SAT with Daily Practice',
  description: 'DailySAT helps you prepare for the SAT with daily practice questions, expert guidance, and comprehensive resources.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  )
}
