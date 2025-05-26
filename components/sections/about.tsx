"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-16 md:pt-24 md:pb-12 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-amber-800 font-medium">Empowering</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">About Shri Manjunath School of Nursing</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <p className="text-gray-700">
              Shri Manjunath School of Nursing, operated by the Netaji Subhashchandra Bose Charitable Trust, is dedicated
              to providing exceptional nursing education tailored for rural students. Our expert faculty, modern
              infrastructure, and hands-on training ensure that our graduates are well-prepared to meet the healthcare
              needs of their communities.
            </p>
            <div className="mt-4">
              <p className="font-medium text-amber-800">Approved by:</p>
              <ul className="list-disc pl-5 text-gray-700 mt-2 space-y-1">
                <li>Indian Nursing Council</li>
                <li>State Government of Maharashtra & Maharashtra Nursing Council</li>
                <li>Maharashtra State Board of Nursing & Paramedical Education, Mumbai</li>
              </ul>
            </div>
            <div className="flex gap-4">
              <Link href="/programs">
                <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                  Learn More
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="link" className="flex items-center gap-1 text-black hover:text-amber-800 p-0 h-auto mt-2">
                  Contact <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
