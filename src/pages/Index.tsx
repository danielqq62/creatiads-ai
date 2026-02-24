import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeatureCards from "@/components/home/FeatureCards";
import LogoCloud from "@/components/home/LogoCloud";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <LogoCloud />
        <FeatureCards />
        <HowItWorksSection />
        <UseCasesSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
