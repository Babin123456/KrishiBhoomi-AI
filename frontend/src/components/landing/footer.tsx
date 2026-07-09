"use client";

import Link from "next/link";
import { Sprout, Globe, ExternalLink, Send, Mail } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Technology", href: "#technology" },
    { label: "FAQ", href: "#faq" },
  ],
  Resources: [
    { label: "Code Repository Docs", href: "https://github.com/Babin123456/KrishiBhoomi-AI" },
    { label: "Local Setup Guide", href: "https://github.com/Babin123456/KrishiBhoomi-AI/blob/main/INSTRUCTIONS.md" },
    { label: "System Architecture", href: "https://github.com/Babin123456/KrishiBhoomi-AI/blob/main/ARCHITECTURE.md" },
    { label: "Farmer Portal", href: "/login" },
  ],
  Company: [
    { label: "Project Home", href: "/" },
    { label: "Get Started", href: "/register" },
    { label: "Privacy Policy", href: "/privacy.md" },
    { label: "Terms of Service", href: "/terms.md" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "https://github.com", label: "GitHub" },
  { icon: Send, href: "https://twitter.com", label: "Twitter" },
  { icon: ExternalLink, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:contact@krishibhoomi.ai", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-krishi-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Krishi<span className="gradient-text">Bhoomi</span>
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground -mt-0.5">
                  AI Platform
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-6">
              One Intelligent Platform for Every Farmer. AI-powered crop recommendations,
              weather intelligence, disease detection, and market analytics.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} KrishiBhoomi AI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with care for Indian farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
