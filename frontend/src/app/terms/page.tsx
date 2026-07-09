"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, ShieldCheck, ArrowLeft } from "lucide-react";
import { GlassCard } from "@/components/shared";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-between py-12 px-6">
      {/* Background blobs */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-krishi-500/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto w-full relative z-10 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Krishi<span className="gradient-text">Bhoomi</span>
            </span>
          </Link>
          <Link href="/" className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        <GlassCard className="p-8 md:p-10 space-y-6">
          <div className="flex items-center gap-3 border-b border-border/50 pb-4">
            <ShieldCheck className="w-8 h-8 text-krishi-500" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">Terms of Service</h1>
              <p className="text-xs text-muted-foreground mt-0.5">Last Updated: July 2026</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <h2 className="text-base font-bold text-foreground mt-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using KrishiBhoomi AI (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree, please refrain from using the services.
            </p>

            <h2 className="text-base font-bold text-foreground mt-4">2. AI Predictions Disclaimer</h2>
            <p>
              KrishiBhoomi AI utilizes advanced machine learning algorithms (XGBoost, Convolutional Neural Networks) and Google Gemini API services to provide crop recommendations, disease detection diagnostics, and water scheduling parameters. All outputs are advisory in nature. Users must verify recommendations against local conditions and expert advice before making capital investments.
            </p>

            <h2 className="text-base font-bold text-foreground mt-4">3. Account & API Usage</h2>
            <p>
              You agree to provide accurate information when creating an account. Any brute forcing, scraping, or load testing of our FastAPI gateway endpoints will result in temporary or permanent IP bans and session terminations.
            </p>
          </div>
        </GlassCard>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-8">
        Built with care for Indian farmers. All rights reserved.
      </div>
    </div>
  );
}
