import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const Presale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-15T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent shadow-elegant animate-float">
            <Rocket className="w-12 h-12 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Coming Soon
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            The Rebellion Token presale is launching soon. Secure your RBN tokens at 0.008 USD (20% discount) and be part of the mobile crypto revolution.
          </p>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-elegant">
              <Clock className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">20% Presale Discount</h3>
              <p className="text-sm text-muted-foreground">
                Get RBN tokens at 0.008 USD vs 0.01 USD listing price
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-elegant">
              <Rocket className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">USD 150M Market Cap</h3>
              <p className="text-sm text-muted-foreground">
                Target market cap of USD 150 million at launch
              </p>
            </div>

            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all hover:shadow-elegant">
              <Bell className="w-10 h-10 text-primary mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">USD 19.2M Target Raise</h3>
              <p className="text-sm text-muted-foreground">
                Funding $150-$200 phone with eSIM & crypto features
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground">
              Want to be notified when we launch?
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-6 text-lg"
            >
              Get Notified
            </Button>
          </div>

          {/* Countdown */}
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border shadow-elegant">
            <p className="text-sm text-muted-foreground mb-2">Launching in</p>
            <p className="text-lg font-semibold text-primary mb-6">November 15, 2025</p>
            <div className="flex justify-center items-center gap-2 md:gap-4">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds }
              ].map((item, index) => (
                <>
                  <div key={item.label} className="text-center">
                    <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {item.label}
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="text-3xl md:text-5xl font-bold text-primary/50 mb-8">
                      :
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Presale;
