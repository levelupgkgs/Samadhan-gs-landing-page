import { Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react";

export default function Topbar() {
  return (
    <div className="hidden md:block bg-slate-900/95 border-b border-slate-800/50 py-3 fixed top-0 left-0 right-0 z-40 h-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="text-slate-300">
            Follow us for exam updates and preparation tips
          </div>
          <div className="flex space-x-4">
            <a 
              href="http://facebook.com/samadhangsexam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a 
              href="https://x.com/samadhan_gs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Twitter className="w-4 h-4" />
              <span>X</span>
            </a>
            <a 
              href="https://www.instagram.com/samadhangs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/@SamadhanGS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </a>
            <a 
              href="https://t.me/samadhangs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}