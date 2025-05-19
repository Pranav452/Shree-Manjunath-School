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
                <span className="text-gray-700">netajibose2018@gmail.com</span> 
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Phone:</span>
                <span className="text-gray-700">+91 7385685431</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Address:</span>
                <span className="text-gray-700">Above Niramay Hospital, Dahivadi Road, Vaduj, Pin 415506</span>
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
        
        {/* Location Map */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Our Location</h3>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7606.334336402259!2d74.451338!3d17.594795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3dade10b22a7f%3A0xb9555e581f8c8e15!2sVaduj%2C%20Maharashtra%20415506!5e0!3m2!1sen!2sin!4v1747637574082!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
