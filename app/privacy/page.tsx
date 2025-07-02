import Link from "next/link"
import { Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 1, 2024</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Thousand Ways (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you use our services,
                including TheHospital.in and TheBilling.in (collectively, the &quot;Services&quot;).
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access or use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold mb-3">2.1 Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name, email address, phone number, and contact information</li>
                <li>Account credentials (username and password)</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
                <li>Professional information (job title, organization, department)</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">2.2 Health Information (TheHospital.in)</h3>
              <p className="mb-4">
                For our hospital management system, we may process protected health information (PHI) and other
                sensitive medical data as necessary to provide our services. We handle all health information in
                accordance with applicable healthcare privacy laws and regulations.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.3 Business Information (TheBilling.in)</h3>
              <p className="mb-4">
                For our billing platform, we may collect business-related information including financial data, customer
                information, and transaction details necessary to provide billing and invoicing services.
              </p>

              <h3 className="text-xl font-semibold mb-3">2.4 Technical Information</h3>
              <p className="mb-4">We automatically collect certain technical information, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address, browser type, and operating system</li>
                <li>Device information and unique device identifiers</li>
                <li>Usage data and analytics (pages visited, time spent, features used)</li>
                <li>Log files and error reports</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide, operate, and maintain our Services</li>
                <li>Process transactions and manage billing</li>
                <li>Communicate with you about your account and our Services</li>
                <li>Provide customer support and technical assistance</li>
                <li>Improve and optimize our Services</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information. We may share your information in the following
                circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3">4.1 Service Providers</h3>
              <p className="mb-4">
                We may share information with trusted third-party service providers who assist us in operating our
                Services, such as cloud hosting providers, payment processors, and analytics services.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.2 Legal Requirements</h3>
              <p className="mb-4">
                We may disclose information if required by law, court order, or government regulation, or to protect our
                rights, property, or safety.
              </p>

              <h3 className="text-xl font-semibold mb-3">4.3 Business Transfers</h3>
              <p className="mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of
                the business transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational security measures to protect your information,
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mb-4">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to enhance your experience with our Services. Cookies
                are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze usage patterns and improve our Services</li>
                <li>Provide personalized content and features</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="mb-4">
                You can control cookie settings through your browser preferences, but disabling cookies may affect the
                functionality of our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
              <p className="mb-4">
                We retain your information for as long as necessary to provide our Services and fulfill the purposes
                outlined in this Privacy Policy. We may also retain information to comply with legal obligations,
                resolve disputes, and enforce our agreements.
              </p>
              <p className="mb-4">
                When we no longer need your information, we will securely delete or anonymize it in accordance with our
                data retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p className="mb-4">To exercise these rights, please contact us using the information provided below.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
              <p className="mb-4">
                Your information may be transferred to and processed in countries other than your country of residence.
                We ensure that such transfers comply with applicable data protection laws and implement appropriate
                safeguards to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Children&apos;s Privacy</h2>
              <p className="mb-4">
                Our Services are not intended for children under the age of 13. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected personal information from
                a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on our website and updating the &quot;Last updated&quot; date. Your continued use
                of our Services after such changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
              </p>
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
