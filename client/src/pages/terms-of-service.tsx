import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsOfService() {
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
            Terms of Service
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-slate-300 text-center mb-12"
          >
            Please read these Terms of Service carefully before using our website and services.
          </motion.p>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">2. Use License</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Samadhan GS's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on Samadhan GS's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
              <p>
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Samadhan GS at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="2xl font-bold text-white mb-6">3. Disclaimer</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The materials on Samadhan GS's website are provided on an 'as is' basis. Samadhan GS makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p>
                Further, Samadhan GS does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">4. Limitations</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                In no event shall Samadhan GS or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Samadhan GS's website, even if Samadhan GS or a Samadhan GS authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
