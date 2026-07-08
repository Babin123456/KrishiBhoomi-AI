"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/shared";

const faqs = [
  {
    question: "How does KrishiBhoomi AI recommend the right crop?",
    answer: "Our AI uses an XGBoost machine learning model trained on Indian agricultural data. It analyzes 12+ parameters including soil type, pH, NPK values, rainfall, temperature, groundwater level, farm size, previous crops, and current market trends to recommend the optimal crop with confidence scores, expected yield, estimated profit, and risk assessment.",
  },
  {
    question: "Do I need internet access to use the platform?",
    answer: "While most AI features require an internet connection for real-time analysis, we are building offline capabilities that cache critical data like weather forecasts, crop recommendations, and disease detection models locally. SMS-based alerts work even without internet access.",
  },
  {
    question: "Which languages are supported for voice commands?",
    answer: "KrishiBhoomi AI supports 11 Indian languages: English, Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and Odia. Our voice pipeline uses OpenAI Whisper for transcription and Google Gemini for generating intelligent responses in your preferred language.",
  },
  {
    question: "How accurate is the crop disease detection?",
    answer: "Our EfficientNet-based CNN model achieves 94% accuracy across 38 disease classes spanning 14 crops. The model is trained on the PlantVillage dataset and enhanced with additional Indian crop disease images. Each diagnosis includes confidence scores, treatment plans, and AI-generated explanations via Gemini.",
  },
  {
    question: "Is my farm data secure and private?",
    answer: "Absolutely. All data is encrypted at rest and in transit using industry-standard protocols. We use JWT-based authentication, role-based access control (RBAC), rate limiting, CSRF protection, and comprehensive audit logging. Your farm data is never shared with third parties without explicit consent.",
  },
  {
    question: "Can district officers and administrators use this platform?",
    answer: "Yes. KrishiBhoomi AI provides role-based dashboards for farmers, agricultural officers, and district administrators. Officers get access to district-level analytics including disease hotspot maps, water stress analysis, crop distribution data, weather alert summaries, and village-level performance rankings.",
  },
  {
    question: "How does the satellite monitoring work?",
    answer: "We process Sentinel-2 satellite imagery to compute vegetation indices like NDVI (Normalized Difference Vegetation Index), EVI, and moisture indices. These are visualized on interactive maps showing field-level health zones, growth timelines, and historical comparisons to track crop development over time.",
  },
  {
    question: "Is KrishiBhoomi AI free for farmers?",
    answer: "The core features including crop recommendations, weather intelligence, and the AI copilot are free for individual farmers. Premium features like advanced satellite monitoring, market predictions, and priority voice support are available through affordable subscription plans designed for Indian farmers.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <ScrollReveal>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Everything you need to know about KrishiBhoomi AI and how it can help transform your farming practices."
        />
      </ScrollReveal>

      <StaggerContainer className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <StaggerItem key={index}>
            <div className="glass rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/30 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-sm sm:text-base font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-border/50">
                      <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  );
}
