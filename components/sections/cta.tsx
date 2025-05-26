"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="apply" className="py-16 md:py-24 bg-amber-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Nursing Program Today</h2>
          <p className="text-gray-700 mb-8">Empower your future with quality nursing education.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-amber-800 hover:bg-amber-900 text-white">Apply</Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
