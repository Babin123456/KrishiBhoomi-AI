"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wheat,
  Sprout,
  Droplets,
  ThermometerSun,
  Zap,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Loader2,
  ChevronRight,
  Info,
  Beaker,
  CloudRain,
  Layers,
} from "lucide-react";
import { GlassCard, GradientText } from "@/components/shared";

const soilTypes = ["Alluvial", "Black (Regur)", "Red", "Laterite", "Clay", "Sandy", "Loamy"];

interface CropResult {
  crop: string;
  confidence: number;
  yield: string;
  profit: string;
  waterReq: string;
  riskLevel: string;
  explanation: string;
  alternatives: Array<{ crop: string; confidence: number; yield: string }>;
  featureImportance: Array<{ feature: string; importance: number }>;
}

const mockResult: CropResult = {
  crop: "Wheat",
  confidence: 92,
  yield: "4.2 tonnes/hectare",
  profit: "Rs 85,000 - 1,10,000",
  waterReq: "450-650 mm",
  riskLevel: "Low",
  explanation: "Based on your alluvial soil with pH 6.8, moderate nitrogen (240 kg/ha), good phosphorus levels, and the expected winter rainfall pattern, Wheat is the optimal crop for your region. The soil's nutrient profile and the favorable Rabi season conditions in Lucknow support high wheat yields. Market trends show steady demand with prices trending upward by 5.2% this quarter.",
  alternatives: [
    { crop: "Mustard", confidence: 85, yield: "1.8 tonnes/ha" },
    { crop: "Barley", confidence: 78, yield: "3.5 tonnes/ha" },
    { crop: "Chickpea", confidence: 72, yield: "2.0 tonnes/ha" },
  ],
  featureImportance: [
    { feature: "Soil Type", importance: 0.22 },
    { feature: "Rainfall", importance: 0.18 },
    { feature: "Temperature", importance: 0.16 },
    { feature: "Nitrogen", importance: 0.14 },
    { feature: "pH Level", importance: 0.12 },
    { feature: "Market Trend", importance: 0.08 },
    { feature: "Phosphorus", importance: 0.05 },
    { feature: "Potassium", importance: 0.05 },
  ],
};

export default function CropRecommendationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CropResult | null>(null);
  const [formData, setFormData] = useState({
    soilType: "Alluvial",
    ph: "6.8",
    nitrogen: "240",
    phosphorus: "28",
    potassium: "200",
    rainfall: "800",
    temperature: "26",
    groundwater: "12",
    farmSize: "5",
    previousCrop: "Rice",
    marketTrend: "Stable",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setResult(mockResult);
    setIsLoading(false);
  };

  const maxImportance = Math.max(...(result?.featureImportance.map((f) => f.importance) || [1]));

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Wheat className="w-6 h-6 text-krishi-500" />
          Smart Crop Recommendation
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          AI-powered crop selection based on soil analysis, weather patterns, and market trends
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Input Form */}
        <div className="lg:col-span-2">
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
              <Beaker className="w-5 h-5 text-krishi-500" />
              Input Parameters
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Soil Type */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Soil Type</label>
                <select value={formData.soilType} onChange={(e) => updateField("soilType", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all">
                  {soilTypes.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              {/* pH and NPK */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">pH Level</label>
                  <input type="number" step="0.1" value={formData.ph} onChange={(e) => updateField("ph", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Nitrogen (kg/ha)</label>
                  <input type="number" value={formData.nitrogen} onChange={(e) => updateField("nitrogen", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Phosphorus (kg/ha)</label>
                  <input type="number" value={formData.phosphorus} onChange={(e) => updateField("phosphorus", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Potassium (kg/ha)</label>
                  <input type="number" value={formData.potassium} onChange={(e) => updateField("potassium", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
              </div>

              {/* Climate */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Rainfall (mm)</label>
                  <input type="number" value={formData.rainfall} onChange={(e) => updateField("rainfall", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Temperature (C)</label>
                  <input type="number" value={formData.temperature} onChange={(e) => updateField("temperature", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Groundwater (m)</label>
                  <input type="number" value={formData.groundwater} onChange={(e) => updateField("groundwater", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5">Farm Size (acres)</label>
                  <input type="number" value={formData.farmSize} onChange={(e) => updateField("farmSize", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">Previous Crop</label>
                <input type="text" value={formData.previousCrop} onChange={(e) => updateField("previousCrop", e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:ring-2 focus:ring-krishi-500/50 focus:border-krishi-500 transition-all" />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl gradient-primary shadow-lg hover:shadow-krishi-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" />
                    Get AI Recommendation
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-4">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 animate-pulse-glow">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">AI is analyzing your farm data...</p>
                <p className="text-xs text-muted-foreground mt-1">Processing soil, weather, and market parameters</p>
              </motion.div>
            )}

            {result && !isLoading && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {/* Primary Result */}
                <GlassCard variant="glow" className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Recommended Crop</p>
                      <h2 className="text-3xl font-bold text-foreground mt-1">{result.crop}</h2>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-krishi-500">{result.confidence}%</div>
                      <p className="text-xs text-muted-foreground">Confidence</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {[
                      { label: "Expected Yield", value: result.yield, icon: BarChart3 },
                      { label: "Est. Profit", value: result.profit, icon: TrendingUp },
                      { label: "Water Needed", value: result.waterReq, icon: Droplets },
                      { label: "Risk Level", value: result.riskLevel, icon: AlertTriangle },
                    ].map((item) => (
                      <div key={item.label} className="p-3 rounded-xl bg-muted/50">
                        <item.icon className="w-4 h-4 text-muted-foreground mb-1" />
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="text-sm font-semibold text-foreground mt-0.5">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* AI Explanation */}
                  <div className="p-4 rounded-xl bg-krishi-500/5 border border-krishi-500/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="w-4 h-4 text-krishi-500" />
                      <p className="text-xs font-semibold text-krishi-600 dark:text-krishi-400 uppercase tracking-wider">AI Explanation</p>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{result.explanation}</p>
                  </div>
                </GlassCard>

                {/* Feature Importance */}
                <GlassCard className="p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-krishi-500" />
                    Feature Importance (Why this crop?)
                  </h3>
                  <div className="space-y-3">
                    {result.featureImportance.map((f) => (
                      <div key={f.feature} className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-24 shrink-0">{f.feature}</span>
                        <div className="flex-1 h-6 bg-muted/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(f.importance / maxImportance) * 100}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-krishi-500 to-krishi-400 rounded-full flex items-center justify-end pr-2"
                          >
                            <span className="text-[10px] font-bold text-white">{(f.importance * 100).toFixed(0)}%</span>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Alternative Crops */}
                <GlassCard className="p-6">
                  <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Sprout className="w-4 h-4 text-krishi-500" />
                    Alternative Crops
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {result.alternatives.map((alt) => (
                      <div key={alt.crop} className="p-4 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors">
                        <h4 className="font-semibold text-foreground">{alt.crop}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-muted-foreground">Confidence</span>
                          <span className="text-sm font-bold text-krishi-500">{alt.confidence}%</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">Yield</span>
                          <span className="text-xs font-medium text-foreground">{alt.yield}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {!result && !isLoading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-20 h-20 rounded-3xl bg-muted/50 flex items-center justify-center mb-4">
                  <Wheat className="w-10 h-10 text-muted-foreground/50" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Ready to Recommend</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Fill in your soil parameters and farm details, then click &quot;Get AI Recommendation&quot; to receive personalized crop suggestions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
