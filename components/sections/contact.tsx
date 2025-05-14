"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-amber-800 font-medium">Empowering</span>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="text-gray-700">We're here to answer your questions and assist you.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span className="text-gray-700">info@shreemanjunath.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span className="text-gray-700">+91 7385685431</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Address:</span>
                <span className="text-gray-700">Khade Complex, Near Nigam Hospital, Vaduj</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" placeholder="Placeholder" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Placeholder" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Type your message..." className="min-h-[120px]" />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  I accept the Terms
                </label>
              </div>
              <Button type="submit" className="w-full bg-amber-800 hover:bg-amber-900 text-white">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
