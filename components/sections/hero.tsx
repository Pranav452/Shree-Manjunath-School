"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Us in Shaping Future Healthcare Leaders
          </h1>
          <p className="text-base mb-6">
            At Shri Manjunath School of Nursing, we nurture the next generation of compassionate nurses through quality education and hands-on training. Our commitment empowers students from rural backgrounds to thrive in healthcare.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-black hover:bg-gray-100 transition-colors">Apply</Button>
            <Button variant="outline" className=" bg-black text-white  border-gray-800  hover:bg-white hover:text-black transition-colors">
              Learn More →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
