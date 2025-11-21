import { Mail, Twitter, Send, MessageCircle } from "lucide-react";
import rebellionLogo from "@/assets/rebellion-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,8%)] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={rebellionLogo} alt="Rebellion Logo" className="h-12 w-12" />
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Rebellion
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering artists through Web3 technology. Take control of your music career and connect directly with your fans.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#presale" className="text-gray-400 hover:text-primary transition-colors">
                  Join Presale
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <a 
              href="mailto:support@rebelliontoken.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              support@rebelliontoken.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Rebellion. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://twitter.com/rebelliontoken" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://t.me/rebelliontoken" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/rebelliontoken" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Discord"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
