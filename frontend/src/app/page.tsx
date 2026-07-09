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
import { BackToTop } from "@/components/shared";

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
      <BackToTop />
    </main>
  );
}
