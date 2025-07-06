"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  Shield,
  Users,
  Zap,
  Phone,
  Mail,
  Pill,
  Package,
  AlertTriangle,
  FlaskConical,
  TestTube,
  BarChart3,
  CheckCircle,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

import { TheHospitalLogo, TheBillingLogo } from "@/components/the-hospital-logo"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b relative">
        <Link className="flex items-center justify-center" href="#">
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-14 left-0 right-0 bg-white border-b shadow-lg py-4 px-4 lg:hidden z-50">
            <div className="flex flex-col gap-4">
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="#products"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="#features"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                className="text-sm font-medium hover:text-emerald-600" 
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-12 lg:py-24 xl:py-32 bg-gradient-to-br from-emerald-50 to-teal-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                  Transforming Healthcare & Business
                  <span className="text-emerald-600"> Management</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl dark:text-gray-400 px-4">
                  Thousand Ways delivers cutting-edge software solutions for hospitals and businesses. Streamline
                  operations, enhance patient care, and optimize billing processes with our innovative platforms.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 w-full sm:w-auto px-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 w-full sm:w-auto" asChild>
                  <Link href="#products">
                    Explore Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Our Products</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl mt-4 px-4">
                Comprehensive solutions designed to meet the unique needs of healthcare and business sectors.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {/* TheHospital.in */}
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2">
                    <TheHospitalLogo className="h-8 w-8" />
                    <CardTitle className="text-lg md:text-xl">TheHospital.in</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Complete Hospital Management System</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      A comprehensive healthcare management platform designed to streamline hospital operations, patient
                      care, and administrative processes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Patient Management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Appointment Scheduling</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Electronic Health Records</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">HIPAA Compliant</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="https://thehospital.in" target="_blank">
                        Visit TheHospital.in
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* TheBilling.in */}
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2">
                    <TheBillingLogo className="h-8 w-8" />
                    <CardTitle className="text-lg md:text-xl">TheBilling.in</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Advanced Billing & Invoice Management</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      Powerful billing solution that automates invoicing, payment processing, and financial reporting
                      for businesses of all sizes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Zap className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Automated Invoicing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Payment Processing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Financial Reporting</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Secure & Compliant</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href="https://thebilling.in" target="_blank">
                        Visit TheBilling.in
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* ThePharmacy Software */}
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2">
                    <Pill className="h-8 w-8 text-green-500 flex-shrink-0" />
                    <CardTitle className="text-lg md:text-xl">ThePharmacy</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Complete Pharmacy Management System</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      Comprehensive pharmacy management solution for inventory control, prescription management, and
                      regulatory compliance.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Inventory Management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FileText className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Prescription Tracking</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Expiry Management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Regulatory Compliance</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* TheLab Software */}
              <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-2">
                    <FlaskConical className="h-8 w-8 text-purple-500 flex-shrink-0" />
                    <CardTitle className="text-lg md:text-xl">TheLab</CardTitle>
                  </div>
                  <CardDescription className="text-sm">Advanced Laboratory Information System</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">
                      Modern laboratory management system for test processing, result management, and quality control
                      workflows.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <TestTube className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Test Management</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <BarChart3 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Result Processing</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">Quality Control</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">NABL Compliant</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-8 md:py-12 lg:py-24 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Why Choose Thousand Ways?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 text-sm md:text-base lg:text-xl mt-4 px-4">
                We combine innovation, reliability, and user-centric design to deliver exceptional software solutions.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4 p-4">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500 text-sm md:text-base">
                  Optimized performance ensures your operations run smoothly without delays.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-4">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Secure & Compliant</h3>
                <p className="text-gray-500 text-sm md:text-base">Enterprise-grade security with full compliance to industry standards.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-4">
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">24/7 Support</h3>
                <p className="text-gray-500 text-sm md:text-base">Round-the-clock customer support to ensure your success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-8 md:py-12 lg:py-24">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">About Thousand Ways</h2>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                  Founded with a vision to revolutionize healthcare and business management, Thousand Ways has been at
                  the forefront of developing innovative software solutions that make a real difference.
                </p>
                <p className="text-gray-500 text-sm md:text-base lg:text-lg">
                  Our team of experienced developers, healthcare professionals, and business experts work together to
                  create platforms that not only meet current needs but anticipate future challenges.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-emerald-600">100+</div>
                    <div className="text-sm text-gray-500">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-xl md:text-2xl font-bold text-emerald-600">99.9%</div>
                    <div className="text-sm text-gray-500">Uptime</div>
                  </div>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src="/main.jpeg"
                    alt="Thousand Ways team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book Demo Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experience Our Software <span className="text-emerald-600">Live</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                See how our solutions can transform your operations. Book a personalized demo with our experts and
                discover the power of our healthcare and business management platforms.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
              {/* Demo Benefits */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">What You&apos;ll Get in Your Demo</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Personalized Walkthrough</h4>
                      <p className="text-gray-600">
                        Our experts will tailor the demo to your specific industry needs and use cases.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Zap className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Live Feature Demonstration</h4>
                      <p className="text-gray-600">
                        See real-time functionality of patient management, billing, inventory, and reporting features.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <FileText className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Custom Use Cases</h4>
                      <p className="text-gray-600">
                        We&apos;ll show you how our software handles your specific workflows and requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Security & Compliance Overview</h4>
                      <p className="text-gray-600">
                        Learn about our security measures, data protection, and regulatory compliance features.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Q&A Session</h4>
                      <p className="text-gray-600">
                        Get answers to all your questions about implementation, pricing, and ongoing support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Booking Form */}
              <Card className="p-6 shadow-lg">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-center">Book Your Free Demo</CardTitle>
                  <CardDescription className="text-center">
                    Choose your preferred time and we&apos;ll reach out to schedule your personalized demonstration.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="demo-first-name" className="text-sm font-medium">
                          First Name *
                        </label>
                        <input
                          id="demo-first-name"
                          name="firstName"
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="John"
                        />
                      </div>

                    <div className="space-y-2">
                      <label htmlFor="demo-phone" className="text-sm font-medium">
                        Phone Number *
                      </label>
                      <input
                        id="demo-phone"
                        name="phone"
                        type="tel"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="+91 9876543210"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="demo-organization" className="text-sm font-medium">
                        Organization/Hospital Name *
                      </label>
                      <input
                        id="demo-organization"
                        name="organization"
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Your Hospital/Company Name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="demo-product" className="text-sm font-medium">
                        Product Interest *
                      </label>
                      <select
                        id="demo-product"
                        name="product"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select a product</option>
                        <option value="hospital">TheHospital.in - Hospital Management</option>
                        <option value="billing">TheBilling.in - Billing Solution</option>
                        <option value="pharmacy">ThePharmacy - Pharmacy Management</option>
                        <option value="lab">TheLab - Laboratory Management</option>
                        <option value="multiple">Multiple Products</option>
                        <option value="all">Complete Suite</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="demo-time" className="text-sm font-medium">
                        Preferred Demo Time
                      </label>
                      <select
                        id="demo-time"
                        name="preferredTime"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9 AM - 12 PM)</option>
                        <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                        <option value="evening">Evening (4 PM - 7 PM)</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="demo-requirements" className="text-sm font-medium">
                        Specific Requirements or Questions
                      </label>
                      <textarea
                        id="demo-requirements"
                        name="requirements"
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Tell us about your specific needs, current challenges, or any particular features you'd like to see..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule My Free Demo
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Demo sessions typically last 10-15 minutes. We&apos;ll contact you within 24 hours to confirm your
                      preferred time slot.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Demo Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600">150+</div>
                <div className="text-sm text-gray-500">Demos Conducted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">95%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">10 min</div>
                <div className="text-sm text-gray-500">Average Demo Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">12 hrs</div>
                <div className="text-sm text-gray-500">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Dealership Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our <span className="text-emerald-600">Dealership Network</span>
                </h2>
                <p className="text-gray-500 md:text-lg">
                  Expand your business with Thousand Ways dealership opportunities. Partner with us to offer
                  cutting-edge healthcare and business management solutions to your clients.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Comprehensive training and support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Attractive commission structure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Marketing and sales support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Exclusive territory rights</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/contact">
                      Apply for Dealership
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="lg:pl-8">
                <Image
                  src="/tw-1.jpg"
                  alt="Dealership opportunities"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Transform Your Operations?
                </h2>
                <p className="mx-auto max-w-[600px] text-emerald-100 md:text-xl">
                  Join hundreds of satisfied customers who have streamlined their processes with our solutions.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-emerald-600 bg-transparent"
                  asChild
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                Ready to transform your operations? Contact us today to learn more about our solutions or schedule a
                demo.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-emerald-100 rounded-full">
                  <Building2 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-600">
                  Dariyapur, Bodh Gaya,
                  <br />
                  Bihar 824237, India
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-emerald-100 rounded-full">
                  <Phone className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a href="tel:+919942000425" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  +91 9942000425
                </a>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-emerald-100 rounded-full">
                  <Mail className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:thousandways.help@gmail.com"
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  thousandways.help@gmail.com
                </a>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/contact">
                  Send us a Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container px-4 mx-auto md:px-6">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <Building2 className="h-5 w-5 md:h-6 md:w-6 text-emerald-400" />
                <span className="ml-2 text-base md:text-lg font-bold">Thousand Ways</span>
              </div>
              <p className="text-gray-300 text-sm md:text-base">
                Transforming healthcare and business management with innovative software solutions.
              </p>
              <div className="text-xs md:text-sm text-gray-400 space-y-1">
                <p>GSIN: 10AAKCT1747Q1ZZ</p>
                <p>CIN: U62099BR2023PTC063443</p>
                <p>Registered in Bihar, India</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Contact Us</h3>
              <div className="space-y-2 text-sm md:text-base text-gray-300">
                <div className="flex items-start space-x-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:thousandways.help@gmail.com" className="hover:text-emerald-400 transition-colors">
                    thousandways.help@gmail.com
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+919942000425" className="hover:text-emerald-400 transition-colors">
                    +91 9942000425
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="font-medium">Address:</span>
                  <div>
                    Dariyapur, Bodh Gaya,
                    <br />
                    Bihar 824237, India
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Our Products</h3>
              <div className="space-y-2 text-sm md:text-base">
                <Link
                  href="https://thehospital.in"
                  target="_blank"
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  TheHospital.in
                </Link>
                <Link
                  href="https://thebilling.in"
                  target="_blank"
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  TheBilling.in
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  ThePharmacy
                </Link>
                <Link href="#" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  TheLab
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2 text-sm md:text-base">
                <Link href="#products" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  Products
                </Link>
                <Link href="#features" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  Features
                </Link>
                <Link href="#about" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs md:text-sm text-gray-400">© {new Date().getFullYear()} Thousand Ways. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs md:text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs md:text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="text-xs md:text-sm text-gray-400 hover:text-emerald-400 transition-colors" href="#">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
