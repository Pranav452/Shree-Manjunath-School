"use client"

import { Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ContactForm } from "@/components/ui/ContactForm"

export default function ContactSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "What are the admission requirements?",
      answer: "Please visit our Admissions page for detailed information about eligibility criteria and the application process."
    },
    {
      question: "Is there hostel facility available?",
      answer: "Yes, we provide separate hostel facilities for male and female students with all necessary amenities."
    },
    {
      question: "Do you offer scholarships?",
      answer: "We offer merit-based scholarships for deserving students. Please contact the admissions office for more details."
    },
    {
      question: "What nursing programs do you offer?",
      answer: "We offer various nursing programs including GNM (General Nursing and Midwifery) and other specialized nursing courses. Please check our Programs page for complete details."
    },
    {
      question: "What is the duration of the nursing courses?",
      answer: "The duration varies by program. Our GNM program is typically 3.5 years, while other specialized courses may have different durations. Please contact our admissions office for specific information."
    },
    {
      question: "Are there any placement opportunities after graduation?",
      answer: "Yes, we have a dedicated placement cell that helps our graduates find suitable employment opportunities in hospitals, clinics, and healthcare institutions across the country."
    },
    {
      question: "What facilities are available on campus?",
      answer: "Our campus features modern classrooms, well-equipped laboratories, a comprehensive library, computer lab, recreation areas, and clinical practice facilities to ensure a complete learning experience."
    },
    {
      question: "How can I apply for admission?",
      answer: "You can apply online through our website or visit our campus to collect and submit the application form. All necessary documents and application fees must be submitted before the deadline."
    }
  ]

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
          
          <ContactForm />
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
                <p className="mb-1">+91 7385425431</p>
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
                <p className="mb-1">Monday - Saturday: 9:00 AM - 5:00 PM</p>
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
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-bold text-gray-900">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      ease: "easeInOut",
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-0 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  )
} 