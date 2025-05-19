import { Metadata } from "next"
import ContactSection from "@/components/sections/ContactSection"

export const metadata: Metadata = {
  title: "Contact Us | Shri Manjunath School of Nursing",
  description: "Get in touch with Shri Manjunath School of Nursing for inquiries, admissions, and more",
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <ContactSection />
    </main>
  )
} 