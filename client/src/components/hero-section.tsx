import { motion } from "framer-motion";
import { Button } from './ui/button';
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Master on GK/GS for Government exam
              </motion.span>
              <br />
              <motion.span 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                With Expert Resources
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Get upto 90% direct question of GK/GS in all MCQ based Government exams like SSC, Railway, Police, State PCS (pre), State and Central one day exam. Read and practice the complete syllabus of GK/GS.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="hero-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => {
                    // Check if user is on mobile or tablet
                    const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    
                    if (isMobileOrTablet) {
                      // Direct link to Play Store or App Store
                      const isAndroid = /Android/i.test(navigator.userAgent);
                      const playStoreUrl = "https://play.google.com/store/apps/details?id=com.samadhangs.app";
                      const appStoreUrl = "https://apps.apple.com/app/samadhan-gs/id123456789";
                      
                      window.open(isAndroid ? playStoreUrl : appStoreUrl, '_blank');
                    } else {
                      // On desktop, scroll to download section
                      const element = document.getElementById("download");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }}
                >
                  Download for Android
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-8 flex items-center justify-center lg:justify-start gap-8 text-sm text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>50,000+ Downloads</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>4.8★ Rating</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>10,000+ PDFs</span>
              </motion.div>
            </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="/govtlogo-min.webp" 
              alt="Student studying for competitive exams with books and laptop" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
