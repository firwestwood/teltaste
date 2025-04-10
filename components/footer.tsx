import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">TelTaste</h3>
            <p className="text-sm text-gray-500">
              Providing authentic Indonesian culinary delights with a modern twist.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.instagram.com/teltaste/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/#products" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Products
              </Link>
              <Link href="/#about" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                About Us
              </Link>
              <Link href="/#contact" className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-center text-sm text-gray-500">
            Made by TelTaste &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
