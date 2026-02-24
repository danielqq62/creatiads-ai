import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import FreeTools from "./pages/FreeTools";
import Blog from "./pages/Blog";
import SolutionPage from "./pages/SolutionPage";
import ToolPage from "./pages/ToolPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const toolPages = [
  { path: "ai-image-generator", title: "AI Image Generator", description: "Generate stunning ad images from text prompts. Create scroll-stopping visuals for every platform in seconds.", icon: "🎨" },
  { path: "ai-video-generator", title: "AI Video Generator", description: "Create professional video ads from text descriptions or product URLs. No editing skills required.", icon: "🎬" },
  { path: "creative-templates", title: "Creative Templates", description: "Browse 1000+ proven ad templates optimized for Meta, Google, and TikTok campaigns.", icon: "📐" },
  { path: "ad-creative-library", title: "Ad Creative Library", description: "Organize, manage, and reuse your best-performing ad creatives in one place.", icon: "📚" },
  { path: "sora", title: "Sora AI Video", description: "Leverage OpenAI's Sora model to create cinematic video ads that captivate your audience.", icon: "🌀" },
  { path: "kling", title: "Kling AI", description: "Generate hyper-realistic AI video content for your advertising campaigns.", icon: "⚡" },
  { path: "seedance", title: "Seedance", description: "Create dynamic dance and movement videos for engaging social media ads.", icon: "💃" },
  { path: "nano-banana", title: "Nano Banana", description: "Fast, lightweight AI creative generation for rapid ad testing and iteration.", icon: "🍌" },
  { path: "one-click-ad-launch", title: "One Click Ad Launch", description: "Launch ads across Meta, Google, and TikTok with a single click. From creative to live campaign in minutes.", icon: "🚀" },
  { path: "ai-ad-optimization", title: "AI Ad Optimization", description: "Let AI automatically optimize your bids, budgets, and targeting for maximum ROAS.", icon: "📈" },
  { path: "meta-ads-automation", title: "Meta Ads Automation", description: "Automate your Facebook and Instagram ad campaigns with AI-powered creative and bidding.", icon: "📘" },
  { path: "google-ads-automation", title: "Google Ads Automation", description: "Scale your Google Ads with automated creative generation and performance optimization.", icon: "🔍" },
  { path: "tiktok-ads-automation", title: "TikTok Ads Automation", description: "Create viral TikTok ads and automate campaign management for maximum reach.", icon: "🎵" },
];

const solutionSlugs = [
  "e-commerce", "dropshipping", "app-marketing", "agencies",
  "generate-more-creatives", "launch-ads-faster", "scale-ads-automatically",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/free-tools" element={<FreeTools />} />
          <Route path="/blog" element={<Blog />} />
          {toolPages.map((tool) => (
            <Route
              key={tool.path}
              path={`/${tool.path}`}
              element={<ToolPage title={tool.title} description={tool.description} icon={tool.icon} />}
            />
          ))}
          {solutionSlugs.map((slug) => (
            <Route key={slug} path={`/${slug}`} element={<SolutionPage slug={slug} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
