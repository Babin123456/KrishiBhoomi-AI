"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-24 lg:py-32 relative", className)}>
      {fullWidth ? (
        children
      ) : (
        <div
          className={cn(
            "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            containerClassName
          )}
        >
          {children}
        </div>
      )}
    </section>
  );
}

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16 lg:mb-20",
        align === "center" && "text-center max-w-3xl mx-auto",
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-krishi-600 dark:text-krishi-400 mb-6">
          <span className="w-2 h-2 rounded-full bg-krishi-500 animate-pulse-glow" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text">{titleHighlight}</span>
        )}
      </h2>
      {description && (
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
