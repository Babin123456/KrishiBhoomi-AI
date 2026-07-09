"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 18 + 4;
      });
    }, 120);

    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(34,197,94,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(16,185,129,0.12) 0%, transparent 60%), #0a1a0d",
          }}
        >
          {/* Animated background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${(i % 3 + 1) * 2}px`,
                  height: `${(i % 3 + 1) * 2}px`,
                  background: `rgba(${i % 3 === 0 ? "34,197,94" : i % 3 === 1 ? "16,185,129" : "74,222,128"}, 0.4)`,
                  left: `${(i * 17) % 100}%`,
                  top: `${(i * 23) % 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 z-10"
          >
            {/* Logo with glow pulse */}
            <motion.div
              animate={{
                filter: [
                  "drop-shadow(0 0 16px rgba(34,197,94,0.4))",
                  "drop-shadow(0 0 40px rgba(34,197,94,0.9))",
                  "drop-shadow(0 0 16px rgba(34,197,94,0.4))",
                ],
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl">
                <Image
                  src="/KB-AI.png"
                  alt="KrishiBhoomi AI Logo"
                  fill
                  sizes="96px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Title */}
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold"
                style={{
                  background: "linear-gradient(135deg, #4ade80 0%, #22c55e 40%, #16a34a 70%, #86efac 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "'Cambria Math', 'Comic Sans MS', cursive",
                }}
              >
                KrishiBhoomi AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-sm text-green-400/70 mt-1 tracking-widest uppercase"
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                Empowering Every Farmer with AI
              </motion.p>
            </div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-2 items-center"
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-green-500"
                  animate={{ scale: [1, 1.6, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 0.9,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "220px" }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="relative"
            >
              <div className="w-[220px] h-1.5 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #22c55e, #4ade80, #86efac)",
                  }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <motion.p
                className="text-center text-xs text-green-500/60 mt-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{ fontFamily: "'Comic Sans MS', cursive" }}
              >
                Initializing AI systems...
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
