"use client";

import { useState } from "react";
import {
  TrendingUp,
  MapPin,
  Calendar,
  Sparkles,
  Info,
  ChevronRight,
  TrendingDown,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

const mandiPrices = [
  { name: "Lucknow Mandi", price: 2450, distance: "12 km", status: "Premium price" },
  { name: "Kanpur Mandi", price: 2480, distance: "78 km", status: "Highest yield value" },
  { name: "Sitapur Mandi", price: 2410, distance: "54 km", status: "Standard price" },
];

const historicalTrend = [
  { date: "Jun 20", price: 2300 },
  { date: "Jun 25", price: 2350 },
  { date: "Jun 30", price: 2380 },
  { date: "Jul 05", price: 2450 },
];

export default function MarketPage() {
  const [selectedCrop, setSelectedCrop] = useState("Wheat");

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-krishi-500" />
            Market Intelligence
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Predictive mandi price indexes, demand graphs, and selling recommendations
          </p>
        </div>

        <select
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
          className="px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold text-foreground border border-border focus:outline-none"
        >
          <option value="Wheat">Wheat (गेहूं)</option>
          <option value="Rice">Rice (धान)</option>
          <option value="Mustard">Mustard (सरसों)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Price Predictions */}
        <div className="space-y-4">
          <GlassCard className="p-6 text-center space-y-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-krishi-500/10 text-krishi-600 dark:text-krishi-400">
              CURRENT INDEX
            </span>
            <h2 className="text-4xl font-extrabold text-foreground mt-2">Rs 2,450/q</h2>
            <p className="text-xs text-muted-foreground mt-1">Upward trend (+5.2% this week)</p>

            <div className="p-4 rounded-xl bg-muted/40 border border-border/50 text-left space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Estimated Future Price (14d)</span>
                <span className="font-bold text-krishi-500">Rs 2,580/q</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-muted-foreground">Selling Recommendation</span>
                <span className="font-bold text-krishi-500">Hold 40%, Sell 60%</span>
              </div>
            </div>
          </GlassCard>

          {/* Near Mandis */}
          <GlassCard className="p-5">
            <h3 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">Nearby Mandis</h3>
            <div className="space-y-3">
              {mandiPrices.map((mandi, i) => (
                <div key={i} className="flex justify-between items-center p-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                      {mandi.name}
                    </h4>
                    <span className="text-[10px] text-muted-foreground">{mandi.distance} — {mandi.status}</span>
                  </div>
                  <span className="text-sm font-bold text-foreground">Rs {mandi.price}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Price trends visual */}
        <div className="lg:col-span-2 space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              Mandi Historical Price Chart
            </h3>

            {/* Simulating Price Chart bars */}
            <div className="flex items-end gap-3 h-48 pt-4">
              {historicalTrend.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full rounded-t-lg bg-gradient-to-t from-krishi-600 to-krishi-400 hover:from-krishi-500 hover:to-krishi-300 transition-all duration-300 relative group"
                    style={{ height: `${((data.price - 2200) / 300) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border px-2 py-0.5 rounded text-[9px] font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Rs {data.price}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground font-semibold">{data.date}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* AI explaining trend */}
          <GlassCard className="p-5 bg-krishi-500/10 border-krishi-500/20">
            <div className="flex gap-3">
              <Sparkles className="w-5 h-5 text-krishi-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-krishi-700 dark:text-krishi-300 uppercase tracking-wider">
                  AI selling analysis
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Wheat demand is rising steadily across Uttar Pradesh due to low buffer stocks and increased procurement. Mandi prices in Kanpur are currently showing a Rs 30 premium. Prices are predicted to peak at Rs 2580/quintal within 14 days. Selling 60% of your harvest now and retaining 40% is recommended to maximize gains.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
