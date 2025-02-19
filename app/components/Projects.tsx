"use client"

import { motion } from "framer-motion"
import { Globe, Users } from "lucide-react"
import Image from "next/image"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const projects = [
  {
    title: "University Club Platform",
    period: "Jan 2025 – Present",
    role: "Full Stack Developer",
    description: "A full-stack web application for university clubs management.",
    achievements: [
      "Developed with React frontend and Flask REST API, improving performance by 20% in page load times.",
      "Utilized Celery and Redis for efficient asynchronous task management.",
      "Implemented GitHub OAuth for user authentication, processing 500+ user accounts daily.",
      "Visualized GitHub data to enhance collaboration insights, increasing user engagement by 25%.",
    ],
    icon: <Globe className="w-12 h-12 text-blue-500" />,
  },
  {
    title: "WildBC – Wildlife Conservation Platform",
    period: "18 Feb 2018 – May 2020",
    role: "Hackathon Project",
    description: "A React, Next.js, and Node.js-powered wildlife conservation platform developed in 24 hours.",
    achievements: [
      "Led a team of 4 to develop and deploy the platform in a 24-hour hackathon.",
      "Built a dynamic discussion board enabling 100+ simulated user interactions.",
      "Integrated real-time climate data, processing 30+ years of natural disaster records in British Columbia.",
      "Successfully deployed the platform for public access, promoting wildlife conservation awareness.",
    ],
    icon: <Users className="w-12 h-12 text-green-500" />,
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10">
                {project.icon}
                <h3 className="text-2xl font-semibold mt-4 mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.period}</p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200">{project.role}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <h4 className="text-lg font-medium mb-2 dark:text-gray-200">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 -mb-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

