"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const allImages = Array.from({ length: 11 }, (_, i) => i + 1)
  const displayedImages = showAll ? allImages : allImages.slice(0, 6)

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-gray-700">Explore our vibrant moments and achievements</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {displayedImages.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
            >
              <img
                src={`/${item}.jpg`}
                alt={`Gallery image ${item}`}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-8"
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="default"
            size="lg"
            className="font-medium"
          >
            {showAll ? "Show Less" : "View More"}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
