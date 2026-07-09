"use client";

import { useState } from "react";

import {
  CloudSun,
  ThermometerSun,
  Droplets,
  Wind,
  Gauge,
  Sun,
  Zap,
  Info,
  Calendar,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

const weeklyForecast = [
  { day: "Mon", temp: 32, condition: "Sunny", rainChance: 10, icon: Sun },
  { day: "Tue", temp: 28, condition: "Rainy", rainChance: 85, icon: CloudSun },
  { day: "Wed", temp: 27, condition: "Thunderstorm", rainChance: 90, icon: CloudSun },
  { day: "Thu", temp: 29, condition: "Cloudy", rainChance: 40, icon: CloudSun },
  { day: "Fri", temp: 31, condition: "Partly Cloudy", rainChance: 20, icon: CloudSun },
  { day: "Sat", temp: 32, condition: "Sunny", rainChance: 5, icon: Sun },
  { day: "Sun", temp: 33, condition: "Sunny", rainChance: 5, icon: Sun },
];

const advisories = [
  {
    title: "Delay Fertilizer Application",
    desc: "Heavy downpour expected on Tuesday and Wednesday will wash away the nitrogen content from the soil, wasting input investments.",
    action: "Delay until Thursday morning",
  },
  {
    title: "Avoid Manual Irrigation",
    desc: "Sufficient rainfall probability (90%) on Wednesday will fully saturate the fields, making manual irrigation redundant.",
    action: "Turn off automatic drip schedules",
  },
  {
    title: "Spray Pesticides on Thursday",
    desc: "Pest risk increases after rains due to humidity. Winds will be calm (under 5 km/h) on Thursday, perfect for spraying.",
    action: "Schedule prophylactic spray",
  },
];

export default function WeatherPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeTab, _setActiveTab] = useState<"hourly" | "weekly">("weekly");
  
  const [userState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("userState") || "Uttar Pradesh";
    }
    return "Uttar Pradesh";
  });
  const [userDistrict] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("userDistrict") || "Lucknow";
    }
    return "Lucknow";
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <CloudSun className="w-6 h-6 text-sky-500" />
          Weather Intelligence
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Hyperlocal forecasts integrated with AI agronomy advisories for input optimization
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Weather Card */}
        <div className="lg:col-span-1 space-y-4">
          <GlassCard className="p-6 text-center space-y-6">
            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
                CURRENT WEATHER
              </span>
              <h2 className="text-5xl font-extrabold text-foreground mt-4">32°C</h2>
              <p className="text-sm text-muted-foreground mt-1">Partly Cloudy — {userDistrict}, {userState}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30 text-left">
                <Droplets className="w-4 h-4 text-sky-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium">HUMIDITY</p>
                  <p className="text-sm font-semibold text-foreground">68%</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30 text-left">
                <Wind className="w-4 h-4 text-muted-foreground shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium">WIND</p>
                  <p className="text-sm font-semibold text-foreground">12.5 km/h</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30 text-left">
                <Gauge className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium">RAIN CHANCE</p>
                  <p className="text-sm font-semibold text-sky-500">85%</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-muted/30 text-left">
                <ThermometerSun className="w-4 h-4 text-earth-500 shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground font-medium">UV INDEX</p>
                  <p className="text-sm font-semibold text-foreground">7 (High)</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Quick Stats alert */}
          <GlassCard className="p-4 bg-earth-500/10 border-earth-500/20">
            <div className="flex gap-3">
              <Zap className="w-5 h-5 text-earth-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-earth-700 dark:text-earth-300 uppercase tracking-wider">
                  Heat Advisory
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Temperatures expected to spike to 40°C next week. Ensure light irrigation on sandy fields.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Forecast and AI Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          {/* Forecast Slider */}
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                7-Day Forecast
              </h3>
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {weeklyForecast.map((fc, i) => (
                <div key={i} className="flex flex-col items-center p-3 rounded-xl bg-muted/20 border border-border/50">
                  <span className="text-xs font-semibold text-muted-foreground">{fc.day}</span>
                  <fc.icon className="w-6 h-6 my-3 text-sky-500" />
                  <span className="text-sm font-bold text-foreground">{fc.temp}°C</span>
                  <span className="text-[10px] font-medium text-sky-500 mt-1">{fc.rainChance}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* AI recommendations */}
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-krishi-500" />
              AI Agronomy Recommendations
            </h3>

            <div className="space-y-4">
              {advisories.map((adv, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                  <div className="w-8 h-8 rounded-lg bg-krishi-500/10 flex items-center justify-center shrink-0">
                    <Info className="w-4 h-4 text-krishi-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-foreground">{adv.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{adv.desc}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-krishi-600 dark:text-krishi-400 bg-krishi-500/10 px-2 py-0.5 rounded">
                        ACTION ITEM:
                      </span>
                      <span className="text-xs font-medium text-foreground">{adv.action}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
