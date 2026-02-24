import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      <div className="container relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-primary-foreground/20">
              <Sparkles className="h-4 w-4 text-accent" />
              AI-Powered Ad Creative Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create Stunning Ads <br />
              <span className="text-accent">10x Faster</span> with AI
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg mb-8">
              Generate high-converting ad creatives, launch campaigns across Meta, Google & TikTok, and optimize performance — all in one platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/pricing">
                  Start Free Trial <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/ai-image-generator">Try AI Generator</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-primary-foreground/50">
              <span>✓ No credit card required</span>
              <span>✓ 50 free credits</span>
              <span>✓ Cancel anytime</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-float">
              <img
                src={heroVisual}
                alt="CreatiAds AI ad creative generation platform showing multiple ad formats"
                className="w-full h-auto"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
