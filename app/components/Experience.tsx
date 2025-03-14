"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
  


    {
      company: "Biomedical Engineering Research, Innovation, and Technology (BMERIT)",
      location: "Calgary, AB",
      period: "November 2024 - Present",
      role: "Software and Programmables Team Developer",
      responsibilities: [
        "Developed and maintained software for an IoT-based hygiene tracking system deployed at Alberta Children's Hospital.",
        "Integrated 9+ devices to monitor hand sanitizer usage.",
        "Collaborated with biomedical engineers, human factors researchers, and IT specialists to refine device accuracy and improve user interaction.",
        "Designed and implemented real-time data visualization using AWS, MQTT, and ThingsBoard, improving system response time by 40% for live updates.",
        "Created dynamic dispenser usage analytics, enabling trend tracking over weekly, monthly, and quarterly intervals, increasing data transparency by 80%.",
      ],
    },

    {
      company: "Data Science and Machine Learning (Urban Systems Partnership Project)",
      location: "Calgary, AB",
      period: "March 2025 - Present",
      role: "Project Member",
      responsibilities: [
        "Designed and developed an interactive visualization tool to track project timelines, employee contributions, and workload distribution using React and data science methodologies.",
        "Developed a seamless, easy-to-navigate interface tailored for project consultants.",
        "Helped project leads improve tracking accuracy by 48%, ensuring better project delivery timelines.",
        "Optimized for 21M+ rows of project and employee data.",
      ],
    }, 

    {
      company: "Eco Club (University Of Calgary)",
      location: "Calgary, AB",
      period: "May 2025 - Present",
      role: "Vice President External",
      responsibilities: [
        "Build and maintain relationships with external organizations, sponsors, and community groups.",
        "Coordinate with external groups to provide volunteering and learning opportunities for club members.",
        "Work with campus sustainability offices and student government on eco-friendly initiatives.",
        "CWork with the VP Communications to promote partnerships and external events through social media and other channels.",
      ],
    },

    {
      company: "Abu Dhabi National Oil Company (ADNOC)",
      location: "Abu Dhabi, UAE",
      period: "May 2024 - Aug 2024",
      role: "Student Data Intern",
      responsibilities: [
        "Assisted in cleaning and preprocessing 400,000+ rows of data for analysis and reporting.",
        "Improved data accuracy by 15% through validation techniques and anomaly detection.",
        "Developed 5+ interactive dashboards using Power BI/Tableau, enhancing data-driven decision-making.",
        "Contributed to predictive modeling efforts, improving forecasting accuracy by 10%.",
      ],
    },


  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

