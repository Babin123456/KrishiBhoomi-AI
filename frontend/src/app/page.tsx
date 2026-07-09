import {
  Navbar,
  HeroSection,
  ProblemSection,
  SolutionSection,
  AIWorkflowSection,
  FeaturesSection,
  DashboardPreviewSection,
  ComparisonSection,
  TechStackSection,
  FutureVisionSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
  Footer,
  TeamSection,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AIWorkflowSection />
      <FeaturesSection />
      <DashboardPreviewSection />
      <ComparisonSection />
      <TechStackSection />
      <FutureVisionSection />
      <TestimonialsSection />
      <FAQSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  );
}
