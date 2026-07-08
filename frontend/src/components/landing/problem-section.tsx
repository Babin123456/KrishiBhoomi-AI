"use client";

import {
  CloudRain,
  Bug,
  Droplets,
  Sprout,
  TrendingDown,
  HelpCircle,
  Thermometer,
  Layers,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, StaggerContainer, StaggerItem, GlassCard } from "@/components/shared";

const problems = [
  {
    icon: CloudRain,
    title: "Unpredictable Rainfall",
    description: "Erratic monsoons destroy crops, with farmers unable to predict optimal sowing and harvesting windows.",
    stat: "33% of crops",
    impact: "lost to erratic weather annually",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
  },
  {
    icon: Bug,
    title: "Crop Diseases",
    description: "Late detection of plant diseases leads to massive yield losses and increased pesticide costs.",
    stat: "20-40% yield",
    impact: "lost to undetected diseases",
    color: "text-danger-500",
    bgColor: "bg-danger-500/10",
  },
  {
    icon: Droplets,
    title: "Water Scarcity",
    description: "Groundwater depletion and inefficient irrigation waste precious water resources across farmlands.",
    stat: "60% of water",
    impact: "wasted through flood irrigation",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
  },
  {
    icon: Sprout,
    title: "Incorrect Crop Selection",
    description: "Farmers grow unsuitable crops for their soil and climate, resulting in poor yields and financial losses.",
    stat: "45% of farmers",
    impact: "choose sub-optimal crops",
    color: "text-krishi-500",
    bgColor: "bg-krishi-500/10",
  },
  {
    icon: TrendingDown,
    title: "Low Market Prices",
    description: "Without market intelligence, farmers sell at the lowest prices, missing opportunities for better returns.",
    stat: "25-40% less",
    impact: "income due to poor market timing",
    color: "text-earth-600",
    bgColor: "bg-earth-500/10",
  },
  {
    icon: HelpCircle,
    title: "Lack of Expert Guidance",
    description: "Rural farmers have limited access to agronomists and agricultural scientists for timely advice.",
    stat: "1 expert per",
    impact: "10,000+ farmers in rural India",
    color: "text-warm-500",
    bgColor: "bg-warm-500/10",
  },
  {
    icon: Thermometer,
    title: "Climate Uncertainty",
    description: "Rising temperatures, heat waves, and cold snaps make traditional farming knowledge unreliable.",
    stat: "1.5 C rise",
    impact: "in average temperatures since 1950",
    color: "text-danger-400",
    bgColor: "bg-danger-400/10",
  },
  {
    icon: Layers,
    title: "Soil Degradation",
    description: "Excessive chemical fertilizers and monocropping deplete soil nutrients, reducing long-term productivity.",
    stat: "30% of arable",
    impact: "land is degraded in India",
    color: "text-earth-700",
    bgColor: "bg-earth-700/10",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper id="problems" className="relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <ScrollReveal>
        <SectionHeader
          badge="The Challenge"
          title="Real Problems Faced by"
          titleHighlight="Indian Farmers"
          description="Over 150 million farming families face critical challenges that technology can solve. Understanding these problems is the first step toward building meaningful solutions."
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <GlassCard
              hover
              className="p-6 h-full group relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${problem.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`w-6 h-6 ${problem.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {problem.description}
                </p>

                {/* Impact stat */}
                <div className="pt-4 border-t border-border/50">
                  <div className={`text-xl font-bold ${problem.color}`}>
                    {problem.stat}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {problem.impact}
                  </div>
                </div>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
