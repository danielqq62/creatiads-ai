import { motion } from "framer-motion";
import { ImageIcon, Video, Wand2, Zap, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: ImageIcon,
    title: "AI Image Generator",
    description: "Create stunning ad visuals in seconds with AI. No design skills needed.",
    color: "text-primary",
  },
  {
    icon: Video,
    title: "AI Video Generator",
    description: "Generate scroll-stopping video ads from text prompts or product URLs.",
    color: "text-accent",
  },
  {
    icon: Wand2,
    title: "Creative Templates",
    description: "1000+ proven ad templates optimized for every platform and format.",
    color: "text-primary",
  },
  {
    icon: Zap,
    title: "One Click Ad Launch",
    description: "Launch campaigns across Meta, Google, and TikTok with a single click.",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "AI Ad Optimization",
    description: "Automatically optimize bids, budgets, and targeting for maximum ROAS.",
    color: "text-primary",
  },
  {
    icon: Globe,
    title: "Multi-Platform Automation",
    description: "Manage all your ad accounts from one unified dashboard.",
    color: "text-accent",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureCards() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-gradient-primary">Win at Ads</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From creative generation to campaign optimization, CreatiAds handles the entire ad lifecycle.
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 ${f.color}`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
