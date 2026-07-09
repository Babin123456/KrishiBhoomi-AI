"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Microscope,
  Wheat,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Zap,
  MapPin,
  Calendar,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { GlassCard, AnimatedCounter } from "@/components/shared";

const summaryCards = [
  { title: "Crop Health", value: 87, unit: "%", icon: Sprout, trend: "+5%", trendUp: true, color: "text-krishi-500", bgColor: "bg-krishi-500/10" },
  { title: "Soil Moisture", value: 42, unit: "%", icon: Droplets, trend: "-3%", trendUp: false, color: "text-sky-500", bgColor: "bg-sky-500/10" },
  { title: "NDVI Score", value: 0.72, unit: "", icon: Satellite, trend: "+0.08", trendUp: true, color: "text-krishi-600", bgColor: "bg-krishi-600/10" },
  { title: "Market Price", value: 2450, unit: "/q", icon: TrendingUp, trend: "+Rs 120", trendUp: true, color: "text-earth-600", bgColor: "bg-earth-500/10" },
];

const weatherData = {
  temp: 32, humidity: 65, wind: 12, rainChance: 15, uvIndex: 7, condition: "Partly Cloudy",
};

const alerts = [
  { type: "warning", title: "Heavy Rain Alert", message: "Expected tomorrow morning — delay fertilizer application", time: "2h ago", icon: CloudSun },
  { type: "danger", title: "Pest Risk", message: "Aphid risk elevated due to humidity — inspect fields", time: "4h ago", icon: Microscope },
  { type: "info", title: "Market Update", message: "Wheat prices trending upward — consider holding stock", time: "6h ago", icon: TrendingUp },
  { type: "success", title: "Irrigation Complete", message: "Drip irrigation cycle completed for Field B", time: "8h ago", icon: Droplets },
];

const quickActions = [
  { label: "Recommend Crop", href: "/dashboard/farmer/crop-recommendation", icon: Wheat, color: "bg-krishi-500" },
  { label: "Check Weather", href: "/dashboard/farmer/weather", icon: CloudSun, color: "bg-sky-500" },
  { label: "Detect Disease", href: "/dashboard/farmer/disease-detection", icon: Microscope, color: "bg-danger-500" },
  { label: "Ask AI Copilot", href: "/dashboard/farmer/copilot", icon: Zap, color: "bg-purple-500" },
];

const recentActivities = [
  { action: "Crop recommendation generated", detail: "Wheat — 92% confidence", time: "1h ago" },
  { action: "Disease scan completed", detail: "No disease detected", time: "3h ago" },
  { action: "Satellite data updated", detail: "NDVI: 0.72 (Healthy)", time: "5h ago" },
  { action: "Market price alert", detail: "Wheat Rs 2450/q (+5.2%)", time: "6h ago" },
  { action: "Irrigation scheduled", detail: "Field A — Tomorrow 6:00 AM", time: "8h ago" },
];

const weeklyHealth = [65, 72, 68, 78, 82, 87, 85];

