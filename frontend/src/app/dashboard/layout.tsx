"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sprout,
  LayoutDashboard,
  CloudSun,
  Droplets,
  Microscope,
  Satellite,
  Mic,
  TrendingUp,
  MessageSquare,
  Bell,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  ChevronLeft,
  Wheat,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/dashboard/farmer", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/farmer/crop-recommendation", label: "Crop AI", icon: Wheat },
  { href: "/dashboard/farmer/weather", label: "Weather", icon: CloudSun },
  { href: "/dashboard/farmer/irrigation", label: "Irrigation", icon: Droplets },
  { href: "/dashboard/farmer/disease-detection", label: "Disease AI", icon: Microscope },
  { href: "/dashboard/farmer/satellite", label: "Satellite", icon: Satellite },
  { href: "/dashboard/farmer/voice", label: "Voice", icon: Mic },
  { href: "/dashboard/farmer/market", label: "Market", icon: TrendingUp },
  { href: "/dashboard/farmer/copilot", label: "AI Copilot", icon: MessageSquare },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  const [userName] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("userName") || "Babin Bid";
    }
    return "Babin Bid";
  });

  // Run on mount
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Extract initials dynamically
  const userInitials = userName
    .split(" ")
    .map((namePart) => namePart.charAt(0))
    .join("")
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "hidden lg:flex flex-col border-r border-border/50 glass-heavy transition-all duration-300 shrink-0",
          collapsed ? "w-[72px]" : "w-64"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-4 py-5 border-b border-border/50">
          <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shrink-0">
            <Sprout className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col min-w-0">
              <span className="text-sm font-bold tracking-tight text-foreground truncate">
                Krishi<span className="gradient-text">Bhoomi</span>
              </span>
              <span className="text-[9px] font-medium tracking-widest uppercase text-muted-foreground">
                AI Platform
              </span>
            </motion.div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto p-1.5 rounded-lg hover:bg-muted/50 text-muted-foreground transition-colors shrink-0"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <ChevronLeft className={cn("w-4 h-4 transition-transform", collapsed && "rotate-180")} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto no-scrollbar">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-krishi-500/10 text-krishi-600 dark:text-krishi-400 shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-krishi-500")} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="p-2 border-t border-border/50 space-y-1">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            {mounted ? (
              theme === "dark" ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />
            ) : (
              <div className="w-5 h-5 shrink-0 rounded-full border border-muted-foreground/30 animate-pulse" />
            )}
            {!collapsed && <span>{mounted && theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
          </button>
          <Link
            href="/login"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-danger-500 hover:bg-danger-500/10 transition-colors"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!collapsed && <span>Sign Out</span>}
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b border-border/50 glass shrink-0">
          {/* Mobile menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 text-muted-foreground"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Page title */}
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-foreground">
              {navigation.find((n) => n.href === pathname)?.label || "Dashboard"}
            </h1>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-lg hover:bg-muted/50 text-muted-foreground transition-colors" aria-label="Notifications">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-krishi-500 rounded-full" />
            </button>
             <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-xs font-bold">
              {userInitials}
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-72 z-50 bg-background border-r border-border/50 flex flex-col lg:hidden"
            >
              <div className="flex items-center justify-between px-4 py-5 border-b border-border/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-bold text-foreground">
                    Krishi<span className="gradient-text">Bhoomi</span>
                  </span>
                </div>
                <button onClick={() => setSidebarOpen(false)} className="p-2 rounded-lg hover:bg-muted/50 text-muted-foreground" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all",
                        isActive
                          ? "bg-krishi-500/10 text-krishi-600 dark:text-krishi-400"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5", isActive && "text-krishi-500")} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
