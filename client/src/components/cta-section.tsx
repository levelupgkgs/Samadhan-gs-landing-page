import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

export default function CTASection() {
  const handleDownload = () => {
    // This would redirect to actual app store
    console.log("Download button clicked");
  };

  const QRCodePattern = () => (
    <div className="w-20 h-20 bg-white rounded grid grid-cols-8 grid-rows-8 gap-px p-1">
      {[
        1,1,1,0,0,1,1,1,
        1,0,1,0,0,1,0,1,
        1,0,1,1,1,1,0,1,
        0,0,0,1,1,0,0,0,
        0,0,0,1,1,0,0,0,
        1,0,1,1,1,1,0,1,
        1,0,1,0,0,1,0,1,
        1,1,1,0,0,1,1,1
      ].map((cell, index) => (
        <div 
          key={index} 
          className={`${cell ? 'bg-black' : 'bg-white'} rounded-sm`}
        />
      ))}
    </div>
  );

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
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                onClick={handleDownload}
                className="hero-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center"
                >
                  <Smartphone className="w-6 h-6 mr-2" />
                  Download for Android
                </motion.div>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="border-2 border-slate-600 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:bg-slate-800 transition-all duration-300"
              >
                View All Features
              </Button>
            </motion.div>
          </motion.div>

          {/* App store badges and QR code */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={handleDownload}
              className="flex items-center gap-2 bg-slate-800 px-6 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <Smartphone className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-left">
                <div className="text-xs text-slate-400">Get it on</div>
                <div className="text-sm font-semibold text-white">Google Play</div>
              </div>
            </motion.button>
            
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
                <QRCodePattern />
              </motion.div>
              <p className="text-xs text-slate-400 mt-2 text-center">Scan to Download</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}