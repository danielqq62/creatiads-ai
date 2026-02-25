import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ImageIcon, Rocket, BarChart3 } from "lucide-react";
import workflowVisual from "@/assets/workflow-visual.png";

const steps = [
  {
    icon: ImageIcon,
    title: "AI Creative",
    desc: "Generate stunning ad images & videos with AI in seconds.",
    href: "/ai-image-generator",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Rocket,
    title: "AI Ads Publishing",
    desc: "One-click launch across Meta, Google & TikTok.",
    href: "/one-click-ad-launch",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "AI Ads Running",
    desc: "Automated optimization for maximum ROAS 24/7.",
    href: "/ai-ad-optimization",
    color: "bg-primary/10 text-primary",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The AI Ad <span className="text-gradient-accent">Closed Loop</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From creative to campaign to optimization — one seamless AI workflow.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14"
        >
          <img
            src={workflowVisual}
            alt="AI Creative → Ad Publishing → Ad Optimization closed-loop workflow"
            className="w-full rounded-2xl shadow-card"
          />
        </motion.div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                to={s.href}
                className="group block bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 h-full text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-4`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Step 0{i + 1}</span>
                <h3 className="font-display font-bold text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
