import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "AI Image Generation", creatiads: true, canva: true, adCreative: true },
  { feature: "AI Video Generation", creatiads: true, canva: false, adCreative: true },
  { feature: "One-Click Ad Launch", creatiads: true, canva: false, adCreative: false },
  { feature: "Multi-Platform Automation", creatiads: true, canva: false, adCreative: false },
  { feature: "AI Ad Optimization", creatiads: true, canva: false, adCreative: false },
  { feature: "Free Tools & Calculators", creatiads: true, canva: false, adCreative: false },
  { feature: "Starting Price", creatiads: "$0/mo", canva: "$13/mo", adCreative: "$29/mo" },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-sm font-medium">{value}</span>;
  return value ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />;
}

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient-accent">CreatiAds</span>?
          </h2>
          <p className="text-muted-foreground text-lg">See how we stack up against the competition.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-xl border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="p-4 font-bold text-primary">CreatiAds</th>
                    <th className="p-4 font-semibold text-muted-foreground">Canva</th>
                    <th className="p-4 font-semibold text-muted-foreground">AdCreative.ai</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : ""}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center"><CellValue value={row.creatiads} /></td>
                      <td className="p-4 text-center"><CellValue value={row.canva} /></td>
                      <td className="p-4 text-center"><CellValue value={row.adCreative} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
