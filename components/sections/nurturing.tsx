"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Nurturing() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-amber-800 font-medium">Empowering</span>
            <h2 className="text-3xl md:text-4xl font-bold">Nurturing Compassionate Nurses for Tomorrow</h2>
            <p className="text-gray-700">
              We emphasize the importance of practical experience, with our leadership including <span className="font-bold">Sachin Shamrao Mane</span>, 
              President and Production Engineer with 9 years of experience at ONGC, and a long-standing association 
              with the Fire & Safety Institute since 2007. Our students gain valuable insights from industry leaders 
              who have worked with ONGC oil field contracts and have experience with Aramco and Weatherford.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold">Our Vision</h3>
                <p className="text-gray-700">
                  Transforming healthcare in rural communities through skilled nursing professionals.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold">Join Us</h3>
                <p className="text-gray-700">Become a part of our nursing family today!</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" className="bg-gray-200 hover:bg-gray-300 border-0">
                Learn More
              </Button>
              <Button className="bg-amber-800 hover:bg-amber-900 text-white flex items-center gap-1">
                Sign Up <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <img
              src="/impp.jpg"
              alt="Nursing students learning"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
