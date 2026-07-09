"use client";

import { useState } from "react";
import {
  MapPin,
  Layers,
  Sparkles,
  AlertTriangle,
  Users,
  Sprout,
  Droplets,
  Microscope,
} from "lucide-react";
import { GlassCard } from "@/components/shared";


const hotspots = [
  // 28 States
  { region: "Lucknow, Uttar Pradesh", disease: "Leaf Rust (Wheat)", severity: "High", count: 142 },
  { region: "Nashik, Maharashtra", disease: "Downy Mildew (Grapes)", severity: "High", count: 198 },
  { region: "Guntur, Andhra Pradesh", disease: "Black Thrips (Chilli)", severity: "Critical", count: 320 },
  { region: "Bathinda, Punjab", disease: "Pink Bollworm (Cotton)", severity: "High", count: 245 },
  { region: "Karnal, Haryana", disease: "Bacterial Leaf Blight (Paddy)", severity: "Medium", count: 110 },
  { region: "Jorhat, Assam", disease: "Red Rot (Sugarcane)", severity: "Medium", count: 88 },
  { region: "Muzaffarpur, Bihar", disease: "Leaf Blight (Litchi)", severity: "High", count: 154 },
  { region: "Raipur, Chhattisgarh", disease: "Brown Plant Hopper (Rice)", severity: "Medium", count: 95 },
  { region: "Anand, Gujarat", disease: "Leaf Spot (Tobacco)", severity: "Low", count: 42 },
  { region: "Kangra, Himachal Pradesh", disease: "Powder Mildew (Apple)", severity: "Medium", count: 76 },
  { region: "Ranchi, Jharkhand", disease: "Early Blight (Potato)", severity: "Low", count: 50 },
  { region: "Shimoga, Karnataka", disease: "Blast Disease (Paddy)", severity: "High", count: 185 },
  { region: "Kottayam, Kerala", disease: "Foot Rot (Black Pepper)", severity: "Medium", count: 67 },
  { region: "Indore, Madhya Pradesh", disease: "Yellow Mosaic (Soybean)", severity: "High", count: 210 },
  { region: "Imphal, Manipur", disease: "Blast Disease (Rice)", severity: "Low", count: 28 },
  { region: "Shillong, Meghalaya", disease: "Late Blight (Potato)", severity: "Low", count: 31 },
  { region: "Aizawl, Mizoram", disease: "Leaf Spot (Ginger)", severity: "Low", count: 15 },
  { region: "Kohima, Nagaland", disease: "Rust (Soybean)", severity: "Low", count: 20 },
  { region: "Cuttack, Odisha", disease: "Gall Midge (Rice)", severity: "Medium", count: 112 },
  { region: "Sri Ganganagar, Rajasthan", disease: "Locust Attack Warning", severity: "Critical", count: 405 },
  { region: "Gangtok, Sikkim", disease: "Rhizome Rot (Cardamom)", severity: "Medium", count: 58 },
  { region: "Coimbatore, Tamil Nadu", disease: "Stem Bleeding (Coconut)", severity: "Medium", count: 94 },
  { region: "Nalgonda, Telangana", disease: "Stem Borer (Paddy)", severity: "High", count: 167 },
  { region: "Agartala, Tripura", disease: "Leaf Spot (Rice)", severity: "Low", count: 24 },
  { region: "Dehradun, Uttarakhand", disease: "Powdery Mildew (Pea)", severity: "Low", count: 37 },
  { region: "Jalpaiguri, West Bengal", disease: "Red Rust (Tea)", severity: "High", count: 180 },
  { region: "Panaji, Goa", disease: "Bud Rot (Coconut)", severity: "Low", count: 18 },
  { region: "Naya Raipur, Chhattisgarh", disease: "Stem Borer (Maize)", severity: "Low", count: 39 },
  // 8 Union Territories
  { region: "Srinagar, Jammu & Kashmir", disease: "Scab (Apple)", severity: "High", count: 155 },
  { region: "Leh, Ladakh", disease: "Aphids (Apricot)", severity: "Medium", count: 45 },
  { region: "Kavaratti, Lakshadweep", disease: "Mite Infestation (Coconut)", severity: "High", count: 70 },
  { region: "Port Blair, Andaman & Nicobar", disease: "Kanu Rot (Arecanut)", severity: "Medium", count: 52 },
  { region: "Puducherry Rural", disease: "Blast Disease (Rice)", severity: "Medium", count: 63 },
  { region: "Daman & Diu Zone", disease: "Fruit Borer (Sapota)", severity: "Low", count: 19 },
  { region: "Dadra & Nagar Haveli", disease: "Powdery Mildew (Mango)", severity: "Low", count: 25 },
  { region: "Delhi Outskirts (Narela)", disease: "Bacterial Canker (Vegetables)", severity: "Medium", count: 88 }
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
