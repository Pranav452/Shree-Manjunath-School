'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"
import { useSmoothScroll } from "@/components/scroll-context"

export default function Footer() {
  const router = useRouter()
  const lenis = useSmoothScroll()

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('http') || href.startsWith('#')) {
      // External link or anchor, let the default behavior happen
      return
    }
    
    e.preventDefault()
    
    // Use smooth scrolling for internal navigation
    if (lenis) {
      // First navigate to the page
      router.push(href)
      
      // Then scroll to top with smooth animation
      lenis.scrollTo(0, { immediate: false, duration: 1.2 })
    } else {
      // Fallback if lenis is not available
      router.push(href)
    }
  }

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-bold mb-6 text-2xl font-script">Shri Manjunath Nursing</h2>
            <p className="mb-6">Subscribe to our newsletter for the latest updates on features and events.</p>
            <div className="flex gap-2">
              <Input placeholder="Your email here" className="bg-black border-gray-700 text-white" />
              <Button className="bg-black hover:bg-gray-800 transition-colors">Join</Button>
            </div>
            <p className="text-xs mt-2 text-gray-400">
              By subscribing, you consent to our <Link href="/policies/privacy-policy" className="hover:underline">Privacy Policy</Link> and agree to receive updates.
            </p>
          </div>
          
          <div className="px-4">
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="hover:text-amber-400 transition-colors" onClick={(e) => handleNavigation('/about', e)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/programs" className="hover:text-amber-400 transition-colors" onClick={(e) => handleNavigation('/programs', e)}>
                  Programs
                </a>
              </li>
            
              <li>
                <a href="/contact" className="hover:text-amber-400 transition-colors" onClick={(e) => handleNavigation('/contact', e)}>
                  Contact Us
                </a>
              </li>
            
              <li>
                <a href="/faculty" className="hover:text-amber-400 transition-colors" onClick={(e) => handleNavigation('/faculty', e)}>
                  Board Members
                </a>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-6">Connect With Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://www.facebook.com/shri_manjunath_nursing2024" className="hover:text-amber-400 transition-colors">
                    Facebook Page
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/shri_manjunath_nursing2024" className="hover:text-amber-400 transition-colors">
                    Instagram Feed
                  </Link>
                </li>
                
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Stay Updated</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </li>
                
                <li className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </li>
                <li className="flex items-center gap-3">
                  <Youtube className="h-5 w-5" />
                  <span>YouTube</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shri Manjunath School of Nursing. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/policies/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/policies/terms-of-use" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Use
            </Link>
            <Link href="/policies/cookie-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
