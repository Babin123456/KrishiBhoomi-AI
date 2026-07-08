"use client";

import {
  Blocks,
  Server,
  Brain,
  Eye,
  Globe,
  Cloud,
  Database,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, StaggerContainer, StaggerItem, GlassCard } from "@/components/shared";

const categories = [
  {
    title: "Frontend",
    icon: Blocks,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    techs: [
      { name: "Next.js 15", desc: "App Router" },
      { name: "React 19", desc: "UI Library" },
      { name: "TypeScript", desc: "Type Safety" },
      { name: "Tailwind CSS", desc: "Styling" },
      { name: "shadcn/ui", desc: "Components" },
      { name: "Framer Motion", desc: "Animations" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-krishi-500",
    bgColor: "bg-krishi-500/10",
    techs: [
      { name: "FastAPI", desc: "API Framework" },
      { name: "SQLAlchemy", desc: "ORM" },
      { name: "Pydantic", desc: "Validation" },
      { name: "PostgreSQL", desc: "Database" },
      { name: "Redis", desc: "Caching" },
      { name: "JWT", desc: "Auth" },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    techs: [
      { name: "Gemini", desc: "LLM" },
      { name: "XGBoost", desc: "Crop ML" },
      { name: "Whisper", desc: "Speech" },
      { name: "FAISS", desc: "Vector DB" },
      { name: "Scikit-learn", desc: "ML" },
      { name: "Pandas", desc: "Data" },
    ],
  },
  {
    title: "Computer Vision",
    icon: Eye,
    color: "text-danger-500",
    bgColor: "bg-danger-500/10",
    techs: [
      { name: "EfficientNet", desc: "CNN" },
      { name: "PyTorch", desc: "Framework" },
      { name: "PIL", desc: "Images" },
    ],
  },
  {
    title: "GIS & Satellite",
    icon: Globe,
    color: "text-earth-600",
    bgColor: "bg-earth-600/10",
    techs: [
      { name: "Leaflet", desc: "Maps" },
      { name: "Sentinel-2", desc: "Satellite" },
      { name: "NDVI", desc: "Indices" },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-sky-600",
    bgColor: "bg-sky-600/10",
    techs: [
      { name: "Docker", desc: "Containers" },
      { name: "GitHub Actions", desc: "CI/CD" },
      { name: "Vercel", desc: "Frontend" },
    ],
  },
];

export function TechStackSection() {
  return (
    <SectionWrapper id="technology" className="bg-muted/30">
      <ScrollReveal>
        <SectionHeader
          badge="Technology Stack"
          title="Built with"
          titleHighlight="Modern Technology"
          description="Production-grade architecture using industry-standard tools and frameworks for reliability, performance, and scalability."
        />
      </ScrollReveal>

      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((category) => (
          <StaggerItem key={category.title}>
            <GlassCard hover className="p-6 h-full group">
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-foreground">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
