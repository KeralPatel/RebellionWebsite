import { CheckCircle, Circle } from "lucide-react";
import roadmapBg from "@/assets/roadmap-bg.jpg";

export const Roadmap = () => {
  const phases = [
    {
      quarter: "Q1 2026",
      title: "Presale Launch",
      items: [
        { text: "Presale Launch with 20% discount (0.008 USD per token)", completed: false },
        { text: "Target raise: USD 19.2 million from 2.4 billion tokens", completed: false },
        { text: "Phone prototype development ($150-$200 range)", completed: false },
        { text: "eSIM integration with global carrier support", completed: false },
        { text: "Crypto wallet (app & web) integration with biometric security", completed: false },
      ],
    },
    {
      quarter: "Q3 2026",
      title: "Platform Beta & DEX Listing",
      items: [
        { text: "App store beta launch (decentralized P2P platform, 15,000 app capacity)", completed: false },
        { text: "Token listing on DEX (e.g., Uniswap) at 0.01 USD", completed: false },
        { text: "Market cap target: USD 150 million at launch", completed: false },
        { text: "Lightning Network integration for rapid Bitcoin transactions", completed: false },
        { text: "DAO governance activation for community voting", completed: false },
      ],
    },
    {
      quarter: "Q4 2026",
      title: "USA Market Launch",
      items: [
        { text: "Phone launch in USA market with full eSIM functionality", completed: false },
        { text: "Proprietary decentralized app store live with RBN payments", completed: false },
        { text: "KXCO DEX integration for token trading", completed: false },
        { text: "Enhanced Bitcoin features: on-chain tracking, BTC-to-fiat conversions", completed: false },
        { text: "Peer-to-peer crypto texting via encrypted SMS", completed: false },
      ],
    },
    {
      quarter: "2027+",
      title: "Global Expansion",
      items: [
        { text: "International market expansion beyond USA", completed: false },
        { text: "Multichain interoperability (Ethereum, BSC, Polygon)", completed: false },
        { text: "Scale to 10 million daily users", completed: false },
        { text: "Continuous innovation in crypto-mobile ecosystem", completed: false },
        { text: "Community-driven feature development through DAO", completed: false },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${roadmapBg})` }}
      />
      
      {/* Animated Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Roadmap
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our strategic journey to deliver an affordable mobile revolution powered by crypto and blockchain
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-[calc(50%-3rem)] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/40">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-primary mb-1">{phase.quarter}</div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          {item.completed ? (
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${item.completed ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-[0_0_20px_rgba(239,68,68,0.5)] z-10" />
                
                {/* Spacer */}
                <div className="hidden lg:block w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
