import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Upload, Sparkles, Image as ImageIcon, Video, Layers, BookOpen, Eye, EyeOff } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/home/FAQSection";
import demoCreative1 from "@/assets/demo-creative-1.jpg";
import demoCreative2 from "@/assets/demo-creative-2.jpg";
import demoCreative3 from "@/assets/demo-creative-3.jpg";

interface ToolPageProps {
  title: string;
  description: string;
  icon?: string;
}

const creativeNavCategories = [
  {
    title: "AI Creative",
    icon: Sparkles,
    items: [
      { label: "AI Image Generator", href: "/ai-image-generator" },
      { label: "AI Video Generator", href: "/ai-video-generator" },
      { label: "Creative Templates", href: "/creative-templates" },
      { label: "Ad Creative Library", href: "/ad-creative-library" },
    ],
  },
  {
    title: "AI Models",
    icon: Layers,
    items: [
      { label: "Sora", href: "/sora" },
      { label: "Kling", href: "/kling" },
      { label: "Seedance", href: "/seedance" },
      { label: "Nano Banana", href: "/nano-banana" },
    ],
  },
  {
    title: "AI Ads",
    icon: Eye,
    items: [
      { label: "One Click Ad Launch", href: "/one-click-ad-launch" },
      { label: "AI Ad Optimization", href: "/ai-ad-optimization" },
      { label: "Meta Ads Automation", href: "/meta-ads-automation" },
      { label: "Google Ads Automation", href: "/google-ads-automation" },
      { label: "TikTok Ads Automation", href: "/tiktok-ads-automation" },
    ],
  },
];

const aiModels = ["Midjourney", "DALL·E 3", "Stable Diffusion XL", "Sora", "Kling"];
const resolutions = ["1:1 (1024×1024)", "16:9 (1920×1080)", "9:16 (1080×1920)", "4:3 (1024×768)", "3:4 (768×1024)"];

export default function ToolPage({ title, description, icon = "✨" }: ToolPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState(aiModels[0]);
  const [resolution, setResolution] = useState(resolutions[0]);
  const [numOutputs, setNumOutputs] = useState(1);
  const [isPublic, setIsPublic] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const location = useLocation();

  const credits = numOutputs * 8;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex">
        {/* Left: Collapsible Sidebar Navigation */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-r bg-card overflow-hidden shrink-0 hidden md:block"
            >
              <div className="w-[240px] p-4 space-y-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <Link to="/" className="font-display font-bold text-sm">
                    <span className="text-primary">Creati</span><span className="text-accent">Ads</span>
                  </Link>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-muted transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                {creativeNavCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <cat.icon className="h-3.5 w-3.5" />
                      {cat.title}
                    </p>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            to={item.href}
                            className={`block w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                              location.pathname === item.href
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
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

          {/* Middle: Prompt Form */}
          <div className="w-full lg:w-[400px] xl:w-[440px] shrink-0 p-6 border-r overflow-y-auto">
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{icon}</span>
                <h1 className="text-xl font-bold">{title}</h1>
              </div>

              <div className="space-y-5">
                {/* Model Selection */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">AI Model</label>
                  <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {aiModels.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Reference Image Upload */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Reference Images <span className="text-muted-foreground font-normal">(max 5)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {uploadedImages.map((img, i) => (
                      <div key={i} className="w-16 h-16 rounded-lg border bg-secondary/50 flex items-center justify-center overflow-hidden">
                        <ImageIcon className="h-6 w-6 text-primary/40" />
                      </div>
                    ))}
                    {uploadedImages.length < 5 && (
                      <button
                        onClick={() => setUploadedImages([...uploadedImages, "placeholder"])}
                        className="w-16 h-16 rounded-lg border-2 border-dashed border-primary/30 flex flex-col items-center justify-center hover:bg-secondary/50 transition-colors"
                      >
                        <Upload className="h-4 w-4 text-primary/50" />
                        <span className="text-[10px] text-muted-foreground mt-0.5">Upload</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Prompt Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium">Prompt</label>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> AI Generate
                    </button>
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the ad creative you want to generate..."
                    className="w-full min-h-[120px] rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                  />
                </div>

                {/* Resolution */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Resolution</label>
                  <select
                    value={resolution}
                    onChange={(e) => setResolution(e.target.value)}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {resolutions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Number of Outputs */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Number of Outputs</label>
                  <select
                    value={numOutputs}
                    onChange={(e) => setNumOutputs(Number(e.target.value))}
                    className="w-full rounded-lg border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Public Visibility Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Public Visibility</span>
                  <button
                    onClick={() => setIsPublic(!isPublic)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${isPublic ? "bg-primary" : "bg-muted"}`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm transition-transform ${isPublic ? "translate-x-5" : ""}`} />
                  </button>
                </div>

                {/* Credits Display */}
                <div className="bg-secondary/50 rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Credits Cost</span>
                  <span className="font-display font-bold text-primary">{credits} credits</span>
                </div>

                {/* Generate Button */}
                <button className="w-full bg-accent-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-md text-sm">
                  Generate
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right: Result Preview */}
          <div className="flex-1 p-6 lg:p-8 bg-muted/30 overflow-y-auto">
            <motion.div
              key={title + "-preview"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {prompt ? (
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Generated Results</h3>
                  <div className="bg-card rounded-lg border p-6 shadow-card">
                    <p className="text-sm text-muted-foreground italic">
                      AI results will appear here after generation...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Example Showcase */}
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 text-gradient-accent">Reference Examples</h3>
                    <p className="text-sm text-muted-foreground mb-4">See what you can create with {title}</p>
                  </div>

                  {/* Example prompt + output */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Example Prompt</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          A minimalist sneaker advertisement with neon blue and orange accents, floating product shot on gradient background, modern typography, social media ad format.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Generated Output</h4>
                        <img
                          src={demoCreative1}
                          alt="AI-generated sneaker ad creative"
                          className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div>
                    <h4 className="font-semibold mb-3">More Examples</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <img
                        src={demoCreative2}
                        alt="AI-generated perfume ad creative"
                        className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                      />
                      <img
                        src={demoCreative3}
                        alt="AI-generated food delivery ad creative"
                        className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* How it works */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <h4 className="font-semibold mb-3">How to Use {title}</h4>
                    <ol className="text-sm text-muted-foreground space-y-3 list-decimal list-inside">
                      <li>Select an AI model and upload reference images (optional)</li>
                      <li>Write a detailed prompt describing your desired ad creative</li>
                      <li>Choose resolution and number of outputs</li>
                      <li>Click <strong>Generate</strong> and review your results</li>
                      <li>Download, edit, or regenerate as needed</li>
                    </ol>
                  </div>

                  {/* Tips card */}
                  <div className="bg-secondary/50 rounded-xl border p-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" /> Pro Tips
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Be specific about colors, style, and composition</li>
                      <li>• Upload reference images for style consistency</li>
                      <li>• Try different models for varied aesthetic results</li>
                      <li>• Generate multiple outputs to compare options</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
