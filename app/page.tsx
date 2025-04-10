import Hero from "@/components/hero"
import ProductShowcase from "@/components/product-showcase"
import AboutUs from "@/components/about-us"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <ProductShowcase />
      <AboutUs />
      <ContactSection />
    </div>
  )
}
