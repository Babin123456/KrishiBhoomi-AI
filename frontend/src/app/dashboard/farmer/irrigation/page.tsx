"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Info,
  Calendar,
  Sparkles,
  TrendingUp,
  Clock,
  CheckCircle2,
  ShowerHead,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

const moistureGauge = {
  value: 42,
  min: 0,
  max: 100,
  targetMin: 50,
  targetMax: 70,
};

const timelineData = [
  { time: "Monday 6:00 AM", amount: "12,000 Litres", status: "completed", method: "Drip Irrigation" },
  { time: "Wednesday 6:00 AM", amount: "14,000 Litres", status: "completed", method: "Drip Irrigation" },
  { time: "Friday 5:00 PM", amount: "Rain expected", status: "cancelled", method: "AI Override (Rain Forecast)" },
  { time: "Sunday 6:00 AM", amount: "10,000 Litres", status: "scheduled", method: "Micro-sprinklers" },
];

export default function IrrigationPage() {
  const [moisture, setMoisture] = useState(42);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Droplets className="w-6 h-6 text-sky-500" />
          Irrigation Intelligence
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Precision water requirement modeling to maximize crop health while saving water
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Moisture Gauge & Water Savings */}
        <div className="space-y-4">
          <GlassCard className="p-6 text-center space-y-4">
            <h3 className="text-sm font-bold text-foreground flex items-center justify-center gap-2">
              <ShowerHead className="w-4 h-4 text-sky-500" />
              Soil Moisture Index
            </h3>
            
            <div className="relative w-36 h-36 mx-auto flex items-center justify-center rounded-full border-4 border-dashed border-sky-500/30">
              <div>
                <span className="text-4xl font-extrabold text-sky-500">{moisture}%</span>
                <p className="text-[10px] text-muted-foreground mt-1">Moderate Status</p>
              </div>
            </div>

            <div className="flex justify-between text-xs text-muted-foreground px-4">
              <span>Min: 0%</span>
              <span className="text-krishi-500 font-semibold">Target: 50%-70%</span>
              <span>Max: 100%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-left">
              <p className="text-xs font-semibold text-sky-700 dark:text-sky-300">
                Water requirement: Moderate (approx 20k L/acre)
              </p>
            </div>
          </GlassCard>

          {/* Savings card */}
          <GlassCard className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground uppercase font-medium">Water Saved This Month</p>
                <h3 className="text-2xl font-bold text-krishi-500 mt-1">42,500 Litres</h3>
                <p className="text-xs text-muted-foreground mt-0.5">35% reduction vs traditional flood irrigation</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-krishi-500/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-krishi-500" />
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Schedule timeline & reasoning */}
        <div className="lg:col-span-2 space-y-6">
          {/* Scheduling Timeline */}
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-muted-foreground" />
              Irrigation Schedule Timeline
            </h3>

            <div className="space-y-4 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-border">
              {timelineData.map((item, i) => (
                <div key={i} className="flex items-start gap-4 relative">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border z-10 bg-background ${
                    item.status === "completed" ? "border-krishi-500 text-krishi-500 bg-krishi-500/5" :
                    item.status === "cancelled" ? "border-danger-500 text-danger-500 bg-danger-500/5" :
                    "border-sky-500 text-sky-500 bg-sky-500/5"
                  }`}>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-semibold text-foreground">{item.time}</h4>
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                        item.status === "completed" ? "bg-krishi-500/10 text-krishi-600 dark:text-krishi-400" :
                        item.status === "cancelled" ? "bg-danger-500/10 text-danger-600 dark:text-danger-400" :
                        "bg-sky-500/10 text-sky-600 dark:text-sky-400"
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{item.method} — {item.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* AI Agronomy reasoning */}
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-500" />
              AI Smart Water Advisory
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your field soil moisture level is currently 42%. Based on weather forecasts predicting a high probability of rain on Wednesday, we have overridden the scheduled Wednesday cycle to prevent root waterlogging. The next required micro-sprinkler cycle is delayed to Sunday at 6:00 AM.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
