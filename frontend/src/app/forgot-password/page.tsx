"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sprout,
  Mail,
  ChevronRight,
  ArrowLeft,
  KeyRound,
} from "lucide-react";
import { GlassCard } from "@/components/shared";


export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-krishi-500/10 rounded-full blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex items-center gap-2.5 justify-center mb-8">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
            <Sprout className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Krishi<span className="gradient-text">Bhoomi</span>
          </span>
        </div>

        <GlassCard className="p-8">
          {success ? (
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-krishi-500/10 flex items-center justify-center mx-auto text-krishi-500">
                <KeyRound className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Password Reset</h2>
              <p className="text-xs text-muted-foreground">
                Your password has been reset successfully. You can now login.
              </p>
              <Link
                href="/login"
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Go to Login
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ) : !otpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-foreground">Forgot Password</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Enter your email address to receive a verification OTP.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="farmer@example.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-krishi-500/50 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Send OTP Verification
                <ChevronRight className="w-4 h-4" />
              </button>

              <Link href="/login" className="flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors mt-2">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
              </Link>
            </form>
          ) : (
            <form onSubmit={handleResetPassword} className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-foreground">Enter Verification Code</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  OTP sent to {email}. Enter the code and set your new password.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">OTP Code</label>
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-krishi-500/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">New Password</label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-krishi-500/50 transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Reset Password
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </GlassCard>
      </motion.div>
    </div>
  );
}
