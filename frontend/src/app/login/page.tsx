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
  Shield,
  Building2,
} from "lucide-react";


const roles = [
  { id: "farmer", label: "Farmer", icon: Sprout, description: "Access crop, weather, and market intelligence" },
  { id: "officer", label: "Officer", icon: Shield, description: "District-level analytics and monitoring" },
  { id: "admin", label: "Admin", icon: Building2, description: "Full platform management and analytics" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("farmer");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.detail || "Authentication failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("userName", data.user.name);
      localStorage.setItem("userRole", data.user.role);
      localStorage.setItem("userLanguage", data.user.language || "English");
      
      // Default initial farm details, will be populated on registration too
      localStorage.setItem("userState", data.user.state || "Uttar Pradesh");
      localStorage.setItem("userDistrict", data.user.district || "Lucknow");

      if (data.user.role === "officer") {
        router.push("/dashboard/district");
      } else {
        router.push("/dashboard/farmer");
      }
    } catch (err: any) {
      console.error(err);
      // Fallback for offline demo accounts
      if (email === "farmer@demo.com" && password === "demo123") {
        localStorage.setItem("token", "mock-farmer-token");
        localStorage.setItem("userName", "Rajesh Kumar");
        localStorage.setItem("userRole", "farmer");
        localStorage.setItem("userState", "Uttar Pradesh");
        localStorage.setItem("userDistrict", "Lucknow");
        localStorage.setItem("userLanguage", "English");
        router.push("/dashboard/farmer");
      } else if (email === "officer@demo.com" && password === "demo123") {
        localStorage.setItem("token", "mock-officer-token");
        localStorage.setItem("userName", "Officer Amit");
        localStorage.setItem("userRole", "officer");
        localStorage.setItem("userState", "Uttar Pradesh");
        localStorage.setItem("userDistrict", "Lucknow");
        localStorage.setItem("userLanguage", "English");
        router.push("/dashboard/district");
      } else {
        alert(err.message || "Invalid email or password");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative gradient-hero items-center justify-center p-12">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-krishi-500/10 rounded-full blur-3xl" style={{ animation: "blob 7s infinite" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-500/8 rounded-full blur-3xl" style={{ animation: "blob 7s infinite 3s" }} />

        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 rounded-3xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-krishi-500/25">
              <Sprout className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4">
              Krishi<span className="gradient-text">Bhoomi</span> AI
            </h1>
            <p className="text-lg text-muted-foreground dark:text-white/60 max-w-md">
              One Intelligent Platform for Every Farmer. Access AI-powered agricultural intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-8 bg-background">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo & Go Home Option */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Krishi<span className="gradient-text">Bhoomi</span>
              </span>
            </div>
            <Link
              href="/"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg border border-border hover:bg-muted/50 transition-all"
            >
              Go to Home
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-2">Welcome back</h2>
          <p className="text-muted-foreground mb-8 font-medium">Sign in to access your farm dashboard</p>

          {/* Role Selector */}
          <div className="grid grid-cols-3 gap-2 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 text-center ${
                  selectedRole === role.id
                    ? "border-krishi-500 bg-krishi-500/10"
                    : "border-border hover:border-krishi-500/30 hover:bg-muted/50"
                }`}
              >
                <role.icon className={`w-5 h-5 mx-auto mb-1.5 ${selectedRole === role.id ? "text-krishi-500" : "text-muted-foreground"}`} />
                <span className={`text-xs font-medium ${selectedRole === role.id ? "text-krishi-600 dark:text-krishi-400" : "text-muted-foreground"}`}>
                  {role.label}
                </span>
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="farmer@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-foreground">
                  Password
                </label>
                <Link href="/forgot-password" className="text-xs text-krishi-600 dark:text-krishi-400 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Sign In
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Demo accounts */}
          <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-border">
            <p className="text-xs font-medium text-muted-foreground mb-2">Demo Accounts</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>Farmer: farmer@demo.com / demo123</p>
              <p>Officer: officer@demo.com / demo123</p>
              <p>Admin: admin@demo.com / demo123</p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-krishi-600 dark:text-krishi-400 font-medium hover:underline">
              Create account
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
