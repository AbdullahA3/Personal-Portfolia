import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import TopNav from "./components/TopNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abdullah Anwar - Full Stack Developer",
  description:
    "Portfolio of Abdullah Anwar, a Full Stack Developer specializing in React, Next.js, Java, Python, HTML, Type Script, Java Script, C++, and C#.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TopNav />
          <div className="fixed top-4 right-4 z-[60]">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

