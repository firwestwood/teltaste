import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import ScrollProgress from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TelTaste - Authentic Indonesian Culinary Delights",
  description:
    "Discover TelTaste's delicious range of authentic Indonesian culinary products including Nasi GIT, Dimsum, and Sambal Kecombrang.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <ScrollProgress />
            <main className="flex-1">{children}</main>
            <Footer />
            <BackToTop />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'