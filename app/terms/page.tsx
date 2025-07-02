import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Building2 className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-lg font-bold">Thousand Ways</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#products">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#contact">
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Thousand Ways ("Company", "we", "us", or "our"),
                including TheHospital.in and TheBilling.in (collectively, the "Services"), you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="mb-4">Thousand Ways provides software solutions including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  <strong>TheHospital.in:</strong> A comprehensive hospital management system for healthcare facilities
                </li>
                <li>
                  <strong>TheBilling.in:</strong> An advanced billing and invoice management platform for businesses
                </li>
              </ul>
              <p className="mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="mb-4">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and complete information when creating an account</li>
                <li>Maintain the security of your account credentials</li>
                <li>Use the Services in compliance with all applicable laws and regulations</li>
                <li>Not use the Services for any unlawful or prohibited activities</li>
                <li>Not attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Not interfere with or disrupt the Services or servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property Rights</h2>
              <p className="mb-4">
                All content, features, and functionality of our Services, including but not limited to text, graphics,
                logos, icons, images, audio clips, and software, are the exclusive property of Thousand Ways and are
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of our content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
              <p className="mb-4">
                For paid Services, you agree to pay all fees and charges incurred in connection with your account. All
                fees are non-refundable unless otherwise stated. We reserve the right to change our pricing at any time
                with reasonable notice.
              </p>
              <p className="mb-4">
                Failure to pay fees may result in suspension or termination of your access to the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Data Security and Privacy</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your data. However, no method of transmission over
                the Internet or electronic storage is 100% secure. While we strive to protect your personal information,
                we cannot guarantee its absolute security.
              </p>
              <p className="mb-4">
                Please refer to our Privacy Policy for detailed information about how we collect, use, and protect your
                data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="mb-4">
                To the maximum extent permitted by law, Thousand Ways shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to loss of profits, data, use,
                goodwill, or other intangible losses.
              </p>
              <p className="mb-4">
                Our total liability to you for all claims arising from or relating to the Services shall not exceed the
                amount paid by you to us in the twelve (12) months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your account and access to the Services immediately, without prior notice or
                liability, for any reason, including if you breach these Terms.
              </p>
              <p className="mb-4">
                You may terminate your account at any time by contacting us. Upon termination, your right to use the
                Services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                its conflict of law provisions. Any disputes arising from these Terms or the Services shall be subject
                to the exclusive jurisdiction of the courts in Bihar, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the new Terms on our website. Your continued use of the Services after such modifications
                constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
              <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <strong>Thousand Ways</strong>
                </p>
                <p>CIN: U62099BR2023PTC063443</p>
                <p>Dariyapur, Bodh Gaya, Bihar 824237, India</p>
                <p>Phone: +91 9942000425</p>
                <p>Email: thousandways.help@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© 2024 Thousand Ways. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <Link className="text-xs text-gray-400 hover:text-emerald-400 transition-colors" href="/terms">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-400 hover:text-emerald-400 transition-colors" href="/privacy">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
