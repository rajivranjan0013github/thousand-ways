"use client"

import Image from "next/image"
import Link from "next/link"
import { Building2, ArrowLeft, Phone, Mail, MapPin, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import * as React from "react"
import { toast } from "sonner"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    mobile: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const date = new Date().toLocaleString()
      const response = await fetch("https://sheetdb.io/api/v1/b7ppda7dn8j94", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name : formData.name,
          Mobile : formData.mobile,
          Company : formData.company,
          Subject : formData.subject,
          Message : formData.message,
          Date : date,
        }),
      })

      if (response.ok) {
        toast.success("Message sent successfully!")
        setFormData({
          name: "",
          mobile: "",
          company: "",
          subject: "",
          message: "",
        })
      } else {
        toast.error("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const mailtoLink = `mailto:thousandways.help@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nMobile: ${formData.mobile}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
  )}`

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b relative">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/logo.jpeg" alt="Thousand Ways Logo" width={24} height={24} className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Thousand Ways</span>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#about">
            About
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-14 left-0 right-0 bg-white border-b shadow-lg py-4 px-4 lg:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="/#products"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="/#features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Contact Us</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 text-sm md:text-base lg:text-xl px-4">
                Ready to transform your operations? Get in touch with us today to learn more about our solutions or
                schedule a demo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full py-8 md:py-12 lg:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-gray-600 text-sm md:text-base mb-6">
                    We&apos;re here to help you streamline your operations with our innovative software solutions. Reach out
                    to us through any of the following channels:
                  </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Our Office</h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        Dariyapur, Bodh Gaya,
                        <br />
                        Bihar 824237, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Phone</h3>
                      <a href="tel:+919942000425" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm md:text-base">
                        +91 9942000425
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg mb-1">Email</h3>
                      <a
                        href="mailto:thousandways.help@gmail.com"
                        className="text-gray-600 hover:text-emerald-600 transition-colors text-sm md:text-base"
                      >
                        thousandways.help@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 md:p-6 rounded-lg">
                  <h3 className="font-semibold text-base md:text-lg mb-2">Business Hours</h3>
                  <div className="space-y-1 text-gray-600 text-sm md:text-base">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-4 md:p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl md:text-2xl">Send us a Message</CardTitle>
                  <CardDescription className="text-sm md:text-base">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mobile" className="text-sm font-medium">
                        Mobile Number *
                      </label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        required
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company/Organization
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your company or organization name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        value={formData.subject}
                        onChange={handleInputChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="demo">Request Demo</option>
                        <option value="hospital">TheHospital.in - Hospital Management</option>
                        <option value="billing">TheBilling.in - Billing Solution</option>
                        <option value="pharmacy">ThePharmacy - Pharmacy Management</option>
                        <option value="lab">TheLab - Laboratory Management</option>
                        <option value="dealership">Dealership Opportunity</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="pricing">Pricing Information</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-2 md:py-3 text-sm md:text-base" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    <p className="text-xs md:text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{" "}
                      <Link href="/terms" className="text-emerald-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-emerald-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-12 lg:py-24 bg-emerald-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white">Need Immediate Assistance?</h2>
              <p className="text-emerald-100 max-w-2xl mx-auto text-sm md:text-base px-4">
                For urgent inquiries or immediate support, don&apos;t hesitate to call us directly. Our team is ready to help
                you get started with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
                  <a href="tel:+919942000425">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-emerald-600 bg-transparent"
                  asChild
                >
                  <a href="mailto:thousandways.help@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-emerald-400" />
                <span className="ml-2 text-lg font-bold">Thousand Ways</span>
              </div>
              <p className="text-gray-300 text-sm">
                Transforming healthcare and business management with innovative software solutions.
              </p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>CIN: U62099BR2023PTC063443</p>
                <p>Registered in Bihar, India</p>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#products" className="text-gray-400 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Thousand Ways. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
