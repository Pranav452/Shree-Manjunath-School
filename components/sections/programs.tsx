"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Programs() {
  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Programs
          </h2>
       
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center flex flex-col h-full">
            <div className="flex-1">
              <span className="text-amber-800 font-medium">Bachelor's Degree</span>
              <h2 className="text-2xl md:text-3xl font-bold my-4 min-h-[4rem] flex items-center justify-center">
                BSc Nursing Program
              </h2>
              <p className="text-gray-700 mb-8 min-h-[160px]">
                Our 4-year BSc Nursing program provides comprehensive training in clinical skills, healthcare management, and patient care. Graduates are well-prepared for diverse nursing careers.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-auto">
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                Learn
              </Button>
              <Button variant="link" className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center flex flex-col h-full">
            <div className="flex-1">
              <span className="text-amber-800 font-medium">Diploma Program</span>
              <h2 className="text-2xl md:text-3xl font-bold my-4 min-h-[4rem] flex items-center justify-center">
                General Nursing & Midwifery
              </h2>
              <p className="text-gray-700 mb-8 min-h-[160px]">
                Our 3-year GNM program focuses on essential nursing skills and midwifery expertise, preparing students for hospital settings and community healthcare services.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-auto">
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                Learn
              </Button>
              <Button variant="link" className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="text-center flex flex-col h-full">
            <div className="flex-1">
              <span className="text-amber-800 font-medium">Certificate Course</span>
              <h2 className="text-2xl md:text-3xl font-bold my-4 min-h-[4rem] flex items-center justify-center">
                Auxiliary Nursing Program
              </h2>
              <p className="text-gray-700 mb-8 min-h-[160px]">
                Our 2-year ANM program trains students in basic nursing and healthcare delivery. Ideal for those seeking quick entry into the healthcare sector with opportunities for career advancement.
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-auto">
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                Learn
              </Button>
              <Button variant="link" className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto">
                Explore <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
