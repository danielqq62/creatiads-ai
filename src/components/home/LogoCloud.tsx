import { motion } from "framer-motion";

const logos = [
  "Shopify", "Meta", "Google", "TikTok", "Amazon", "Stripe", "Notion", "Figma"
];

export default function LogoCloud() {
  return (
    <section className="py-16 bg-background border-y">
      <div className="container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          Trusted by 10,000+ advertisers and brands worldwide
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-lg font-display font-semibold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-200"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
