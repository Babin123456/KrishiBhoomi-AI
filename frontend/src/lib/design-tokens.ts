/* ============================================
   KrishiBhoomi AI — Design Tokens
   Centralized theme constants
   ============================================ */

export const colors = {
  krishi: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },
  earth: {
    50: "#fefdf8",
    100: "#fef9e7",
    200: "#fdf0c8",
    300: "#fce4a0",
    400: "#f9d56c",
    500: "#f5c542",
    600: "#e0a80d",
    700: "#b8850a",
    800: "#96690f",
    900: "#7b5510",
  },
  sky: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
  },
} as const;

export const gradients = {
  primary: "linear-gradient(135deg, #22c55e, #16a34a, #15803d)",
  earth: "linear-gradient(135deg, #f5c542, #e0a80d, #b8850a)",
  sky: "linear-gradient(135deg, #38bdf8, #0ea5e9, #0284c7)",
  hero: "linear-gradient(135deg, hsl(142, 40%, 10%) 0%, hsl(142, 35%, 6%) 30%, hsl(160, 30%, 4%) 60%, hsl(142, 40%, 8%) 100%)",
  subtle: "linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(56, 189, 248, 0.05))",
} as const;

export const chartColors = {
  primary: "#22c55e",
  secondary: "#0ea5e9",
  tertiary: "#f5c542",
  quaternary: "#8b5cf6",
  danger: "#ef4444",
  warning: "#f97316",
  series: ["#22c55e", "#0ea5e9", "#f5c542", "#8b5cf6", "#f97316", "#ec4899", "#14b8a6", "#6366f1"],
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    default: "cubic-bezier(0.16, 1, 0.3, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

export const spacing = {
  section: "py-24 lg:py-32",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  containerWide: "max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8",
} as const;
