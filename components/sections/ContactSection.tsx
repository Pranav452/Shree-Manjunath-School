"use client"

import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { motion } from "framer-motion"

export default function ContactSection() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-8">
            We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Your full name" 
                  required 
                  className="w-full" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Your email address" 
                  required 
                  className="w-full" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Your phone number" 
                className="w-full" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">
                Subject
              </label>
              <Input 
                id="subject" 
                type="text" 
                placeholder="Subject of your inquiry" 
                required 
                className="w-full" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Your message" 
                required 
                className="w-full min-h-[120px]"
              />
            </div>
            
            <div className="flex items-center gap-2 mt-4">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-sm">
                I accept the Terms
              </label>
            </div>
            
            <Button type="submit" className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white mt-4">
              Send Message
            </Button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="mb-1">+91 7385685431</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="mb-1">netajibose2018@gmail.com</p>
                <p>shrimanjunath369@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p>
                  Above Niramay Hospital, Dahivadi Road,<br />
                  Vaduj, Pin 415506<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Office Hours</h3>
                <p className="mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM (Admissions only)</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Location</h2>
        <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7606.334336402259!2d74.451338!3d17.594795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3dade10b22a7f%3A0xb9555e581f8c8e15!2sVaduj%2C%20Maharashtra%20415506!5e0!3m2!1sen!2sin!4v1747637574082!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">What are the admission requirements?</h3>
            <p>Please visit our Admissions page for detailed information about eligibility criteria and the application process.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">Is there hostel facility available?</h3>
            <p>Yes, we provide separate hostel facilities for male and female students with all necessary amenities.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">Do you offer scholarships?</h3>
            <p>We offer merit-based scholarships for deserving students. Please contact the admissions office for more details.</p>
          </div>
        </div>
      </motion.section>
    </>
  )
} 