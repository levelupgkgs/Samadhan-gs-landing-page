import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
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
                Master Competitive Exams
              </motion.span>
              <br />
              <motion.span 
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                With Expert PDF Resources
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Crack UPSC, SSC, Banking, and other competitive exams with our comprehensive GK/GS PDF collection. 
              Read, favorite, and download thousands of expert-curated materials.
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
                <Button className="hero-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg hover:shadow-2xl transition-all duration-300">
                  Download for Android
                </Button>
              </motion.div>
              <Link href="/pdf-library">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="border-2 border-slate-600 px-8 py-4 rounded-xl text-white font-semibold text-lg hover:bg-slate-800 transition-all duration-300">
                    Browse PDF Library
                  </Button>
                </motion.div>
              </Link>
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
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Student studying for competitive exams with books and laptop" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div 
              className="absolute -top-8 -right-8 w-64 h-auto glass-effect border border-slate-700 rounded-2xl p-4 hidden lg:block"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600" 
                alt="Mobile app interface showing PDF books for competitive exam preparation" 
                className="rounded-xl w-full h-auto" 
              />
              <div className="mt-2 text-center">
                <p className="text-sm text-slate-300 font-medium">Samadhan GS App</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}