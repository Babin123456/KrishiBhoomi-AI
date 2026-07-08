"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SectionWrapper, ScrollReveal } from "@/components/shared";

export function CTASection() {
  return (
    <SectionWrapper className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-krishi-500/10 rounded-full blur-3xl" />

      <ScrollReveal>
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Farm with AI?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of farmers across India who are already using AI to grow
            smarter, save water, detect diseases early, and increase their income.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white rounded-2xl gradient-primary shadow-2xl shadow-krishi-500/25 hover:shadow-krishi-500/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Get Started Free
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-foreground rounded-2xl glass hover:bg-muted/50 transition-all duration-300"
            >
              View All Features
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
