import { Link, useLocation } from "react-router-dom";
import rebellionLogo from "@/assets/rebellion-logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={rebellionLogo} 
              alt="Rebellion Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {location.pathname === "/" ? (
              <>
                <a 
                  href="#home" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </a>
                <a 
                  href="#tokenomics" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Tokenomics
                </a>
                <a 
                  href="#roadmap" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Roadmap
                </a>
                <a 
                  href="/Rebellion_Token_Whitepaper.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Whitepaper
                </a>
                <Link 
                  to="/contact" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </Link>
                <a 
                  href="/Rebellion_Token_Whitepaper.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  Whitepaper
                </a>
                <Link 
                  to="/contact" 
                  className={`text-foreground hover:text-primary transition-colors font-medium ${
                    location.pathname === "/contact" ? "text-primary" : ""
                  }`}
                >
                  Contact
                </Link>
              </>
            )}
            <Link to="/presale">
              <Button variant="hero" size="default">
                Launch App
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {location.pathname === "/" ? (
                  <>
                    <a 
                      href="#home" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </a>
                    <a 
                      href="#features" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Features
                    </a>
                    <a 
                      href="#tokenomics" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Tokenomics
                    </a>
                    <a 
                      href="#roadmap" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Roadmap
                    </a>
                    <a 
                      href="/Rebellion_Token_Whitepaper.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Whitepaper
                    </a>
                    <Link 
                      to="/contact" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/" 
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </Link>
                    <a 
                      href="/Rebellion_Token_Whitepaper.pdf" 
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      Whitepaper
                    </a>
                    <Link 
                      to="/contact" 
                      onClick={() => setOpen(false)}
                      className={`text-lg font-medium transition-colors ${
                        location.pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      Contact
                    </Link>
                  </>
                )}
                <Link to="/presale" onClick={() => setOpen(false)}>
                  <Button variant="hero" size="lg" className="w-full">
                    Launch App
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
