"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic,
  Camera,
  Smartphone,
  Brain,
  Sprout,
  CloudSun,
  Microscope,
  Satellite,
  MessageSquare,
  LayoutDashboard,
  Bell,
  FileText,
  ArrowDown,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal } from "@/components/shared";

const steps = [
  {
    icon: Smartphone,
    label: "Farmer Input",
    description: "Voice, image, or manual data entry",
    subIcons: [Mic, Camera],
    color: "bg-sky-500",
  },
  {
    icon: Brain,
    label: "AI Processing",
    description: "Multi-model intelligence engine",
    subIcons: [],
    color: "bg-krishi-500",
  },
  {
    icon: Sprout,
    label: "Crop AI",
    description: "XGBoost recommendation",
    subIcons: [],
    color: "bg-krishi-600",
  },
  {
    icon: CloudSun,
    label: "Weather AI",
    description: "Forecast analysis",
    subIcons: [],
    color: "bg-sky-400",
  },
  {
    icon: Microscope,
    label: "Disease AI",
    description: "CNN image analysis",
    subIcons: [],
    color: "bg-danger-500",
  },
  {
    icon: Satellite,
    label: "Satellite AI",
    description: "NDVI vegetation analysis",
    subIcons: [],
    color: "bg-earth-600",
  },
  {
    icon: MessageSquare,
    label: "Gemini Reasoning",
    description: "Natural language insights",
    subIcons: [],
    color: "bg-purple-500",
  },
  {
    icon: LayoutDashboard,
    label: "Smart Dashboard",
    description: "Personalized recommendations",
    subIcons: [Bell, FileText],
    color: "bg-krishi-500",
  },
];

export function AIWorkflowSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper id="how-it-works">
      <ScrollReveal>
        <SectionHeader
          badge="AI Pipeline"
          title="How"
          titleHighlight="KrishiBhoomi AI Works"
          description="From farmer input to actionable intelligence — our AI pipeline processes multiple data sources through specialized models to deliver personalized recommendations."
        />
      </ScrollReveal>

      <div ref={ref} className="relative max-w-lg mx-auto">
        {/* Connecting line */}
        <motion.div
          className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-sky-500 via-krishi-500 to-krishi-600 -z-10"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative flex items-center gap-5 group"
            >
              {/* Node */}
              <div className={`relative z-10 w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content card */}
              <div className="flex-1 glass rounded-xl p-4 group-hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">
                      {step.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {step.description}
                    </p>
                  </div>
                  {step.subIcons.length > 0 && (
                    <div className="flex items-center gap-1.5">
                      {step.subIcons.map((SubIcon, i) => (
                        <div key={i} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center">
                          <SubIcon className="w-3.5 h-3.5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
