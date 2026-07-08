"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "gold" | "sky" | "custom";
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export function GradientText({
  children,
  className,
  variant = "primary",
  as: Component = "span",
}: GradientTextProps) {
  const variants = {
    primary: "bg-gradient-to-r from-krishi-400 via-krishi-500 to-krishi-600",
    gold: "bg-gradient-to-r from-earth-300 via-earth-500 to-earth-600",
    sky: "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600",
    custom: "",
  };

  return (
    <Component
      className={cn(
        "bg-clip-text text-transparent",
        variants[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
