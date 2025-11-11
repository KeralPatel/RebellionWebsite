import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import faqBg from "@/assets/faq-bg.jpg";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Rebellion Token (RBN)?",
      answer: "RBN is a transformative utility token designed to finance and power a $150-$200 mobile phone ecosystem for the USA market with global expansion plans. The phone features integrated eSIM, a proprietary decentralized app store, and comprehensive crypto capabilities including Lightning Network wallets and peer-to-peer crypto texting.",
    },
    {
      question: "What is the total token supply and distribution?",
      answer: "Total supply is 15 billion RBN tokens. Distribution: 20% Presale (3B), 30% Development & Operations (4.5B), 10% Team & Advisors (1.5B), 15% Marketing (2.25B), 15% Reserve Fund (2.25B), and 10% Community Rewards (1.5B). The initial circulating supply is 3 billion RBN (20% at launch).",
    },
    {
      question: "What are the presale details?",
      answer: "The presale offers 2.4 billion RBN tokens at 0.008 USD per token (20% discount from the 0.01 USD listing price), targeting a raise of USD 19.2 million. 50% of tokens are locked for 6 months, 25% for 12 months, and 25% are immediately liquid. The expected listing price is 0.01 USD with a market cap of USD 150 million at launch.",
    },
    {
      question: "What blockchain technology does Rebellion use?",
      answer: "Rebellion is built on the KXCO Armature blockchain with Proof-of-Authority (PoA) consensus, delivering 10,000 TPS. It features full multichain interoperability via EVM compatibility, supporting Ethereum, Binance Smart Chain, Polygon, and other networks for seamless cross-chain operations.",
    },
    {
      question: "What are the key features of the Rebellion phone?",
      answer: "The phone includes: Integrated eSIM for global connectivity, proprietary decentralized app store (15,000+ apps), Lightning Network wallet for rapid Bitcoin transactions, on-chain BTC tracking, BTC-to-fiat conversion, peer-to-peer crypto texting, quad-core 2.0 GHz processor, 6GB RAM, 128GB storage, 6.7-inch Full HD+ display, and 6,000 mAh battery.",
    },
    {
      question: "How does the DAO governance work?",
      answer: "RBN holders can vote on app store offerings, phone enhancements, and expansion markets through our decentralized autonomous organization (DAO). This ensures the community shapes the ecosystem's direction and maintains a user-driven innovation approach.",
    },
    {
      question: "What is the token utility?",
      answer: "RBN powers ecosystem transactions including in-app purchases, eSIM plans, and crypto services. Holders receive a 15% discount on phone purchases and services, can stake tokens for 5-10% annual rewards, and participate in DAO governance. A 1% transaction fee burn mechanism reduces supply to support price growth.",
    },
    {
      question: "When will the phone launch?",
      answer: "The presale launches in Q1 2026 with phone prototype and crypto wallet integration. The app store beta and DEX listing are planned for Q3 2026, with the full USA market launch. Global expansion follows in Q4 2026 and beyond.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${faqBg})` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm text-primary px-6 py-3 rounded-full mb-6 border border-primary/20">
            <HelpCircle className="h-5 w-5" />
            <span className="text-sm font-bold">Got Questions?</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Rebellion and our presale
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-primary/20 rounded-xl bg-card/80 backdrop-blur-sm px-6 hover:border-primary/40 transition-all duration-300 data-[state=open]:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
