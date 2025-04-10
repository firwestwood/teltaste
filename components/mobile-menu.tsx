"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex justify-end">
          <SheetClose asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>
        <nav className="flex flex-col gap-4 mt-4">
          <Link
            href="/#products"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              scrollToSection("products")
            }}
          >
            Products
          </Link>
          <Link
            href="/#about"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              scrollToSection("about")
            }}
          >
            About Us
          </Link>
          <Link
            href="/#contact"
            className="text-lg font-medium hover:text-red-600 transition-colors"
            onClick={(e) => {
              e.preventDefault()
              setOpen(false)
              scrollToSection("contact")
            }}
          >
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/teltaste/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-red-600 transition-colors flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
