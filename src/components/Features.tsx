import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Video, 
  FileText, 
  MessageCircle, 
  TrendingUp, 
  Shield,
  Users,
  DollarSign,
  Sparkles,
  Palette,
  Ticket,
  PlayCircle,
  Lock as LockIcon
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Integrated eSIM Technology",
    description: "Seamlessly switch carriers and enjoy global roaming without physical SIMs, offering cost-effective connectivity worldwide."
  },
  {
    icon: Shield,
    title: "Proprietary Decentralized App Store",
    description: "Access a community-governed marketplace with 15,000+ apps. Purchase apps with RBN and shape the ecosystem through DAO voting."
  },
  {
    icon: DollarSign,
    title: "Lightning Network Wallet",
    description: "Execute rapid Bitcoin transactions with our integrated Lightning Network node, achieving sub-3-second transaction speeds."
  },
  {
    icon: TrendingUp,
    title: "On-Chain Tracking & BTC-to-Fiat",
    description: "Monitor your Bitcoin transactions in real-time and seamlessly convert BTC to fiat currencies with integrated conversion tools."
  },
  {
    icon: MessageCircle,
    title: "Peer-to-Peer Crypto Texting",
    description: "Send encrypted crypto messages via phone numbers using AES-256 encryption, revolutionizing secure communications."
  },
  {
    icon: Users,
    title: "Community DAO Governance",
    description: "Vote on app store content, phone features, and expansion markets. Shape the ecosystem's future with your RBN tokens."
  },
  {
    icon: Palette,
    title: "Multichain Interoperability",
    description: "Built on KXCO Armature blockchain with full EVM compatibility, supporting Ethereum, BSC, Polygon, and more for seamless cross-chain operations."
  },
  {
    icon: Video,
    title: "KXCO Web & Mobile Wallets",
    description: "Pre-installed secure wallets with biometric security and multi-signature support for managing RBN and Bitcoin."
  },
  {
    icon: Ticket,
    title: "Integrated DEX Trading",
    description: "Trade RBN tokens directly on the integrated KXCO decentralized exchange with real-time order matching and liquidity pools."
  },
  {
    icon: FileText,
    title: "Developer SDK & API",
    description: "Comprehensive development tools for integrating RBN payments and crypto features into your applications."
  },
  {
    icon: LockIcon,
    title: "Enterprise-Grade Security",
    description: "6,000 mAh battery, quad-core 2.0 GHz processor, 6GB RAM, and 128GB storage optimized for crypto operations."
  },
  {
    icon: PlayCircle,
    title: "High-Performance Network",
    description: "Supports 10,000 TPS with 99.9% uptime, scalable to 10 million daily users with distributed infrastructure."
  }
];

export const Features = () => {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            The Rebellion Mobile Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A cutting-edge mobile platform combining affordability, eSIM connectivity, decentralized apps, and comprehensive crypto features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group bg-gradient-to-br from-card to-card/50 backdrop-blur-sm hover:scale-105 relative overflow-hidden"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};