export default function FarmerDashboard() {
  const [userState, setUserState] = useState("Uttar Pradesh");
  const [userDistrict, setUserDistrict] = useState("Lucknow");
  const [userName, setUserName] = useState("Rajesh");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserState(localStorage.getItem("userState") || "Uttar Pradesh");
      setUserDistrict(localStorage.getItem("userDistrict") || "Lucknow");
      setUserName(localStorage.getItem("userName") || "Rajesh");
    }
  }, []);

  // Generate a mock but state-dependent weekly trend calculation to feel realistic
  const stateSeed = userState.charCodeAt(0) + userState.length;
  const stateWeeklyHealth = [
    60 + (stateSeed % 15),
    65 + (stateSeed % 12),
    62 + (stateSeed % 18),
    70 + (stateSeed % 10),
    75 + (stateSeed % 14),
    80 + (stateSeed % 9),
    78 + (stateSeed % 11)
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-foreground"
          >
            Good Evening, {userName}
          </motion.h1>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            {userDistrict}, {userState}
            <span className="mx-1.5 text-border">|</span>
            <Calendar className="w-3.5 h-3.5" />
            {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {quickActions.map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium glass hover:shadow-md transition-all"
            >
              <div className={`w-6 h-6 rounded-lg ${action.color} flex items-center justify-center`}>
                <action.icon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="hidden sm:inline text-foreground">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard hover className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${card.bgColor} flex items-center justify-center`}>
                  <card.icon className={`w-5 h-5 ${card.color}`} />
                </div>
                <span className={`flex items-center gap-0.5 text-xs font-semibold ${card.trendUp ? "text-krishi-500" : "text-danger-500"}`}>
                  {card.trendUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {card.trend}
                </span>
              </div>
              <div className={`text-2xl font-bold ${card.color}`}>
                <AnimatedCounter end={card.value} duration={1500} decimals={card.title === "NDVI Score" ? 2 : 0} />
                <span className="text-sm font-normal text-muted-foreground ml-0.5">{card.unit}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{card.title}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Weather Widget */}
        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CloudSun className="w-5 h-5 text-sky-500" />
              <h3 className="font-semibold text-foreground text-sm">Weather Today</h3>
            </div>
            <Link href="/dashboard/farmer/weather" className="text-xs text-krishi-600 dark:text-krishi-400 hover:underline">
              View Details
            </Link>
          </div>
          <div className="text-center mb-4">
            <p className="text-4xl font-bold text-foreground">{weatherData.temp}<span className="text-xl">°C</span></p>
            <p className="text-sm text-muted-foreground">{weatherData.condition}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Droplets, label: "Humidity", value: `${weatherData.humidity}%` },
              { icon: Wind, label: "Wind", value: `${weatherData.wind} km/h` },
              { icon: Gauge, label: "Rain", value: `${weatherData.rainChance}%` },
              { icon: ThermometerSun, label: "UV Index", value: `${weatherData.uvIndex}` },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                <item.icon className="w-4 h-4 text-muted-foreground" />
                <div>
                  <p className="text-[10px] text-muted-foreground">{item.label}</p>
                  <p className="text-xs font-semibold text-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          {/* AI recommendation */}
          <div className="mt-4 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
            <p className="text-xs text-sky-700 dark:text-sky-300 font-medium flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              AI Recommendation: Good conditions for field preparation
            </p>
          </div>
        </GlassCard>

        {/* AI Alerts */}
        <GlassCard className="p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-earth-500" />
              <h3 className="font-semibold text-foreground text-sm">AI Alerts & Recommendations</h3>
            </div>
            <span className="text-xs px-2 py-0.5 rounded-full bg-danger-500/10 text-danger-500 font-medium">
              {alerts.length} active
            </span>
          </div>
          <div className="space-y-3">
            {alerts.map((alert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  alert.type === "warning" ? "bg-earth-500/10" :
                  alert.type === "danger" ? "bg-danger-500/10" :
                  alert.type === "info" ? "bg-sky-500/10" : "bg-krishi-500/10"
                }`}>
                  <alert.icon className={`w-4 h-4 ${
                    alert.type === "warning" ? "text-earth-500" :
                    alert.type === "danger" ? "text-danger-500" :
                    alert.type === "info" ? "text-sky-500" : "text-krishi-500"
                  }`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">{alert.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{alert.message}</p>
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0">{alert.time}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Weekly Health Chart */}
        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-krishi-500" />
              <h3 className="font-semibold text-foreground text-sm">Weekly Crop Health Trend</h3>
            </div>
            <span className="text-xs text-muted-foreground">Last 7 days</span>
          </div>
          <div className="flex items-end gap-2 h-44 pb-6 pt-4">
            {stateWeeklyHealth.map((val, i) => (
              <div
                key={i}
                className="flex-1 flex flex-col justify-end items-center gap-1.5 h-full"
              >
                <span className="text-[10px] text-muted-foreground font-medium">{val}%</span>
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-krishi-600 to-krishi-400 transition-all duration-700 ease-out"
                  style={{ height: `${val}%` }}
                />
                <span className="text-[10px] text-muted-foreground mt-1">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Activities */}
        <GlassCard className="p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <h3 className="font-semibold text-foreground text-sm">Recent Activities</h3>
            </div>
          </div>
          <div className="space-y-3">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-krishi-500 mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="text-[10px] text-muted-foreground shrink-0">{activity.time}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
