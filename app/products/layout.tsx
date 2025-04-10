import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - TelTaste",
  description: "Discover our range of authentic Indonesian culinary delights",
}

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <div className="min-h-screen">{children}</div>
}
