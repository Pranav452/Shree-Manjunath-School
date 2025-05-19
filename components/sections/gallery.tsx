"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)

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
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {/* Image 1 */}
          {/* <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/1.jpg"
              alt="Gallery image 1"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div> */}

          {/* Image 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/2.jpg"
              alt="Gallery image 2"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Image 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/3.jpg"
              alt="Gallery image 3"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Image 4 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/4.jpg"
              alt="Gallery image 4"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Image 5 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/5.jpg"
              alt="Gallery image 5"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>

          {/* Image 6 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
          >
            <img
              src="/6.jpg"
              alt="Gallery image 6"
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </motion.div>
          <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
              >
                <img
                  src="/7.jpg"
                  alt="Gallery image 7"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>

          {/* Additional images only shown when showAll is true */}
          {showAll && (
            <>
              {/* Image 7 */}
             

              {/* Image 8 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
              >
                <img
                  src="/8.jpg"
                  alt="Gallery image 8"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>

              {/* Image 9 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
              >
                <img
                  src="/9.jpg"
                  alt="Gallery image 9"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>

              {/* Image 10 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
              >
                <img
                  src="/10.jpg"
                  alt="Gallery image 10"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>

              {/* Image 11 */}
              {/* <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg h-64 sm:h-72 md:h-80"
              >
                <img
                  src="/11.jpg"
                  alt="Gallery image 11"
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div> */}
            </>
          )}
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
