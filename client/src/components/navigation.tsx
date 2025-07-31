import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-bold text-sm">S</span>
              </motion.div>
              <span className="text-xl font-bold text-white">Samadhan GS</span>
            </motion.div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {location === "/" ? (
              <>
                <motion.button 
                  onClick={() => scrollToSection("features")}
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Features
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-slate-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reviews
                </motion.button>
                <Link href="/blog">
                  <motion.span 
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Exam Analysis
                  </motion.span>
                </Link>
              </>
            ) : (
              <>
                <Link href="/">
                  <motion.span 
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </motion.span>
                </Link>
                <Link href="/syllabus">
                  <motion.span 
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Syllabus
                  </motion.span>
                </Link>
                <Link href="/blog">
                  <motion.span 
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Blog
                  </motion.span>
                </Link>
              </>
            )}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="hero-gradient hover:shadow-lg transition-all duration-300"
                onClick={() => scrollToSection("download")}
              >
                Download
              </Button>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.button 
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 180 }}
                  exit={{ rotate: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 180 }}
                  animate={{ rotate: 0 }}
                  exit={{ rotate: 180 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 glass-effect border-b border-slate-800 py-4"
            >
              <div className="flex flex-col space-y-4 px-4">
                <motion.button 
                  onClick={() => scrollToSection("features")}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  whileHover={{ x: 10, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Features
                </motion.button>
                <motion.button 
                  onClick={() => scrollToSection("testimonials")}
                  className="text-slate-300 hover:text-white transition-colors text-left"
                  whileHover={{ x: 10, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reviews
                </motion.button>
                <Link href="/blog">
                  <motion.span 
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer text-left"
                    whileHover={{ x: 10, color: "#ffffff" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Exam Analysis
                  </motion.span>
                </Link>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="hero-gradient w-full"
                    onClick={() => scrollToSection("download")}
                  >
                    Download
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
