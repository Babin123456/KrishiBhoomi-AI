"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  CloudSun,
  Droplets,
  Microscope,
  Satellite,
  Mic,
  TrendingUp,
  MessageSquare,
  ChevronRight,
  Cpu,
  Zap,
  Shield,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, StaggerContainer, StaggerItem, GlassCard } from "@/components/shared";

const features = [
  {
    icon: Sprout,
    title: "Smart Crop Recommendation",
    description: "AI-powered crop selection using soil analysis, weather patterns, and market trends for maximum yield and profit.",
    tech: ["XGBoost", "SHAP", "Gemini"],
    details: "Analyzes 12+ parameters including soil NPK, pH, rainfall, temperature, and market demand to recommend the most suitable crop with confidence scores and risk assessment.",
    color: "text-krishi-500",
    bgColor: "bg-krishi-500/10",
    gradient: "from-krishi-500/20 to-krishi-600/20",
  },
  {
    icon: CloudSun,
    title: "Weather Intelligence",
    description: "Real-time weather monitoring with AI-generated farming advisories for optimal agricultural decisions.",
    tech: ["OpenWeather", "Gemini", "Time Series"],
    details: "Integrates with weather APIs to provide hyperlocal 7-day forecasts, heat/cold wave alerts, frost predictions, and AI-generated action items like 'Delay fertilizer application' or 'Harvest early'.",
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    gradient: "from-sky-500/20 to-sky-600/20",
  },
  {
    icon: Droplets,
    title: "Irrigation Intelligence",
    description: "Precision water management that reduces waste and optimizes crop hydration through AI analysis.",
    tech: ["ML Model", "Weather API", "Soil Sensors"],
    details: "Calculates exact water requirements based on soil moisture, crop growth stage, weather forecast, and groundwater levels. Saves up to 40% water through smart scheduling.",
    color: "text-sky-400",
    bgColor: "bg-sky-400/10",
    gradient: "from-sky-400/20 to-sky-500/20",
  },
  {
    icon: Microscope,
    title: "Disease Detection",
    description: "Instant crop disease identification from photos using computer vision with detailed treatment plans.",
    tech: ["EfficientNet", "CNN", "Gemini"],
    details: "Upload a photo of affected crops and get instant diagnosis including disease name, severity, cause, organic and chemical treatments, recovery timeline, and preventive measures.",
    color: "text-danger-500",
    bgColor: "bg-danger-500/10",
    gradient: "from-danger-500/20 to-warm-500/20",
  },
  {
    icon: Satellite,
    title: "Satellite Monitoring",
    description: "Space-based crop health monitoring using NDVI, EVI, and vegetation indices from Sentinel-2 imagery.",
    tech: ["Sentinel-2", "NDVI", "GIS"],
    details: "Track vegetation health, moisture stress, and growth patterns across your entire farm from satellite data. Compare historical trends and identify problem areas early.",
    color: "text-earth-600",
    bgColor: "bg-earth-600/10",
    gradient: "from-earth-500/20 to-earth-600/20",
  },
  {
    icon: Mic,
    title: "Voice Assistant",
    description: "Multilingual AI assistant supporting 11 Indian languages for natural voice-based farming queries.",
    tech: ["Whisper", "Gemini", "TTS"],
    details: "Speak in Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, Odia, or English. Get AI-powered answers about farming, weather, and government schemes.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    gradient: "from-purple-500/20 to-purple-600/20",
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time crop prices, predictions, and selling recommendations from nearby mandis and markets.",
    tech: ["Price AI", "Forecasting", "Analytics"],
    details: "Track crop prices across mandis, get AI-powered price predictions, demand trends, and optimal selling recommendations to maximize farmer income.",
    color: "text-earth-500",
    bgColor: "bg-earth-500/10",
    gradient: "from-earth-400/20 to-earth-500/20",
  },
  {
    icon: MessageSquare,
    title: "AI Farm Copilot",
    description: "Conversational AI assistant powered by RAG and Gemini for personalized farming guidance.",
    tech: ["Gemini", "FAISS", "RAG"],
    details: "Ask anything about farming — from fertilizer recommendations to government schemes. Powered by a curated agricultural knowledge base with Retrieval-Augmented Generation for accurate, cited answers.",
    color: "text-krishi-600",
    bgColor: "bg-krishi-600/10",
    gradient: "from-krishi-600/20 to-krishi-700/20",
  },
];

export function FeaturesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="features" className="relative">
      <ScrollReveal>
        <SectionHeader
          badge="8 AI Modules"
          title="Intelligent Features for"
          titleHighlight="Every Need"
          description="Each module is a purpose-built AI system designed to solve a specific farming challenge with explainable, actionable intelligence."
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <StaggerItem key={feature.title}>
            <GlassCard
              className="p-6 h-full group cursor-pointer relative overflow-hidden"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {/* Hover glow */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {feature.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Expand trigger */}
                <button
                  className="flex items-center gap-1 text-xs font-medium text-krishi-600 dark:text-krishi-400 group-hover:gap-2 transition-all"
                  aria-label={`Learn more about ${feature.title}`}
                >
                  Learn more
                  <ChevronRight className={`w-3 h-3 transition-transform ${expandedIndex === index ? "rotate-90" : ""}`} />
                </button>

                {/* Expanded details */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border/50">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {feature.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Bottom capabilities bar */}
      <ScrollReveal delay={0.5}>
        <div className="mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-center gap-8">
          {[
            { icon: Cpu, label: "6 AI Models" },
            { icon: Zap, label: "Real-time Processing" },
            { icon: Shield, label: "Explainable AI" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-krishi-500/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-krishi-500" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
