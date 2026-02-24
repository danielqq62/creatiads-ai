import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface ToolCategory {
  title: string;
  items: { label: string; href: string }[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "AI Creative",
    items: [
      { label: "AI Image Generator", href: "/ai-image-generator" },
      { label: "AI Video Generator", href: "/ai-video-generator" },
      { label: "Creative Templates", href: "/creative-templates" },
    ],
  },
  {
    title: "Ad Copy Tools",
    items: [
      { label: "Ad Headline Generator", href: "/free-tools" },
      { label: "TikTok Hook Generator", href: "/free-tools" },
      { label: "UGC Ad Script Generator", href: "/free-tools" },
      { label: "CTA Generator", href: "/free-tools" },
      { label: "Product Ad Copy Generator", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Performance Tools",
    items: [
      { label: "ROAS Calculator", href: "/free-tools" },
      { label: "CTR Calculator", href: "/free-tools" },
      { label: "Break-Even ROAS Calculator", href: "/free-tools" },
      { label: "Ad Budget Allocator", href: "/free-tools" },
    ],
  },
  {
    title: "AI Prompt Tools",
    items: [
      { label: "Image Prompt Generator", href: "/free-tools" },
      { label: "Video Prompt Generator", href: "/free-tools" },
      { label: "Prompt Optimizer", href: "/free-tools" },
      { label: "Reverse Prompt Generator", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Optimization",
    items: [
      { label: "Ad Hook Analyzer", href: "/free-tools" },
      { label: "Headline Emotion Analyzer", href: "/free-tools" },
      { label: "CTA Strength Analyzer", href: "/free-tools" },
      { label: "Ad Fatigue Analyzer", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Intelligence",
    items: [
      { label: "Competitor Ad Analyzer", href: "/free-tools" },
      { label: "Ad Inspiration Finder", href: "/free-tools" },
      { label: "Ad Trend Analyzer", href: "/free-tools" },
    ],
  },
];

export default function FreeTools() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState("Ad Headline Generator");
  const [prompt, setPrompt] = useState("");
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-r bg-card overflow-hidden shrink-0 hidden md:block"
            >
              <div className="w-[280px] p-4 space-y-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-sm">Tools</h3>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-muted transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                {toolCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{cat.title}</p>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <button
                            onClick={() => setSelectedTool(item.label)}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                              selectedTool === item.label
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
          {/* Toggle sidebar when collapsed */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="hidden md:flex items-center justify-center w-10 border-r bg-card hover:bg-muted transition-colors shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          {/* Input area */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col">
            <motion.div
              key={selectedTool}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedTool}</h1>
              <p className="text-muted-foreground mb-6">
                Enter your details below and let AI generate results for you.
              </p>
              <div className="space-y-4 max-w-xl">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={`Describe your product or enter details for ${selectedTool}...`}
                  className="w-full min-h-[140px] rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                />
                <button className="bg-accent-gradient text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-md">
                  Generate
                </button>
              </div>
            </motion.div>
          </div>

          {/* Preview / Result area */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l p-6 lg:p-8 bg-muted/30">
            <motion.div
              key={selectedTool + "-preview"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display font-semibold text-lg mb-4">Preview</h3>
              {prompt ? (
                <div className="bg-card rounded-lg border p-6 shadow-card">
                  <p className="text-sm text-muted-foreground italic">
                    AI results will appear here after generation...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-card rounded-lg border p-6 shadow-card">
                    <h4 className="font-semibold mb-2">About {selectedTool}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Use our AI-powered {selectedTool.toLowerCase()} to create professional results in seconds. 
                      Simply enter your product details or description and let the AI do the work.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg border p-6 shadow-card">
                    <h4 className="font-semibold mb-2">How it works</h4>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Enter your product or brand details</li>
                      <li>Select your preferences and tone</li>
                      <li>Click Generate to get AI-powered results</li>
                      <li>Copy, edit, or regenerate as needed</li>
                    </ol>
                  </div>
                  {/* Demo placeholder */}
                  <div className="bg-secondary/50 rounded-lg border-2 border-dashed border-primary/20 p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Demo video/GIF coming soon</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
