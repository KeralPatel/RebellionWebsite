import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-8 border border-primary/20 shadow-lg">
            <Globe className="h-5 w-5" />
            <span className="text-sm font-bold">Multichain Interoperability • Global Impact</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Join the Mobile Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Rebellion Token is more than cryptocurrency—it's the catalyst for a mobile revolution. 
            Be part of the presale and shape the future of affordable mobile technology with integrated crypto capabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero"
              className="text-lg px-8 py-6 h-auto"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <p className="mt-8 text-muted-foreground">
            Contact us at{" "}
            <a 
              href="mailto:Peter@rebelliontoken.com" 
              className="text-primary hover:underline font-semibold"
            >
              Peter@rebelliontoken.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};