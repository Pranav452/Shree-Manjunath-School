"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-amber-800 font-medium">Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Diploma Program</h2>
            <h2 className="text-2xl md:text-3xl font-bold ">
                General Nursing & Midwifery
              </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <p className="text-gray-700">
            Our 3-year GNM program focuses on essential nursing skills and midwifery expertise, preparing students for hospital settings and community healthcare services. This comprehensive curriculum includes hands-on training in various clinical environments, allowing students to gain practical experience under the guidance of experienced professionals. Additionally, the program emphasizes critical thinking, patient care, and ethical practices, ensuring that our graduates are not only skilled practitioners but also compassionate caregivers ready to meet the diverse needs of patients in both urban and rural healthcare settings.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                Learn More
              </Button>
              <Button variant="link" className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto">
                Contact <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
