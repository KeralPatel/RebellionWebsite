import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Enhanced Visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading with Enhanced Gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary leading-tight animate-fade-in drop-shadow-lg">
          Unleashing a Mobile and Crypto Revolution
        </h1>
        
        {/* Subheading with Subtle Glow */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-foreground drop-shadow-md">
          Rebellion Web3 Revolution
        </h2>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Empowering the USA and beyond with a $150-$200 mobile phone featuring eSIM, 
          decentralized app store, and comprehensive crypto capabilities powered by RBN.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => window.location.href = 'https://presale.rebelliontoken.com/'}
          >
            Join the Presale
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-8 py-6 h-auto"
            onClick={() => window.location.href = '/contact'}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};
