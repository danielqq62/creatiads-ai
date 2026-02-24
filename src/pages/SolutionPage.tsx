import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/home/FAQSection";

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  useCases: string[];
}

const solutionsData: Record<string, SolutionData> = {
  "e-commerce": {
    title: "E-commerce",
    subtitle: "Supercharge your online store ads",
    description: "Generate product-focused ad creatives that convert shoppers into buyers. CreatiAds understands e-commerce and creates scroll-stopping visuals for your products.",
    features: ["Product image enhancement", "Dynamic ad creative generation", "Multi-format support (carousel, video, static)", "Automated A/B testing"],
    useCases: ["Product launches", "Seasonal campaigns", "Retargeting creatives", "Brand awareness"],
  },
  dropshipping: {
    title: "Dropshipping",
    subtitle: "Test products faster with AI ads",
    description: "Launch and test dropshipping products at lightning speed. Generate ads from product URLs and automate campaigns across platforms.",
    features: ["URL-to-ad generation", "Rapid creative testing", "Budget optimization", "Winning ad identification"],
    useCases: ["Product testing", "Scaling winners", "Multi-product campaigns", "International expansion"],
  },
  "app-marketing": {
    title: "App Marketing",
    subtitle: "Drive installs with AI-powered creatives",
    description: "Create compelling app install ads that showcase your app's value proposition and drive high-quality downloads.",
    features: ["App store screenshot ads", "Video preview generation", "Install campaign automation", "ROAS optimization"],
    useCases: ["App launches", "User acquisition", "Re-engagement campaigns", "Feature announcements"],
  },
  agencies: {
    title: "Agencies",
    subtitle: "Scale creative output for all your clients",
    description: "Manage multiple client accounts from one platform. Generate on-brand creatives and automate campaigns for every client.",
    features: ["Multi-client workspace", "Brand kit management", "White-label reports", "Team collaboration"],
    useCases: ["Client onboarding", "Monthly creative refreshes", "Cross-platform campaigns", "Performance reporting"],
  },
  "generate-more-creatives": {
    title: "Generate More Creatives",
    subtitle: "Never run out of fresh ad ideas",
    description: "Use AI to generate hundreds of unique ad variations in minutes. Test more, learn faster, and find your winning creative.",
    features: ["Bulk creative generation", "Style variations", "Copy alternatives", "Format adaptation"],
    useCases: ["Creative testing at scale", "Fighting ad fatigue", "Seasonal refreshes", "A/B testing"],
  },
  "launch-ads-faster": {
    title: "Launch Ads Faster",
    subtitle: "From idea to live ad in minutes",
    description: "Eliminate the creative bottleneck. Generate ads and launch campaigns across platforms with a single click.",
    features: ["One-click launch", "Auto-formatted creatives", "Campaign templates", "Instant preview"],
    useCases: ["Time-sensitive promotions", "Flash sales", "Trending content", "Competitor response"],
  },
  "scale-ads-automatically": {
    title: "Scale Ads Automatically",
    subtitle: "Let AI handle the optimization",
    description: "Automatically scale winning campaigns, pause underperformers, and reallocate budgets for maximum ROAS.",
    features: ["Auto-scaling rules", "Budget reallocation", "Performance alerts", "Predictive optimization"],
    useCases: ["Campaign scaling", "Budget optimization", "Multi-market expansion", "Performance management"],
  },
};

export default function SolutionPage({ slug }: { slug: string }) {
  const data = solutionsData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Solution not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-20 lg:py-28">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">Solutions</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
              <p className="text-xl text-primary-foreground/70 mb-6">{data.subtitle}</p>
              <p className="text-primary-foreground/60 max-w-2xl mb-8">{data.description}</p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features + Use Cases */}
        <section className="py-20 container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {data.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
              <div className="grid grid-cols-2 gap-3">
                {data.useCases.map((uc) => (
                  <div
                    key={uc}
                    className="bg-card rounded-lg border p-4 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
                  >
                    <p className="text-sm font-medium">{uc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
