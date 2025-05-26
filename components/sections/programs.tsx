"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Diploma Program
            </h2>
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
              Our 3-year GNM program focuses on essential nursing skills and
              midwifery expertise, preparing students for hospital settings and
              community healthcare services. This comprehensive curriculum
              includes hands-on training in various clinical environments,
              allowing students to gain practical experience under the guidance
              of experienced professionals. Additionally, the program emphasizes
              critical thinking, patient care, and ethical practices, ensuring
              that our graduates are not only skilled practitioners but also
              compassionate caregivers ready to meet the diverse needs of
              patients in both urban and rural healthcare settings.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="bg-gray-200 hover:bg-gray-300 border-0"
              >
                Learn More
              </Button>
              <Button
                variant="link"
                className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto"
              >
                Contact <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <span className="text-amber-800 font-medium bg-amber-100 px-4 py-1 rounded-full">
              Growth Opportunities
            </span>
          </div>

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
                We currently offer English speaking classes and will soon expand
                to German, French, Russian, and Arabic training to help students
                prepare for international education and job opportunities.
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
                We provide job placement support in major metropolitan cities,
                including opportunities in government hospitals and the private
                sector, through our own company network.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
