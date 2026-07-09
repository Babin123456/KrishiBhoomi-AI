"use client";

import { Check, X } from "lucide-react";

import { SectionWrapper, SectionHeader, ScrollReveal, GlassCard } from "@/components/shared";

const comparisons = [
  {
    aspect: "Crop Selection",
    traditional: "Based on habit and neighbor advice",
    ai: "AI-analyzed soil, weather, and market data",
    improvement: "30% better yield",
  },
  {
    aspect: "Disease Detection",
    traditional: "Visual inspection, often too late",
    ai: "Instant CNN-based diagnosis from phone photo",
    improvement: "2 weeks earlier",
  },
  {
    aspect: "Weather Response",
    traditional: "React after damage occurs",
    ai: "Proactive AI alerts with action plans",
    improvement: "40% less crop loss",
  },
  {
    aspect: "Water Usage",
    traditional: "Flood irrigation on fixed schedule",
    ai: "Precision scheduling based on real-time data",
    improvement: "40% water saved",
  },
  {
    aspect: "Market Timing",
    traditional: "Sell immediately after harvest",
    ai: "AI predicts optimal selling window",
    improvement: "25% higher income",
  },
  {
    aspect: "Expert Access",
    traditional: "Rare visits from extension officers",
    ai: "24/7 AI copilot in 11 languages",
    improvement: "Always available",
  },
];

export function ComparisonSection() {
  return (
    <SectionWrapper>
      <ScrollReveal>
        <SectionHeader
          badge="Why KrishiBhoomi AI"
          title="Traditional Farming vs"
          titleHighlight="AI-Powered Farming"
          description="See the measurable impact of AI-driven agricultural intelligence compared to traditional farming methods."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 mb-4 px-4">
            <div className="text-sm font-semibold text-foreground">Aspect</div>
            <div className="text-sm font-semibold text-danger-500 flex items-center gap-1.5">
              <X className="w-4 h-4" /> Traditional
            </div>
            <div className="text-sm font-semibold text-krishi-500 flex items-center gap-1.5">
              <Check className="w-4 h-4" /> KrishiBhoomi AI
            </div>
            <div className="text-sm font-semibold text-foreground text-right">Impact</div>
          </div>

          {/* Rows */}
          <div className="space-y-2">
            {comparisons.map((row, i) => (
              <ScrollReveal key={row.aspect} delay={i * 0.08}>
                <GlassCard className="p-4 hover:scale-[1.01] transition-transform duration-200">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="text-sm font-medium text-foreground">
                      {row.aspect}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {row.traditional}
                    </div>
                    <div className="text-xs text-foreground font-medium">
                      {row.ai}
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-krishi-600 dark:text-krishi-400 px-2 py-1 rounded-full bg-krishi-500/10">
                        {row.improvement}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
