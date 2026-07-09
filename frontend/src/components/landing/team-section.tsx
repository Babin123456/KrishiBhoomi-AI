"use client";

import { Award } from "lucide-react";
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
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-[#24292e] dark:hover:text-white hover:bg-muted transition-colors border border-border"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-[#0077b5] hover:bg-muted transition-colors border border-border"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a
                  href={`mailto:${member.mail}`}
                  className="w-10 h-10 rounded-xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-[#ea4335] hover:bg-muted transition-colors border border-border"
                  aria-label="Send Email"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-7.99c.077-.282.22-.549.448-.756.452-.412 1.056-.638 1.688-.638h19.698c.633 0 1.235.226 1.688.638.228.207.371.474.448.756l-11.987 7.99zm0 2.444l12-8v10.843c0 .825-.335 1.62-.938 2.203-.603.582-1.42.91-2.274.91h-17.576c-.854 0-1.67-.328-2.273-.91-.603-.583-.939-1.378-.939-2.203v-10.843l12 8z"/>
                  </svg>
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
