"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import CTA from "@/components/sections/cta"

export default function ProgramsPage() {
  return (
    <>
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Programs</h1>
      
      <section className="mb-12">
      

        <div className=" gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4">General Nursing & Midwifery (GNM)</h2>
            <p className="mb-4">
              Our 3-year GNM program focuses on essential nursing skills and midwifery expertise, preparing students for hospital settings and community healthcare services. The curriculum includes both theoretical and practical components, ensuring that students gain hands-on experience in various clinical environments.
            </p>
            <h3 className="text-lg font-semibold mb-2">Curriculum Overview:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Fundamentals of Nursing</li>
              <li>Medical-Surgical Nursing</li>
              <li>Pediatric Nursing</li>
              <li>Mental Health Nursing</li>
              <li>Midwifery and Obstetrical Nursing</li>
              <li>Community Health Nursing</li>
              <li>Professional Ethics and Law in Nursing</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Duration:</h3>
            <p className="mb-4">The program is conducted over a period of 3 years, divided into six semesters.</p>
            <h3 className="text-lg font-semibold mb-2">Eligibility Criteria:</h3>
            <p className="mb-4">Candidates must have completed their 10+2 education with a minimum of 40% marks in Science, Arts, Commerce, MCBC, (CET not required)</p>
            <h3 className="text-lg font-semibold mb-2">Career Opportunities:</h3>
            <p className="mb-4">Graduates can pursue careers in hospitals, clinics, community health organizations, and educational institutions, with opportunities for further specialization in various nursing fields.</p>
          </motion.div>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Our Programs?</h2>
        <p className="mb-4">
          Our programs are designed to provide a holistic education that combines theoretical knowledge with practical skills. We emphasize critical thinking, compassionate care, and ethical practice, ensuring that our graduates are well-prepared to meet the challenges of the healthcare industry. Additionally, our experienced faculty and state-of-the-art facilities enhance the learning experience, making us a leading choice for nursing education.
        </p>
        
        <div className="mt-12">
          
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 relative z-10 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                  🌍 Master Spoken English and Foreign Languages
                </h3>
                <div className="absolute -top-1 -left-2 w-full h-8 bg-gradient-to-r from-amber-100 to-amber-200 rounded-lg opacity-30 -z-10"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We currently offer English speaking classes and will soon expand to German, French, Russian, and Arabic training to help students prepare for international education and job opportunities.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="relative">
                <h3 className="text-xl font-bold mb-4 relative z-10 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  💼 Job Placement Assistance Across Sectors
                </h3>
                <div className="absolute -top-1 -left-2 w-full h-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg opacity-30 -z-10"></div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We provide job placement support in major metropolitan cities, including opportunities in government hospitals and the private sector, through our own company network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
   
    </main>
       <CTA />
       </>
  )
} 