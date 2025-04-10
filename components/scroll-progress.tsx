"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", updateScrollProgress)
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-1 z-50 bg-gray-200">
      <div className="h-full bg-red-600 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
    </div>
  )
}
