"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"
import { motion } from "framer-motion"

export default function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Authentic Indonesian <span className="text-red-600">Culinary Delights</span>
            </h1>
            {/* Caption text */}
            <p className="text-gray-700 md:text-xl">
              Menyediakan makanan praktis, lezat, dan terjangkau dengan varian unik seperti Nasi GIT yang menggugah
              selera, Dimsum yang lembut dan penuh cita rasa, serta Sambal Kecombrang yang khas dan memberikan sentuhan
              spesial pada setiap hidangan.
            </p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link
                href="/#products"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("products")
                }}
              >
                <Button className="bg-red-600 hover:bg-red-700">Explore Our Products</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
