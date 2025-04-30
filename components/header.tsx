"use client"

import Link from "next/link"
import { Instagram } from "lucide-react"
import MobileMenu from "./mobile-menu"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function Header() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            {/* Tambahkan logo di sini */}
            <img src="/teltaste-logo-remove-background.png" alt="Logo" className="h-20 w-20" />
            <span className="text-xl font-bold text-red-600">TelTaste</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#products"
            className="text-sm font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("products")
            }}
          >
            Products
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("about")
            }}
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("contact")
            }}
          >
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/teltaste/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-red-600 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </nav>
        <div className="flex md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
