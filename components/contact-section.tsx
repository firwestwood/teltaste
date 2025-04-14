"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        "service_t7wyjmi", 
        "template_0un8uvh",
        formData,
        "lMlBCbWc81U0MzgjI"
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "We've received your message and will respond soon.",
        })
        setFormData({ name: "", email: "", message: "" })
        setIsSubmitting(false)
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
        })
        console.error(error)
        setIsSubmitting(false)
      })
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to place an order? Get in touch with us!
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-12">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Send us a message</h3>
              <p className="text-gray-500">Fill out the form and we'll get back to you as soon as possible.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    id="email"
                    placeholder="Your email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="focus-visible:ring-red-500"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] focus-visible:ring-red-500"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
