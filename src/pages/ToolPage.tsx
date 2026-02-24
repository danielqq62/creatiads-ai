import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/home/FAQSection";

interface ToolPageProps {
  title: string;
  description: string;
  icon?: string;
}

export default function ToolPage({ title, description, icon = "✨" }: ToolPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-16 lg:py-24">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="text-4xl mb-4 animate-bounce-gentle inline-block">{icon}</div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mb-8">{description}</p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Try It Free <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Interactive demo area */}
        <section className="py-16 container">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Try {title}</h2>
              <div className="space-y-4">
                <textarea
                  placeholder="Enter your product description, brand details, or paste a URL..."
                  className="w-full min-h-[160px] rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                />
                <button className="bg-accent-gradient text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-md">
                  Generate
                </button>
              </div>
            </motion.div>

            {/* Output preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">Output Preview</h2>
              <div className="bg-muted/50 rounded-xl border-2 border-dashed border-primary/20 p-8 text-center min-h-[200px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">🎬</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Generated results will appear here
                </p>
                <p className="text-muted-foreground/60 text-xs mt-1">
                  Demo video coming soon
                </p>
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
