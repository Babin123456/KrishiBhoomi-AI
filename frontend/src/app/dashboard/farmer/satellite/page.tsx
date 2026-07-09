"use client";

import { useState } from "react";
import {
  Satellite,
  Calendar,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GlassCard } from "@/components/shared";


const satelliteMetrics = [
  { label: "NDVI Index", value: "0.72", status: "Healthy Vegetation", color: "text-krishi-500" },
  { label: "EVI Index", value: "0.55", status: "Optimal Canopy Structure", color: "text-krishi-600" },
  { label: "Moisture Stress", value: "0.42", status: "No Water Stress", color: "text-sky-500" },
  { label: "Growth Progress", value: "78%", status: "On Track for Harvest", color: "text-earth-500" },
];

const historicalTimeline = [
  { date: "May 10", ndvi: 0.52, status: "Emergence" },
  { date: "May 24", ndvi: 0.58, status: "Tillering" },
  { date: "Jun 07", ndvi: 0.61, status: "Jointing" },
  { date: "Jun 21", ndvi: 0.68, status: "Booting" },
  { date: "Jul 05", ndvi: 0.72, status: "Flowering (Current)" },
];

export default function SatellitePage() {
  const [selectedPoint, setSelectedPoint] = useState(4);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Satellite className="w-6 h-6 text-krishi-500" />
          Satellite Monitoring
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Copernicus Sentinel-2 vegetation indices analytics and crop health mapping
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Visualization */}
        <div className="lg:col-span-2 space-y-4">
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-muted-foreground" />
              NDVI Health Zones Map
            </h3>

            {/* Simulated Satellite Map */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border/50 bg-gradient-to-br from-krishi-900/30 to-background flex items-center justify-center">
              {/* Field Grid representing health Zones */}
              <div className="grid grid-cols-4 gap-2 p-8 w-full max-w-md h-64 border border-krishi-500/20 bg-krishi-500/5 rounded-xl">
                {[
                  "bg-krishi-500/80", "bg-krishi-600/80", "bg-krishi-500/80", "bg-krishi-400/80",
                  "bg-krishi-600/80", "bg-krishi-700/80", "bg-krishi-600/80", "bg-krishi-500/80",
                  "bg-krishi-500/80", "bg-krishi-600/80", "bg-earth-500/80", "bg-krishi-600/80",
                  "bg-krishi-400/80", "bg-krishi-500/80", "bg-krishi-600/80", "bg-krishi-700/80"
                ].map((zoneColor, i) => (
                  <div key={i} className={`rounded-lg ${zoneColor} transition-transform hover:scale-105 relative group flex items-center justify-center`}>
                    <span className="text-[10px] font-bold text-white opacity-0 group-hover:opacity-100">
                      {i === 10 ? "0.48" : "0.74"}
                    </span>
                  </div>
                ))}
              </div>

              {/* Map Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center bg-background/80 backdrop-blur p-3 rounded-xl border border-border/50">
                <span className="text-xs font-semibold text-foreground">Spectral Mode: NDVI (Normalized Difference Vegetation)</span>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-krishi-500/20 text-krishi-500">NDVI</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground">EVI</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground">NDRE</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Timeline Slider */}
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              Historical NDVI Timeline
            </h3>

            <div className="flex justify-between items-end h-24 gap-3">
              {historicalTimeline.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedPoint(i)}
                  className="flex-1 flex flex-col items-center gap-1.5 cursor-pointer"
                >
                  <div
                    className={`w-full rounded-t-lg transition-all duration-300 ${
                      i === selectedPoint
                        ? "bg-krishi-500 shadow-lg shadow-krishi-500/30"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    style={{ height: `${item.ndvi * 100}%` }}
                  />
                  <span className="text-[10px] font-semibold text-muted-foreground">{item.date}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Metrics & Satellite Intelligence */}
        <div className="space-y-4">
          <GlassCard className="p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-krishi-500" />
              Spectral Index Details
            </h3>

            <div className="space-y-3">
              {satelliteMetrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-muted/40 border border-border/50">
                  <p className="text-[10px] text-muted-foreground font-medium uppercase">{metric.label}</p>
                  <div className="flex justify-between items-end mt-1">
                    <span className={`text-xl font-bold ${metric.color}`}>{metric.value}</span>
                    <span className="text-xs text-muted-foreground font-medium">{metric.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* AI Satellite Advice */}
          <GlassCard className="p-5 bg-krishi-500/10 border-krishi-500/20">
            <div className="flex gap-3">
              <TrendingUp className="w-5 h-5 text-krishi-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-krishi-700 dark:text-krishi-300 uppercase tracking-wider">
                  NDVI Recommendation
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  NDVI is stable at 0.72, which points to active chlorophyll synthesis. One yellow anomaly zone detected in Sector C (NDVI: 0.48) is suffering from localized nitrogen deficiency. Targeted application of nitrogen fertilizer is recommended in that specific sector.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
