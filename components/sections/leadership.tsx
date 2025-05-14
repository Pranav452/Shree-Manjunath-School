"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Leadership() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-4"
          >
            <span className="text-amber-800 font-medium">Empowering</span>
            <h2 className="text-3xl md:text-4xl font-bold">Leadership and Excellence in Nursing Education</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <p className="text-gray-700">
              At Shree Manjunath School of Nursing, we are dedicated to shaping the future of healthcare through
              exceptional nursing education. Our leadership team, which includes experienced professionals from various
              healthcare sectors, is committed to fostering an environment of innovation and excellence. We strive to
              empower students with the skills and knowledge necessary to excel in their nursing careers and make a
              positive impact in their communities.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12"
        >
          {[
            {
              title: "Commitment to Quality and Innovation",
              description:
                "We prioritize high standards in nursing education, ensuring our curriculum is up-to-date with the latest healthcare practices and technologies.",
            },
            {
              title: "Empowering Future Leaders in Healthcare",
              description:
                "Our programs are designed to cultivate leadership skills, preparing students to take on roles that influence the future of healthcare.",
            },
            {
              title: "Join Us in Making a Difference",
              description:
                "Become part of a community that is dedicated to improving healthcare outcomes and making a meaningful impact in society.",
            },
            {
              title: "A Vision for the Future",
              description:
                "We envision a future where our graduates lead with compassion and expertise, transforming the healthcare landscape for generations to come.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col">
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
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4 mt-12"
        >
          <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
            Learn More
          </Button>
          <Button className="bg-amber-800 hover:bg-amber-900 text-white flex items-center gap-1">
            Get Involved <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
