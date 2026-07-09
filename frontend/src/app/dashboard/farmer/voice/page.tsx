"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  MicOff,
  Volume2,
  Sparkles,
  Globe,
  Loader2,
} from "lucide-react";
import { GlassCard } from "@/components/shared";


const languages = [
  { name: "English", code: "en" },
  { name: "Hindi (हिंदी)", code: "hi" },
  { name: "Bengali (বাংলা)", code: "bn" },
  { name: "Tamil (தமிழ்)", code: "ta" },
  { name: "Telugu (తెలుగు)", code: "te" },
  { name: "Marathi (मराठी)", code: "mr" },
  { name: "Gujarati (ગુજરાતી)", code: "gu" },
  { name: "Kannada (ಕನ್ನಡ)", code: "kn" },
  { name: "Malayalam (മലയാളം)", code: "ml" },
  { name: "Punjabi (ਪੰਜਾਬੀ)", code: "pa" },
  { name: "Odia (ଓଡ଼ିଆ)", code: "or" },
];

export default function VoicePage() {
  const [selectedLang, setSelectedLang] = useState("hi");
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const startRecording = () => {
    setIsRecording(true);
    setTranscript(null);
    setResponse(null);
    // Simulate recording timeout
    setTimeout(() => {
      setIsRecording(false);
      setIsLoading(true);
      setTimeout(() => {
        setTranscript("गेहूं की फसल में यूरिया कब डालना चाहिए? (When should I apply urea in wheat?)");
        setResponse("गेहूं की फसल में यूरिया का पहला टॉप ड्रेसिंग बुवाई के 20-25 दिन बाद (CRI स्टेज पर) और दूसरा 40-45 दिन बाद करना चाहिए। प्रति एकड़ 40 किलोग्राम यूरिया का छिड़काव शाम के समय करें जब मिट्टी में हल्की नमी हो। (Urea should be top-dressed 20-25 days after sowing at CRI stage. Apply 40kg per acre.)");
        setIsLoading(false);
      }, 1500);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Mic className="w-6 h-6 text-purple-500" />
            Multilingual Voice Assistant
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Speak to KrishiBhoomi in your local language to get instant agronomy support
          </p>
        </div>
        
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground" />
          <select
            value={selectedLang}
            onChange={(e) => setSelectedLang(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-muted text-xs font-semibold text-foreground focus:outline-none border border-border"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Record trigger card */}
        <div className="md:col-span-1">
          <GlassCard className="p-6 flex flex-col items-center justify-center text-center h-80 space-y-6">
            <h3 className="text-sm font-bold text-foreground">Tap to Speak</h3>
            
            <button
              onClick={startRecording}
              disabled={isRecording || isLoading}
              className={`w-28 h-28 rounded-full flex items-center justify-center transition-all ${
                isRecording
                  ? "bg-danger-500 text-white animate-pulse-glow"
                  : "gradient-primary text-white hover:scale-105"
              } disabled:opacity-50`}
            >
              {isRecording ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
            </button>

            <span className="text-xs text-muted-foreground font-medium">
              {isRecording ? "Listening..." : "Click to speak query"}
            </span>
          </GlassCard>
        </div>

        {/* Translation and Assistant Output */}
        <div className="md:col-span-2 space-y-4">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center h-80 text-center"
              >
                <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
                <p className="text-sm text-foreground mt-3 font-semibold">Whisper Translation & Gemini Reasoning</p>
                <p className="text-xs text-muted-foreground">Transcribing query into native translation</p>
              </motion.div>
            )}

            {!isLoading && (transcript || response) && (
              <motion.div
                key="output"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4 h-full"
              >
                {/* Transcript */}
                <GlassCard className="p-5">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase">Transcript</span>
                  <p className="text-sm text-foreground font-medium mt-1">{transcript}</p>
                </GlassCard>

                {/* AI response */}
                <GlassCard className="p-5 bg-purple-500/5 border-purple-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Voice response
                    </span>
                    <button className="flex items-center gap-1.5 text-xs text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                      <Volume2 className="w-4 h-4" />
                      Listen Response
                    </button>
                  </div>
                  <p className="text-sm text-foreground mt-2 leading-relaxed">{response}</p>
                </GlassCard>
              </motion.div>
            )}

            {!transcript && !response && !isLoading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-80 border border-dashed border-border rounded-2xl text-center p-6"
              >
                <Mic className="w-10 h-10 text-muted-foreground/30 mb-3" />
                <h4 className="text-sm font-semibold text-foreground">No queries recorded</h4>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs">
                  Change the language, tap the microphone button, and voice your query in your local dialect.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
