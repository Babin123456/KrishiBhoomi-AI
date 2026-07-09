"use client";

import {
  CloudSun,
  Sprout,
  Droplets,
  TrendingUp,
  AlertTriangle,
  Satellite,
  ThermometerSun,
  Wind,
  Gauge,
} from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal } from "@/components/shared";
import { AnimatedCounter } from "@/components/shared/animated-counter";


const weatherData = {
  temp: 32,
  humidity: 65,
  wind: 12,
  rain: 15,
};

const widgets = [
  { label: "Crop Health", value: 87, unit: "%", color: "text-krishi-500", icon: Sprout },
  { label: "Soil Moisture", value: 42, unit: "%", color: "text-sky-500", icon: Droplets },
  { label: "NDVI Index", value: 0.72, unit: "", color: "text-krishi-600", icon: Satellite },
  { label: "Market Price", value: 2450, unit: "/q", color: "text-earth-600", icon: TrendingUp },
];

const alerts = [
  { type: "warning", message: "Heavy rain expected tomorrow — delay fertilizer", time: "2h ago" },
  { type: "info", message: "Wheat crop entering flowering stage", time: "5h ago" },
  { type: "success", message: "NDVI improved by 12% this week", time: "1d ago" },
];

export function DashboardPreviewSection() {
  return (
    <SectionWrapper className="relative bg-muted/30">
      <ScrollReveal>
        <SectionHeader
          badge="Live Preview"
          title="Your Intelligent"
          titleHighlight="Farm Dashboard"
          description="A real-time command center for every farming decision — weather, crop health, market prices, AI alerts, and satellite monitoring at a glance."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="glass-heavy rounded-3xl p-4 sm:p-6 lg:p-8 border-gradient max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Farm Dashboard</h3>
              <p className="text-sm text-muted-foreground">Rajesh Kumar — Lucknow, UP</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-krishi-500/10 text-krishi-600 dark:text-krishi-400">
              <span className="w-2 h-2 rounded-full bg-krishi-500 animate-pulse" />
              <span className="text-xs font-medium">Live</span>
            </div>
          </div>

          {/* Widget Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {widgets.map((widget) => (
              <div key={widget.label} className="glass rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <widget.icon className={`w-4 h-4 ${widget.color}`} />
                  <span className="text-xs text-muted-foreground font-medium">{widget.label}</span>
                </div>
                <div className={`text-2xl font-bold ${widget.color}`}>
                  <AnimatedCounter end={widget.value} duration={1500} decimals={widget.label === "NDVI Index" ? 2 : 0} />
                  <span className="text-sm font-normal text-muted-foreground ml-0.5">{widget.unit}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Weather Widget */}
            <div className="glass rounded-xl p-5 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <CloudSun className="w-5 h-5 text-sky-500" />
                <h4 className="font-semibold text-sm text-foreground">Weather Today</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ThermometerSun className="w-4 h-4" />
                    Temperature
                  </div>
                  <span className="font-semibold text-foreground">{weatherData.temp} C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Droplets className="w-4 h-4" />
                    Humidity
                  </div>
                  <span className="font-semibold text-foreground">{weatherData.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Wind className="w-4 h-4" />
                    Wind
                  </div>
                  <span className="font-semibold text-foreground">{weatherData.wind} km/h</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Gauge className="w-4 h-4" />
                    Rain Chance
                  </div>
                  <span className="font-semibold text-sky-500">{weatherData.rain}%</span>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="glass rounded-xl p-5 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-earth-500" />
                <h4 className="font-semibold text-sm text-foreground">AI Alerts</h4>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      alert.type === "warning" ? "bg-earth-500" :
                      alert.type === "info" ? "bg-sky-500" : "bg-krishi-500"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chart placeholder with realistic bars */}
          <div className="mt-4 glass rounded-xl p-5">
            <h4 className="font-semibold text-sm text-foreground mb-4">Weekly Crop Health Trend</h4>
            <div className="flex items-end gap-2 h-32">
              {[65, 72, 68, 78, 82, 87, 85].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-krishi-600 to-krishi-400 transition-all duration-500"
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-[10px] text-muted-foreground">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
