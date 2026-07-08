"use client";

import {
  Brain,
  CloudSun,
  Microscope,
  Satellite,
  ArrowRight,
  Sprout,
  Droplets,
  TrendingUp,
  Bug,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, StaggerContainer, StaggerItem, GlassCard } from "@/components/shared";

const solutions = [
  {
    problem: "Incorrect Crop Selection",
    problemIcon: Sprout,
    aiTech: "XGBoost ML Model",
    solution: "Smart Crop Recommendation",
    outcome: "Optimal crop for your soil, weather, and market conditions",
    benefit: "Up to 30% increase in yield and profit",
    color: "from-krishi-500 to-krishi-600",
  },
  {
    problem: "Unpredictable Weather",
    problemIcon: CloudSun,
    aiTech: "Weather AI + Gemini",
    solution: "Weather Intelligence Engine",
    outcome: "7-day forecasts with AI-powered farming recommendations",
    benefit: "Reduce weather-related crop losses by 40%",
    color: "from-sky-500 to-sky-600",
  },
  {
    problem: "Late Disease Detection",
    problemIcon: Bug,
    aiTech: "EfficientNet CNN + Gemini",
    solution: "Instant Disease Detection",
    outcome: "Snap a photo, get diagnosis in seconds with treatment plan",
    benefit: "Detect diseases 2 weeks earlier than manual inspection",
    color: "from-danger-500 to-warm-500",
  },
  {
    problem: "Water Wastage",
    problemIcon: Droplets,
    aiTech: "Irrigation AI Model",
    solution: "Smart Irrigation Planning",
    outcome: "Precise water scheduling based on soil, weather, and crop needs",
    benefit: "Save up to 40% water with better irrigation timing",
    color: "from-sky-400 to-sky-500",
  },
  {
    problem: "No Satellite Access",
    problemIcon: Satellite,
    aiTech: "Sentinel-2 NDVI Analysis",
    solution: "Satellite Crop Monitoring",
    outcome: "Track field health from space with vegetation indices",
    benefit: "Monitor 100% of farmland without physical visits",
    color: "from-earth-500 to-earth-600",
  },
  {
    problem: "Low Market Returns",
    problemIcon: TrendingUp,
    aiTech: "Price Prediction AI",
    solution: "Market Intelligence System",
    outcome: "Real-time prices, predictions, and best selling windows",
    benefit: "Increase farmer income by 20-35%",
    color: "from-earth-400 to-earth-500",
  },
];

export function SolutionSection() {
  return (
    <SectionWrapper id="solutions" className="relative bg-muted/30">
      <ScrollReveal>
        <SectionHeader
          badge="Our Solution"
          title="AI That Transforms"
          titleHighlight="Every Decision"
          description="KrishiBhoomi AI replaces guesswork with data-driven intelligence, solving each farming challenge with purpose-built AI models."
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item) => (
          <StaggerItem key={item.solution}>
            <GlassCard hover className="p-6 h-full group">
              <div className="flex flex-col h-full">
                {/* Problem → Solution flow */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-danger-500/10 flex items-center justify-center shrink-0">
                    <item.problemIcon className="w-5 h-5 text-danger-400" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.solution}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {item.outcome}
                </p>

                {/* Tech badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {item.aiTech}
                  </span>
                </div>

                {/* Benefit */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-semibold text-krishi-600 dark:text-krishi-400">
                    {item.benefit}
                  </p>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
