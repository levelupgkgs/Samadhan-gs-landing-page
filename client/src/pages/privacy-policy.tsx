import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-slate-300 text-center mb-12"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                We collect information to provide better services to all our users. The types of information we collect include:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>Personal Information:</strong> This includes your name, email address, phone number, and other contact details you provide when you register, subscribe to our services, or contact us.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect information about how you interact with our website and services, such as pages visited, time spent on pages, and features used.
                </li>
                <li>
                  <strong>Device Information:</strong> We may collect information about the device you use to access our services, including IP address, browser type, operating system, and unique device identifiers.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
            <div className="space-y-4 text-slate-300">
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>To provide, maintain, and improve our services.</li>
                <li>To personalize your experience and deliver content relevant to your interests.</li>
                <li>To communicate with you, respond to your inquiries, and send you updates.</li>
                <li>To analyze usage patterns and trends to enhance our website and services.</li>
                <li>To detect, prevent, and address technical issues and security vulnerabilities.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">3. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                We do not share your personal information with third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>
                  <strong>With Your Consent:</strong> We may share your information when we have your explicit consent to do so.
                </li>
                <li>
                  <strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to valid requests by public authorities (e.g., a court order or government request).
                </li>
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party vendors, consultants, and other service providers who perform services on our behalf and require access to such information to do so.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">4. Data Security</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
