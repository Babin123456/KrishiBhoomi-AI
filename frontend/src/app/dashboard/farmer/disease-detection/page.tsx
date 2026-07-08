"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope,
  Upload,
  ImagePlus,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  Leaf,
  Shield,
  Beaker,
  Clock,
  Info,
  X,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

interface DiseaseResult {
  disease: string;
  confidence: number;
  severity: "Low" | "Medium" | "High" | "Critical";
  cause: string;
  symptoms: string[];
  organicTreatment: string[];
  chemicalTreatment: string[];
  recoveryTime: string;
  preventiveMeasures: string[];
  explanation: string;
}

const mockResult: DiseaseResult = {
  disease: "Early Blight (Alternaria solani)",
  confidence: 94.7,
  severity: "Medium",
  cause: "Fungal infection caused by Alternaria solani, thriving in warm (24-29 C) and humid conditions. Often spread through contaminated soil, water splash, and infected plant debris.",
  symptoms: [
    "Dark brown concentric ring spots on lower leaves",
    "Yellowing around lesion margins",
    "Premature leaf drop starting from bottom",
    "Small dark lesions on stems",
  ],
  organicTreatment: [
    "Apply neem oil spray (2ml/L) every 7 days",
    "Use Trichoderma viride bio-fungicide as soil application",
    "Spray copper-based Bordeaux mixture (1%)",
    "Remove and destroy infected plant debris",
  ],
  chemicalTreatment: [
    "Mancozeb 75% WP (2g/L) foliar spray",
    "Chlorothalonil 75% WP (2g/L)",
    "Azoxystrobin 23% SC (1ml/L) for severe cases",
    "Alternate fungicides to prevent resistance",
  ],
  recoveryTime: "14-21 days with proper treatment",
  preventiveMeasures: [
    "Practice crop rotation (3-year cycle)",
    "Maintain proper plant spacing for air circulation",
    "Avoid overhead irrigation",
    "Use certified disease-free seeds",
    "Apply mulch to prevent soil splash",
    "Remove volunteer plants and weeds",
  ],
  explanation: "The image shows characteristic concentric ring pattern (bull's eye lesions) on tomato leaves, which is a hallmark of Early Blight caused by Alternaria solani. The brown spots with distinct concentric rings on the lower leaves, combined with the yellowing halo around the lesions, confirm this diagnosis with 94.7% confidence. Current warm and humid weather conditions in your region are favorable for disease progression. Immediate treatment is recommended to prevent spread to upper canopy and fruit.",
};

