import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Tokenomics } from "@/components/Tokenomics";
import { Roadmap } from "@/components/Roadmap";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="tokenomics">
        <Tokenomics />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  );
};

export default Index;