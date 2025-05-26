"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useSmoothScroll } from "./scroll-context"

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Board Members", href: "/faculty" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const lenis = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
    
    // Use smooth scrolling for navigation
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-200",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl">
            Shri Manjunath School
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavigation(link.href, e)}
              className="text-sm font-medium hover:text-amber-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {/* Only show Get Started button on desktop */}
          <Button size="sm" className="bg-amber-800 hover:bg-amber-900 text-white hidden md:flex">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium py-2 hover:text-amber-800 transition-colors"
                  onClick={(e) => handleNavigation(link.href, e)}
                >
                  {link.name}
                </a>
              ))}
              {/* Add Get Started button to mobile menu */}
              <Button className="bg-amber-800 hover:bg-amber-900 text-white mt-2 w-full">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