export default function DiseaseDetectionPage() {
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiseaseResult | null>(null);
  const [activeTab, setActiveTab] = useState<"organic" | "chemical">("organic");

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  }, [handleFile]);

  const handleAnalyze = async () => {
    if (!image) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setResult(mockResult);
    setIsLoading(false);
  };

  const severityColor = {
    Low: "text-krishi-500 bg-krishi-500/10",
    Medium: "text-earth-600 bg-earth-500/10",
    High: "text-warm-500 bg-warm-500/10",
    Critical: "text-danger-500 bg-danger-500/10",
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Microscope className="w-6 h-6 text-danger-500" />
          Disease Detection
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Upload a photo of affected crops for instant AI-powered diagnosis and treatment plan
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <ImagePlus className="w-5 h-5 text-muted-foreground" />
              Upload Crop Image
            </h2>

            {/* Drag & Drop Zone */}
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                isDragging ? "border-krishi-500 bg-krishi-500/5" : "border-border hover:border-krishi-500/50 hover:bg-muted/30"
              }`}
            >
              {image ? (
                <div className="relative">
                  <img src={image} alt="Uploaded crop" className="max-h-64 mx-auto rounded-xl object-cover" />
                  <button
                    onClick={() => { setImage(null); setResult(null); }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-danger-500/10 transition-colors"
                    aria-label="Remove image"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ) : (
                <div className="py-8">
                  <Upload className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Drag and drop your crop image here
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">or click to browse</p>
                  <label className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-foreground rounded-xl border border-border hover:bg-muted/50 cursor-pointer transition-colors">
                    <ImagePlus className="w-4 h-4" />
                    Choose File
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    />
                  </label>
                </div>
              )}
            </div>

            {image && (
              <button
                onClick={handleAnalyze}
                disabled={isLoading}
                className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Detect Disease
                  </>
                )}
              </button>
            )}
          </GlassCard>

          {/* Pipeline info */}
          <GlassCard className="p-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">AI Pipeline</p>
            <div className="flex items-center gap-2 text-xs">
              {["Image Upload", "EfficientNet CNN", "Classification", "Gemini Explanation"].map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-md ${
                    isLoading && i <= 2 ? "bg-krishi-500/10 text-krishi-600 dark:text-krishi-400" : "bg-muted text-muted-foreground"
                  }`}>
                    {step}
                  </span>
                  {i < 3 && <span className="text-muted-foreground">→</span>}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Results Section */}
        <div>
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center py-20">
                <div className="w-16 h-16 rounded-2xl bg-danger-500/10 flex items-center justify-center mb-4 animate-pulse-glow">
                  <Microscope className="w-8 h-8 text-danger-500" />
                </div>
                <p className="text-sm font-medium text-foreground">Analyzing crop image...</p>
                <p className="text-xs text-muted-foreground mt-1">Running CNN classification and AI explanation</p>
              </motion.div>
            )}

            {result && !isLoading && (
              <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                {/* Disease Header */}
                <GlassCard className="p-6 border-danger-500/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Disease Detected</p>
                      <h2 className="text-xl font-bold text-foreground mt-1">{result.disease}</h2>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${severityColor[result.severity]}`}>
                        {result.severity} Severity
                      </span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-danger-500">{result.confidence}%</div>
                        <p className="text-[10px] text-muted-foreground">Confidence</p>
                      </div>
                    </div>
                  </div>

                  {/* AI Explanation */}
                  <div className="p-4 rounded-xl bg-muted/30 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-krishi-500" />
                      <p className="text-xs font-semibold text-krishi-600 dark:text-krishi-400 uppercase tracking-wider">AI Analysis</p>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{result.explanation}</p>
                  </div>
                </GlassCard>

                {/* Symptoms & Cause */}
                <GlassCard className="p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-danger-400" />
                    Symptoms
                  </h3>
                  <ul className="space-y-2">
                    {result.symptoms.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-danger-400 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                {/* Treatment Tabs */}
                <GlassCard className="p-5">
                  <div className="flex items-center gap-4 mb-4">
                    <button onClick={() => setActiveTab("organic")} className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${activeTab === "organic" ? "bg-krishi-500/10 text-krishi-600 dark:text-krishi-400" : "text-muted-foreground hover:text-foreground"}`}>
                      <Leaf className="w-4 h-4 inline mr-1" />Organic Treatment
                    </button>
                    <button onClick={() => setActiveTab("chemical")} className={`text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${activeTab === "chemical" ? "bg-sky-500/10 text-sky-600 dark:text-sky-400" : "text-muted-foreground hover:text-foreground"}`}>
                      <Beaker className="w-4 h-4 inline mr-1" />Chemical Treatment
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {(activeTab === "organic" ? result.organicTreatment : result.chemicalTreatment).map((t, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${activeTab === "organic" ? "text-krishi-500" : "text-sky-500"}`} />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-2 p-3 rounded-xl bg-muted/50">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Recovery Time:</span>
                    <span className="text-xs font-semibold text-foreground">{result.recoveryTime}</span>
                  </div>
                </GlassCard>

                {/* Prevention */}
                <GlassCard className="p-5">
                  <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-krishi-500" />
                    Preventive Measures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {result.preventiveMeasures.map((p, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground p-2 rounded-lg bg-muted/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-krishi-500 mt-0.5 shrink-0" />
                        {p}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {!result && !isLoading && (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-3xl bg-muted/50 flex items-center justify-center mb-4">
                  <Microscope className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Upload a Crop Image</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Take a photo of affected leaves, stems, or fruits. Our AI will identify the disease and provide a complete treatment plan.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
