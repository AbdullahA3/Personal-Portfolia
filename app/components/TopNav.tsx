"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export default function TopNav() {
  const [activeSection, setActiveSection] = useState("about")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <motion.div
      className={`fixed w-full z-50 transition-all duration-300 ${isVisible ? "top-0" : "-top-20"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-end space-x-8">
            {navItems.map(({ id, label }) => (
              <motion.li key={id} whileHover={{ scale: 0.95 }}>
                <button
                  onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === id
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  )
}

