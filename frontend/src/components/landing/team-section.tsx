"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink, Mail, Users, Award } from "lucide-react";
import { SectionWrapper, SectionHeader, ScrollReveal, GlassCard } from "@/components/shared";

const teamMembers = [
  {
    name: "Babin Bid",
    role: "Full Stack & AI Engineer",
    gender: "boy",
    github: "https://github.com/Babin123456",
    linkedin: "https://www.linkedin.com/in/babinbid123/",
    mail: "babinbid05@gmail.com",
    initials: "BB",
  },
  {
    name: "Debasmita Bose",
    role: "GIS & Frontend Designer",
    gender: "girl",
    github: "https://github.com/DebasmitaBose0",
    linkedin: "https://www.linkedin.com/in/debasmita-bose2023/",
    mail: "dbose272@gmail.com",
    initials: "DB",
  },
];

export function TeamSection() {
  return (
    <SectionWrapper id="team" className="relative overflow-hidden">
      <ScrollReveal>
        <SectionHeader
          badge="Hackathon Team"
          title="Designed & Built by"
          titleHighlight="Team NoName"
          description="Built for the Build With AI program hosted by Hack2Skill. Metry-driven agricultural platform creators."
        />
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <GlassCard key={member.name} className="p-8 hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden group">
              {/* Corner abstract decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-krishi-500/5 rounded-bl-full group-hover:bg-krishi-500/10 transition-colors" />

              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Avatar Initials block */}
                <div className="w-16 h-16 rounded-2xl bg-krishi-500/10 text-krishi-600 dark:text-krishi-400 font-extrabold text-xl flex items-center justify-center shrink-0 border border-krishi-500/20 shadow-md">
                  {member.initials}
                </div>

                <div className="flex-1 text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-bold text-foreground flex items-center justify-center sm:justify-start gap-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-krishi-600 dark:text-krishi-400 font-semibold">{member.role}</p>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                    <Award className="w-3.5 h-3.5" /> Hack2Skill Participant
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-center sm:justify-start gap-4">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
                  aria-label="GitHub Profile"
                >
                  <Globe className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
                  aria-label="LinkedIn Profile"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${member.mail}`}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
