"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "subtle" | "heavy" | "glow";
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  variant = "default",
  hover = false,
  onClick,
}: GlassCardProps) {
  const variants = {
    default: "glass",
    subtle: "glass-subtle",
    heavy: "glass-heavy",
    glow: "glass glow-green",
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        variants[variant],
        "rounded-2xl transition-all duration-300",
        hover && "hover:scale-[1.02] hover:shadow-lg cursor-pointer",
        onClick && "cursor-pointer",
        className
      )}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
}
