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
                {category.techs.map((tech) => {
                  let logoSvg = null;
                  if (tech.name === "Next.js 15") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-foreground group-hover:animate-bounce" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.562 18.277l-4.703-6.077h1.461l3.784 4.902V6.666h1.22v11.611h-1.762zm5.795-5.91h-1.22v-2.073h1.22v2.073zm0 2.298h-1.22v-1.127h1.22v1.127zm0-5.753h-1.22v-1.13h1.22v1.13z"/>
                      </svg>
                    );
                  } else if (tech.name === "React 19") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-[#61dafb] animate-[spin_10s_linear_infinite]" viewBox="0 0 24 24">
                        <path d="M24 10.582c0-.497-.375-.98-.987-1.396-.65-.44-1.57-.804-2.67-1.057 1.05-1.144 1.7-2.126 1.83-2.825.07-.37-.03-.7-.28-.95-.29-.28-.75-.38-1.29-.27-.67.14-1.61.76-2.67 1.76-1.07-1-2.01-1.62-2.67-1.76-.55-.11-1.01-.01-1.29.27-.26.25-.35.58-.29.95.14.69.78 1.68 1.83 2.825-1.1.253-2.02.617-2.67 1.057-.61.416-.99.899-.99 1.396 0 .497.38.98.99 1.396.65.44 1.57.804 2.67 1.057-1.05 1.144-1.7 2.126-1.83 2.825-.07.37.03.7.28.95.14.14.33.22.54.24.25.02.5-.06.75-.24.67-.14 1.61-.76 2.67-1.76 1.07 1 2.01 1.62 2.67 1.76.08.02.16.03.24.03.46 0 .86-.23 1.05-.48.26-.25.35-.58.29-.95-.14-.69-.78-1.68-1.83-2.825 1.1-.253 2.02-.617 2.67-1.057.61-.416.99-.899.99-1.396zm-12 1.341c-.74 0-1.34-.6-1.34-1.341s.6-1.34 1.34-1.34 1.34.6 1.34 1.34-.6 1.34-1.34 1.34z"/>
                      </svg>
                    );
                  } else if (tech.name === "FastAPI") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-[#059669] group-hover:animate-pulse" viewBox="0 0 24 24">
                        <path d="M12 0L1.6 6v12L12 24l10.4-6V6L12 0zm5.6 14.8l-5.6 3.2-5.6-3.2v-5.6l5.6-3.2 5.6 3.2v5.6z"/>
                      </svg>
                    );
                  } else if (tech.name === "PostgreSQL") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-[#336791] group-hover:animate-bounce" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                    );
                  } else if (tech.name === "Docker") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-[#2496ed] group-hover:animate-pulse" viewBox="0 0 24 24">
                        <path d="M13.983 11.078h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006h-2.119v2.006zm-2.737 0h2.119v-2.006H8.509v2.006zm-2.737 0h2.119v-2.006H5.772v2.006zm2.737-2.61h2.119V6.462H8.509v2.006zm-2.737 0h2.119V6.462H5.772v2.006zm5.474 0h2.119V6.462h-2.119v2.006zm-2.737-2.61h2.119V3.852H8.509v2.006zm8.211 7.226h2.119v-2.006h-2.119v2.006zm2.737-1.127h2.119V8.956h-2.119v2.006z"/>
                      </svg>
                    );
                  } else if (tech.name === "TypeScript") {
                    logoSvg = (
                      <svg className="w-4 h-4 fill-current text-[#3178c6] group-hover:animate-bounce" viewBox="0 0 24 24">
                        <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-8.8 18.5c-.3.5-.7.8-1.2 1-.5.2-1 .3-1.6.3-1 0-1.8-.3-2.4-.9s-.9-1.5-.9-2.7h1.9c0 .6.2 1 .4 1.3s.6.4 1 .4c.4 0 .7-.1.9-.3s.3-.4.3-.7c0-.3-.1-.5-.3-.7s-.6-.4-1.1-.6c-.7-.3-1.3-.6-1.7-.9s-.6-.8-.6-1.5c0-.6.2-1.1.7-1.4s1.1-.5 1.8-.5c.8 0 1.5.2 2 .6s.7 1 .7 1.8h-1.9c0-.4-.1-.7-.3-.9s-.5-.3-.8-.3c-.3 0-.5.1-.7.2s-.2.3-.2.5c0 .2.1.4.3.5s.6.3 1.1.5c.8.3 1.4.7 1.8 1.1s.6 1 .6 1.7c-.1.7-.3 1.3-.8 1.7zm8.3-4.2h-2.7v5.5H15v-5.5h-2.7v-1.6h7.2v1.6z"/>
                      </svg>
                    );
                  }
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2">
                        {logoSvg}
                        <span className="text-sm font-medium text-foreground">{tech.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{tech.desc}</span>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
