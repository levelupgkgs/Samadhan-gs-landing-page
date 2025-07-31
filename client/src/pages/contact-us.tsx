import { motion } from "framer-motion";
import Navigation from './../components/navigation';
import Footer from './../components/footer';

export default function ContactUs() {
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
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="text-lg text-slate-300 text-center mb-12"
          >
            We'd love to hear from you! Please reach out with any questions, feedback, or inquiries.
          </motion.p>

          <div className="bg-slate-800 rounded-lg shadow-xl p-8 mb-8 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                <p className="text-slate-300">
                  For general inquiries: <a href="mailto:samadhangsexam@gmail.com" className="text-blue-400 hover:underline">samadhangsexam@gmail.com</a>
                </p>
                <p className="text-slate-300">
                  For support: <a href="mailto:samadhangsexam@gmail.com" className="text-blue-400 hover:underline">samadhangsexam@gmail.com</a>
                </p>
                <p className="text-slate-300 mt-4">
                  To request user data deletion, please contact us at: <a href="mailto:samadhangsexam@gmail.com" className="text-blue-400 hover:underline">samadhangsexam@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
      <Footer />
    </>
  );
}
