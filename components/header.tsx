"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useSmoothScroll } from "./scroll-context"

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Board Members", href: "/faculty" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const lenis = useSmoothScroll()

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    router.push(href)
    if (lenis) {
      lenis.scrollTo(0, { immediate: false, duration: 1.2 })
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-2 flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/logo.jpeg" 
              alt="School Logo" 
              width={36} 
              height={36} 
              className="rounded-full"
            />
            <span className="font-bold text-base md:text-xl">Shri Manjunath School</span>
          </Link>
          
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
            <Link href="/contact">
              <Button size="sm" className="bg-amber-800 hover:bg-amber-900 text-white">
                Get Started
              </Button>
            </Link>
          </nav>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden p-1.5" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col space-y-4">
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
              <Link href="/contact" className="w-full">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white mt-2 w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>
      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-16"></div>
    </>
  )
}
