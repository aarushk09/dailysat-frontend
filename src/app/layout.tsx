import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "../../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DailySAT - SAT Prep Made Easy",
  description:
    "DailySAT makes preparing for the SAT simple and effective with practice tests, study guides, and personalized coaching.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

