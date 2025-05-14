"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function PremierFacilities() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const facilities = [
    {
      title: "State-of-the-Art Infrastructure",
      description: "200+ bed training hospital for hands-on experience.",
      image: "/prg1.png",
      cta: "Learn More",
    },
    {
      title: "Advanced Learning Resources",
      description: "Skill labs and a well-stocked library available for comprehensive learning and research.",
      image: "/prg2.png",
      cta: "Explore",
    },
    {
      title: "Innovative Technology for Training",
      description: "Computer labs and modern simulation labs enhance learning with cutting-edge equipment.",
      image: "/prg3.png",
      cta: "Join Us",
      label: "Facilities",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-800 font-medium">Empowering</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Premier Facilities</h2>
          <p className="text-gray-700">Equipping Students for Success</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="bg-white p-10 rounded-lg shadow-md h-full flex flex-col relative overflow-hidden"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`transition-all duration-500 ease-in-out ${
                  hoveredCard === index ? "opacity-100 max-h-48 mb-4" : "opacity-0 max-h-0"
                }`}
              >
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              <div
                className={`transition-all duration-500 ease-in-out ${hoveredCard === index ? "transform translate-y-0" : ""}`}
              >
                <div className="bg-black p-2 rounded w-fit mb-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M21 16.0002V7.9992L12 2L3 7.9992V16.0002L12 22L21 16.0002Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {facility.label && <h4 className="text-sm font-medium text-gray-500 mb-1">{facility.label}</h4>}

                <h3 className="text-xl font-bold mb-3">{facility.title}</h3>
                <p className="text-gray-700 mb-4">{facility.description}</p>

                <div className="mt-auto">
                  <Button variant="link" className="flex items-center gap-1 p-0 h-auto text-black hover:text-amber-800">
                    {facility.cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
