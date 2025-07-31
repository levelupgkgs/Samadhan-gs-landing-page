import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from './ui/button';
import { Menu, X, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "../../../attached_assets/WhatsApp Image 2025-07-30 at 9.57.51 PM-min_1753983356448.webp";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // If we're not on the home page, navigate to home first
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // Add a small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleDownloadClick = () => {
    setIsMenuOpen(false);
    
    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Direct link to Play Store or App Store
      const isAndroid = /Android/i.test(navigator.userAgent);
      const playStoreUrl = "https://play.google.com/store/apps/details?id=com.samadhangs.app";
      const appStoreUrl = "https://apps.apple.com/app/samadhan-gs/id123456789";
      
      window.open(isAndroid ? playStoreUrl : appStoreUrl, '_blank');
    } else {
      // On desktop, scroll to download section
      if (location !== "/") {
        window.location.href = "/#download";
      } else {
        setTimeout(() => {
          const element = document.getElementById("download");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    }
  };

  return (
    <motion.nav 
      ref={menuRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-800 md:top-12"
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
                className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={logoImage} 
                  alt="Samadhan GS Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
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
                onClick={handleDownloadClick}
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
              className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-slate-900/95 border-b border-slate-700/50 py-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-4 px-6">
                {location === "/" ? (
                  <>
                    <motion.button 
                      onClick={() => scrollToSection("features")}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Features
                    </motion.button>
                    <motion.button 
                      onClick={() => scrollToSection("testimonials")}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reviews
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = "/blog";
                      }}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Exam Analysis
                    </motion.button>
                  </>
                ) : (
                  <>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = "/";
                      }}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Home
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = "/syllabus";
                      }}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Syllabus
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setIsMenuOpen(false);
                        window.location.href = "/blog";
                      }}
                      className="text-slate-200 hover:text-white transition-colors text-left py-2 px-3 rounded-lg hover:bg-slate-800/50 w-full"
                      whileHover={{ x: 10, color: "#ffffff" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Blog
                    </motion.button>
                  </>
                )}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-2"
                >
                  <Button 
                    className="hero-gradient w-full shadow-lg"
                    onClick={handleDownloadClick}
                  >
                    Download
                  </Button>
                </motion.div>
                
                {/* Social Media Links in Mobile Menu */}
                <div className="flex justify-center space-x-6 pt-4 border-t border-slate-700/50 mt-4">
                  <a 
                    href="http://facebook.com/samadhangsexam" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://x.com/samadhan_gs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/samadhangs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@SamadhanGS" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://t.me/samadhangs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
