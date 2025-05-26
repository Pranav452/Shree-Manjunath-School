"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Facilities() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src="/nurturing-image.png"
              alt="State-of-the-Art Facilities"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-amber-800 font-medium">Empowering</span>
            <h2 className="text-3xl md:text-4xl font-bold">State-of-the-Art Facilities for Nursing Education</h2>
            <p className="text-gray-700">
              Our institution boasts a 200+ bed training hospital and advanced skill labs. With a well-stocked library
              and modern simulation labs, students receive comprehensive hands-on training.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded">
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
                <div>
                  <h3 className="text-xl font-bold">Training Hospital</h3>
                  <p className="text-gray-700">
                    Experience real-world clinical training in our fully equipped 200+ bed training hospital.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black p-2 rounded">
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
                <div>
                  <h3 className="text-xl font-bold">Skill Labs</h3>
                  <p className="text-gray-700">
                    Our skill labs provide essential training for practical nursing skills and patient care.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/programs">
                <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                  Learn More
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white flex items-center gap-1">
                  Apply  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
