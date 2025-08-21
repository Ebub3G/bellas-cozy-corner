
import { Coffee, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="h-8 w-8" />
            <span className="text-2xl font-serif font-bold">Bella's Café</span>
          </div>
          
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Brewing happiness one cup at a time since 2014. Thank you for being part of our coffee-loving community.
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-sm text-white/60">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current" />
            <span>by Bella's Café Team</span>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2024 Bella's Café. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
