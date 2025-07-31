import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone, BookOpen } from "lucide-react";
import { Link } from "wouter";

export default function CTASection() {
  const handleDownload = () => {
    // This would redirect to actual app store
    console.log("Download button clicked");
  };


  return (
    <section id="download" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-primary/20 rounded-full blur-lg"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-lg"
        animate={{ 
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Ready to</span>
            <br />
            <motion.span 
              className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Crack Your Dream Exam?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Join 50,000+ successful candidates who chose Samadhan GS for their competitive exam preparation. 
            Download now and start your journey to success.
          </motion.p>

          {/* App store badges and QR code */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://play.google.com/store/apps/details?id=com.gs.samadhan" target="_blank" rel="noopener noreferrer">
              <motion.img 
                src="/GooglePlay.webp" 
                alt="Get it on Google Play" 
                className="h-12 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              />
            </a>
            
            {/* QR Code */}
            <motion.div 
              className="glass-effect border border-slate-700 p-4 rounded-lg"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img src="/frame.webp" alt="QR Code to Download App" className="w-32 h-48 object-cover" />
              </motion.div>
              <p className="text-xs text-slate-400 mt-2 text-center">Scan to Download</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
