"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ChevronRight,
  Satellite,
  Brain,
  Droplets,
  TrendingUp,
  Shield,
} from "lucide-react";
import { AnimatedCounter } from "@/components/shared";

const stats = [
  { label: "Farmers Supported", value: 50000, suffix: "+" },
  { label: "Predictions Generated", value: 1200000, suffix: "+" },
  { label: "Crops Monitored", value: 120, suffix: "+" },
  { label: "Disease Detection Accuracy", value: 94, suffix: "%" },
  { label: "Water Saved", value: 40, suffix: "%" },
];

const floatingIcons = [
  { Icon: Satellite, x: "10%", y: "20%", delay: 0, color: "text-sky-400" },
  { Icon: Brain, x: "85%", y: "15%", delay: 0.5, color: "text-krishi-400" },
  { Icon: Droplets, x: "75%", y: "70%", delay: 1, color: "text-sky-300" },
  { Icon: TrendingUp, x: "15%", y: "75%", delay: 1.5, color: "text-earth-400" },
  { Icon: Shield, x: "90%", y: "50%", delay: 2, color: "text-krishi-300" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 gradient-mesh opacity-60" />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-krishi-500/10 rounded-full blur-3xl" style={{ animation: "blob 7s infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/8 rounded-full blur-3xl" style={{ animation: "blob 7s infinite 2s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-earth-500/6 rounded-full blur-3xl" style={{ animation: "blob 7s infinite 4s" }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block ${color} opacity-20`}
          style={{ left: x, top: y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-krishi-400 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-krishi-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-krishi-500" />
            </span>
            AI-Powered Agricultural Intelligence
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
          >
            One Intelligent Platform
            <br />
            <span className="gradient-text">for Every Farmer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering farmers with AI-driven crop recommendations, real-time weather intelligence,
            disease detection, satellite monitoring, and market analytics — all in one platform.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/register"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-primary shadow-2xl shadow-krishi-500/25 hover:shadow-krishi-500/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Start Free Trial
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-2xl gradient-primary opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white/90 rounded-2xl glass hover:bg-white/10 transition-all duration-300"
            >
              Explore Features
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 text-center hover:scale-[1.05] transition-transform duration-300"
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000 + i * 200}
                  />
                </div>
                <div className="mt-1.5 text-xs sm:text-sm text-white/50 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
