"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, GlassCard } from "@/components/shared";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Wheat Farmer",
    location: "Lucknow, Uttar Pradesh",
    quote: "KrishiBhoomi AI told me to switch from rice to mustard this season based on my soil analysis. My profit increased by 35% compared to last year. The crop recommendation engine truly understands local conditions.",
    metric: "35% more profit",
  },
  {
    name: "Priya Devi",
    role: "Vegetable Grower",
    location: "Nashik, Maharashtra",
    quote: "I detected early blight on my tomato plants just by taking a photo. The AI gave me both organic and chemical treatment options. I saved an entire acre of tomatoes from devastation.",
    metric: "Saved 1 acre",
  },
  {
    name: "Suresh Patel",
    role: "Cotton Farmer",
    location: "Rajkot, Gujarat",
    quote: "The irrigation intelligence module helped me reduce water usage by 42% without affecting yield. In a drought-prone region like ours, every drop of water matters. This technology is a blessing.",
    metric: "42% water saved",
  },
  {
    name: "Lakshmi Naidu",
    role: "Rice Farmer",
    location: "Warangal, Telangana",
    quote: "I can finally ask farming questions in Telugu using the voice assistant. It feels like having an agricultural scientist available 24/7 right on my phone. No more waiting for extension officers.",
    metric: "24/7 access",
  },
  {
    name: "Harinder Singh",
    role: "Wheat & Paddy Farmer",
    location: "Amritsar, Punjab",
    quote: "The market intelligence system told me to hold my wheat for two more weeks. The price went up by Rs 200 per quintal. That single recommendation earned me an extra Rs 40,000 this season.",
    metric: "Rs 40K extra",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setCurrent(index < 0 ? testimonials.length - 1 : index % testimonials.length);
  };

  return (
    <SectionWrapper className="bg-muted/30">
      <ScrollReveal>
        <SectionHeader
          badge="Testimonials"
          title="Trusted by Farmers"
          titleHighlight="Across India"
          description="Real stories of how AI-powered agriculture is transforming livelihoods and farming practices."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-8 sm:p-10 text-center relative">
                <Quote className="w-8 h-8 text-krishi-500/30 mx-auto mb-6" />
                <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg mb-2">
                    {testimonials[current].name[0]}
                  </div>
                  <h4 className="font-semibold text-foreground">{testimonials[current].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role} — {testimonials[current].location}
                  </p>
                  <span className="mt-2 text-sm font-bold text-krishi-600 dark:text-krishi-400 px-3 py-1 rounded-full bg-krishi-500/10">
                    {testimonials[current].metric}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-krishi-500 w-6" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
