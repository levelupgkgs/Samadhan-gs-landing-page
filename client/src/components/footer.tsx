import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoImage from "@assets/WhatsApp Image 2025-07-30 at 9.57.51 PM-min_1753983356448.webp";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-white/10 backdrop-blur-sm">
                <img 
                  src={logoImage} 
                  alt="Samadhan GS Logo" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <span className="text-xl font-bold text-white">Samadhan GS</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Your trusted companion for competitive exam preparation. Master GK/GS with our comprehensive PDF library and crack your dream exam.
            </p>
            <div className="flex space-x-4">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection("features")}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("testimonials")}
                  className="hover:text-white transition-colors"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("download")}
                  className="hover:text-white transition-colors"
                >
                  Download
                </button>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Exam Categories</h3>
            <ul className="space-y-2 text-slate-300">
              <li><button className="hover:text-white transition-colors">UPSC</button></li>
              <li><button className="hover:text-white transition-colors">SSC</button></li>
              <li><button className="hover:text-white transition-colors">Banking</button></li>
              <li><button className="hover:text-white transition-colors">Railway</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Samadhan GS. All rights reserved. | <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | <a href="/terms-of-service" className="hover:underline">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
}
