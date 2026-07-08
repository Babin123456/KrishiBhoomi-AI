"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Plane,
  Cpu,
  Droplets,
  ScanEye,
  BarChart3,
  Building2,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal } from "@/components/shared";

const milestones = [
  {
    icon: Plane,
    title: "Drone Integration",
    description: "Automated aerial crop monitoring with high-resolution imaging for precise field analysis.",
    quarter: "Q3 2026",
    status: "planned",
  },
  {
    icon: Cpu,
    title: "IoT Sensor Network",
    description: "Real-time soil moisture, temperature, and nutrient sensors connected to the AI platform.",
    quarter: "Q4 2026",
    status: "planned",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation Systems",
    description: "Automated drip irrigation controlled by AI based on real-time sensor data and weather forecasts.",
    quarter: "Q1 2027",
    status: "planned",
  },
  {
    icon: ScanEye,
    title: "Autonomous Farm Monitoring",
    description: "AI-powered cameras and sensors for 24/7 automated crop and livestock surveillance.",
    quarter: "Q2 2027",
    status: "planned",
  },
  {
    icon: BarChart3,
    title: "AI Yield Prediction",
    description: "Advanced deep learning models for accurate pre-harvest yield estimation across multiple crops.",
    quarter: "Q3 2027",
    status: "planned",
  },
  {
    icon: Building2,
    title: "Government Integration",
    description: "Direct integration with government subsidy programs, MSP portals, and agricultural schemes.",
    quarter: "Q4 2027",
    status: "planned",
  },
];

export function FutureVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <SectionWrapper>
      <ScrollReveal>
        <SectionHeader
          badge="Future Vision"
          title="Building the Future of"
          titleHighlight="Smart Agriculture"
          description="Our roadmap for transforming Indian agriculture through continuous innovation in AI, IoT, and automation."
        />
      </ScrollReveal>

      <div ref={ref} className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-krishi-500 via-sky-500 to-earth-500"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex items-start gap-6 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-background border-2 border-krishi-500 flex items-center justify-center">
                  <milestone.icon className="w-4 h-4 text-krishi-500" />
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-20 lg:ml-0 lg:w-[calc(50%-2rem)] ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                <div className="glass rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-xs font-semibold text-krishi-600 dark:text-krishi-400 uppercase tracking-wider">
                    {milestone.quarter}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
