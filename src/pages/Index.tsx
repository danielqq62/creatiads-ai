import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import FeatureDeepDive from "@/components/home/FeatureDeepDive";
import FeatureCards from "@/components/home/FeatureCards";
import WorkflowSection from "@/components/home/WorkflowSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
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
        <FeatureDeepDive />
        <FeatureCards />
        <WorkflowSection />
        <ShowcaseSection />
        <UseCasesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
