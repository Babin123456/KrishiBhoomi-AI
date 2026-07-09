import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KrishiBhoomi AI — One Intelligent Platform for Every Farmer",
    template: "%s | KrishiBhoomi AI",
  },
  description:
    "AI-powered multilingual agricultural intelligence platform for crop recommendations, weather forecasting, disease detection, satellite monitoring, and market analytics.",
  keywords: [
    "agriculture",
    "AI",
    "farming",
    "crop recommendation",
    "disease detection",
    "weather intelligence",
    "satellite monitoring",
    "market analytics",
    "Indian farmers",
    "smart farming",
  ],
  authors: [{ name: "KrishiBhoomi AI Team" }],
  openGraph: {
    title: "KrishiBhoomi AI — One Intelligent Platform for Every Farmer",
    description:
      "Empowering farmers with AI-driven crop recommendations, real-time weather intelligence, disease detection, satellite monitoring, and market analytics.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: "/KB-AI.png",
    shortcut: "/KB-AI.png",
    apple: "/KB-AI.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a1a0d" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
