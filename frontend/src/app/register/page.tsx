"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Sprout,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  User,
  Phone,
  MapPin,
  ChevronLeft,
} from "lucide-react";

const steps = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Farm Details" },
  { id: 3, title: "Security" },
];

const languages = [
  "English", "Hindi", "Bengali", "Tamil", "Telugu", "Marathi",
  "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia",
];

const soilTypes = [
  "Alluvial", "Black (Regur)", "Red", "Laterite", "Desert (Arid)",
  "Mountain", "Peaty", "Saline", "Clay", "Sandy", "Loamy",
];

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    language: "English",
    location: "",
    farmSize: "",
    soilType: "Alluvial",
    password: "",
    confirmPassword: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push("/dashboard/farmer");
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative gradient-hero items-center justify-center p-12">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-krishi-500/10 rounded-full blur-3xl" style={{ animation: "blob 7s infinite" }} />

        <div className="relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-krishi-500/25">
              <Sprout className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4">Join KrishiBhoomi AI</h1>
            <p className="text-lg text-muted-foreground dark:text-white/60 max-w-md">
              Start making smarter farming decisions with AI-powered intelligence today.
            </p>

            {/* Step indicator */}
            <div className="mt-12 flex items-center justify-center gap-4">
              {steps.map((s, i) => (
                <div key={s.id} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s.id ? "gradient-primary text-white" : "glass text-foreground/40 dark:text-white/40"
                  }`}>
                    {s.id}
                  </div>
                  <span className={`text-sm hidden sm:block ${step >= s.id ? "text-foreground dark:text-white" : "text-foreground/45 dark:text-white/40"}`}>
                    {s.title}
                  </span>
                  {i < steps.length - 1 && (
                    <div className={`w-8 h-px ${step > s.id ? "bg-krishi-500" : "bg-border dark:bg-white/20"}`} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-background">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Krishi<span className="gradient-text">Bhoomi</span>
            </span>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">
            {step === 1 ? "Create your account" : step === 2 ? "Farm details" : "Set password"}
          </h2>
          <p className="text-muted-foreground mb-8">
            Step {step} of 3 — {steps[step - 1].title}
          </p>

          {/* Mobile step indicator */}
          <div className="lg:hidden flex gap-1.5 mb-6">
            {steps.map((s) => (
              <div key={s.id} className={`flex-1 h-1 rounded-full transition-colors ${step >= s.id ? "bg-krishi-500" : "bg-border"}`} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {step === 1 && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="name" type="text" value={formData.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Enter your full name" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="farmer@example.com" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="phone" type="tel" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+91 98765 43210" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="language" className="block text-sm font-medium text-foreground mb-2">Preferred Language</label>
                  <select id="language" value={formData.language} onChange={(e) => updateField("language", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all">
                    {languages.map((lang) => (<option key={lang} value={lang}>{lang}</option>))}
                  </select>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">Farm Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="location" type="text" value={formData.location} onChange={(e) => updateField("location", e.target.value)} placeholder="Village, District, State" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="farmSize" className="block text-sm font-medium text-foreground mb-2">Farm Size (acres)</label>
                  <input id="farmSize" type="number" value={formData.farmSize} onChange={(e) => updateField("farmSize", e.target.value)} placeholder="e.g. 5" required className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
                <div>
                  <label htmlFor="soilType" className="block text-sm font-medium text-foreground mb-2">Soil Type</label>
                  <select id="soilType" value={formData.soilType} onChange={(e) => updateField("soilType", e.target.value)} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all">
                    {soilTypes.map((soil) => (<option key={soil} value={soil}>{soil}</option>))}
                  </select>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => updateField("password", e.target.value)} placeholder="Create a strong password" required className="w-full pl-10 pr-12 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label={showPassword ? "Hide" : "Show"}>
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-foreground mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={(e) => updateField("confirmPassword", e.target.value)} placeholder="Confirm your password" required className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3 pt-2">
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-foreground rounded-xl border border-border hover:bg-muted/50 transition-all">
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <button type="submit" disabled={isLoading} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70">
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {step < 3 ? "Continue" : "Create Account"}
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-krishi-600 dark:text-krishi-400 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
