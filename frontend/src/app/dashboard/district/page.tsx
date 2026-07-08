"use client";

import { useState } from "react";
import {
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Users,
  Sprout,
  Droplets,
  Microscope,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

const hotspots = [
  { region: "Lucknow Rural", disease: "Leaf Rust (Wheat)", severity: "High", count: 142 },
  { region: "Sitapur District", disease: "Early Blight (Tomato)", severity: "Medium", count: 85 },
  { region: "Kanpur Outskirts", disease: "Aphid Infestation", severity: "High", count: 110 },
  { region: "Hardoi Village Block", disease: "Leaf Rust (Wheat)", severity: "Low", count: 34 },
];

const stressMetrics = [
  { label: "Active Farmers", value: "12,450", icon: Users, color: "text-krishi-500", bgColor: "bg-krishi-500/10" },
  { label: "Disease Outbreaks", value: "371", icon: Microscope, color: "text-danger-500", bgColor: "bg-danger-500/10" },
  { label: "Water Stress Area", value: "18%", icon: Droplets, color: "text-sky-500", bgColor: "bg-sky-500/10" },
  { label: "Average NDVI Index", value: "0.68", icon: Sprout, color: "text-krishi-600", bgColor: "bg-krishi-600/10" },
];

export default function DistrictDashboard() {
  const [selectedHotspot, setSelectedHotspot] = useState(0);

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Top Navigation / Breadcrumb */}
      <div className="flex justify-between items-center pb-4 border-b border-border/50">
        <div>
          <h1 className="text-2xl font-bold text-foreground">District Administration Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Central UP Zone — Officer View
          </p>
        </div>

        <div className="flex gap-2">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-krishi-500/20 text-krishi-500">Live Sync</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground">Admin Mode</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stressMetrics.map((stat, i) => (
          <GlassCard key={i} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-muted-foreground font-medium uppercase">{stat.label}</p>
                <h3 className="text-2xl font-extrabold text-foreground mt-2">{stat.value}</h3>
              </div>
              <div className={`w-10 h-10 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Maps & Disease Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* District Analytics Heatmap */}
        <div className="lg:col-span-2 space-y-4">
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-muted-foreground" />
              District Outbreak Heatmap
            </h3>

            {/* Simulated Geographic Grid */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-krishi-900/30 to-background flex items-center justify-center">
              <div className="grid grid-cols-5 gap-3 p-8 w-full max-w-lg h-72 border border-danger-500/20 bg-danger-500/5 rounded-xl">
                {[
                  "bg-krishi-500/80", "bg-krishi-500/80", "bg-danger-500/80", "bg-krishi-500/80", "bg-krishi-500/80",
                  "bg-krishi-500/80", "bg-danger-600/80", "bg-danger-700/80", "bg-krishi-500/80", "bg-krishi-500/80",
                  "bg-krishi-500/80", "bg-krishi-500/80", "bg-danger-500/80", "bg-krishi-500/80", "bg-krishi-500/80",
                  "bg-krishi-500/80", "bg-krishi-500/80", "bg-krishi-500/80", "bg-krishi-500/80", "bg-krishi-500/80",
                ].map((color, i) => (
                  <div key={i} className={`rounded-lg ${color} transition-transform hover:scale-105 relative group flex items-center justify-center`}>
                    <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100">
                      {color.includes("danger") ? "Outbreak" : "Normal"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Map overlays */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur p-3 rounded-xl border border-border/50">
                <span className="text-xs font-semibold text-foreground">Outbreak severity overlay mapping (Leaflet spatial layer)</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-danger-500/20 text-danger-500">Alert Mode</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Hotspots Detailed Panel */}
        <div className="space-y-4">
          <GlassCard className="p-5">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-danger-500" />
              Disease Hotspots Block List
            </h3>

            <div className="space-y-3">
              {hotspots.map((hotspot, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedHotspot(i)}
                  className={`p-3 rounded-xl cursor-pointer transition-colors border ${
                    i === selectedHotspot ? "border-danger-500/30 bg-danger-500/5" : "border-border/50 hover:bg-muted/50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold text-foreground">{hotspot.region}</h4>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      hotspot.severity === "High" ? "bg-danger-500/10 text-danger-500" : "bg-earth-500/10 text-earth-500"
                    }`}>
                      {hotspot.severity}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{hotspot.disease} — {hotspot.count} cases</p>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Policy recommendations */}
          <GlassCard className="p-5 bg-krishi-500/10 border-krishi-500/20">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-krishi-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-krishi-700 dark:text-krishi-300 uppercase tracking-wider">
                  Admin Action advisory
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Wheat Leaf Rust cases in Lucknow Rural have exceeded the 100-case threshold. Recommend deploying regional extension agronomists to distribute Mancozeb/Tebuconazole packages. Turn off water pooling subsidies to prevent fungal propagation.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
