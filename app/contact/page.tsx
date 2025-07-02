import Image from "next/image"
import Link from "next/link"
import { Building2, ArrowLeft, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Image src="/logo.jpeg" alt="Thousand Ways Logo" width={24} height={24} className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">Thousand Ways</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                Ready to transform your operations? Get in touch with us today to learn more about our solutions or
                schedule a demo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <p className="text-gray-600 mb-6">
                    We&apos;re here to help you streamline your operations with our innovative software solutions. Reach out
                    to us through any of the following channels:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                      <p className="text-gray-600">
                        Dariyapur, Bodh Gaya,
                        <br />
                        Bihar 824237, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <a href="tel:+919942000425" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        +91 9942000425
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <a
                        href="mailto:thousandways.help@gmail.com"
                        className="text-gray-600 hover:text-emerald-600 transition-colors"
                      >
                        thousandways.help@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                  <div className="space-y-1 text-gray-600">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="p-6">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your full name"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your mobile number"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your company or organization name"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us about your requirements, questions, or how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3">
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
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
        <section className="w-full py-12 md:py-24 bg-emerald-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-white">Need Immediate Assistance?</h2>
              <p className="text-emerald-100 max-w-2xl mx-auto">
                For urgent inquiries or immediate support, don&apos;t hesitate to call us directly. Our team is ready to help
                you get started with our solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="tel:+919942000425">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-emerald-600 bg-transparent"
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
