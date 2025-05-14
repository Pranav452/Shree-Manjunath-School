"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function GNMProgram() {
  return (
    <section id="admissions" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Explore Our Comprehensive G.N.M. Diploma Program for Aspiring Nurses
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              image: "/prg1.png",
              alt: "Join Us in Shaping the Future of Nursing Education",
              title: "Join Us in Shaping the Future of Nursing Education",
              description: "Our G.N.M. program is a 3-year diploma designed for students from all backgrounds.",
              buttonText: "Learn More"
            },
            {
              image: "/prg2.png",
              alt: "Eligibility Criteria for G.N.M. Program Admission",
              title: "Eligibility Criteria for G.N.M. Program Admission",
              description: "Students must have 45% or more in their 12th-grade examinations.",
              buttonText: "Sign Up"
            },
            {
              image: "/prg3.png",
              alt: "Benefits of Choosing Our G.N.M. Program",
              title: "Benefits of Choosing Our G.N.M. Program",
              description: "Gain hands-on training in a state-of-the-art facility with expert faculty.",
              buttonText: "Apply"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-6">
                  {item.description}
                </p>
                <Button variant="link" className="flex items-center gap-1 mx-auto text-black hover:text-amber-800">
                  {item.buttonText} <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
