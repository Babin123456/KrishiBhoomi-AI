"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Send,
  Mic,
  User,
  Sprout,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "@/components/shared";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  timestamp: Date;
}

const suggestedQuestions = [
  "When should I irrigate my wheat field?",
  "Can I grow mustard in alluvial soil?",
  "Why are my tomato leaves turning yellow?",
  "Which fertilizer is suitable for wheat?",
  "Which government schemes can I apply for?",
  "How much rainfall is expected this month?",
];

const mockResponses: Record<string, { content: string; sources: string[] }> = {
  default: {
    content: "Based on your farm profile and current conditions, I can provide personalized recommendations. Your wheat crop in Lucknow is currently in the vegetative growth stage with good health indicators (NDVI: 0.72). The soil moisture is at 42%, which is adequate for this stage.\n\nHere are my key recommendations:\n\n1. **Irrigation**: Your next irrigation should be scheduled in 3 days based on current soil moisture depletion rate and weather forecast showing no significant rainfall.\n\n2. **Nutrition**: Consider applying 40 kg/ha urea as the first top dressing, as your crop is entering the tillering stage.\n\n3. **Monitoring**: Keep an eye on lower leaves for any early blight symptoms, as humidity levels have been elevated this week.\n\nWould you like more details on any of these points?",
    sources: ["ICAR Wheat Cultivation Guide", "IMD Weather Forecast - Lucknow", "Soil Health Card Database"],
  },
};

export default function CopilotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Namaste! I am your AI Farm Copilot, powered by KrishiBhoomi AI. I can help you with crop recommendations, weather analysis, disease identification, irrigation scheduling, market prices, and government schemes.\n\nI have access to your farm profile for personalized advice. Ask me anything about farming!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const msgCounterRef = useRef(2);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsgId = `msg-user-${msgCounterRef.current++}`;
    const userMessage: Message = {
      id: userMsgId,
      role: "user",
      content: text.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = mockResponses.default;
    const assistantMsgId = `msg-assistant-${msgCounterRef.current++}`;
    const assistantMessage: Message = {
      id: assistantMsgId,
      role: "assistant",
      content: response.content,
      sources: response.sources,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-8rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <MessageSquare className="w-6 h-6 text-purple-500" />
            AI Farm Copilot
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gemini-powered conversational assistant with RAG
          </p>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10">
          <Sparkles className="w-4 h-4 text-purple-500" />
          <span className="text-xs font-medium text-purple-600 dark:text-purple-400">RAG + Gemini</span>
        </div>
      </div>

      {/* Messages */}
      <GlassCard className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {/* Avatar */}
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                message.role === "user" ? "gradient-primary" : "bg-purple-500"
              }`}>
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-white" />
                ) : (
                  <Sprout className="w-4 h-4 text-white" />
                )}
              </div>

              {/* Content */}
              <div className={`max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                <div className={`inline-block p-4 rounded-2xl text-sm leading-relaxed ${
                  message.role === "user"
                    ? "bg-krishi-500 text-white rounded-tr-md"
                    : "bg-muted/50 text-foreground rounded-tl-md"
                }`}>
                  <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{
                    __html: message.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>')
                  }} />
                </div>

                {/* Sources */}
                {message.sources && message.sources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {message.sources.map((source, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        <BookOpen className="w-2.5 h-2.5" />
                        {source}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-[10px] text-muted-foreground mt-1.5">
                  {message.timestamp.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Typing indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-500 flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-muted/50 rounded-tl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length <= 1 && (
          <div className="px-4 pb-2">
            <p className="text-xs text-muted-foreground mb-2 font-medium">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-xs px-3 py-1.5 rounded-full glass hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  type SpeechRecognitionEvent = { results: { transcript: string }[][] };
                  type SpeechRecognitionErrorEvent = { error: string };
                  type SpeechRecognitionConstructor = new () => {
                      lang: string;
                      interimResults: boolean;
                      maxAlternatives: number;
                      start: () => void;
                      onresult: ((event: SpeechRecognitionEvent) => void) | null;
                      onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
                  };
                  const Win = window as unknown as { SpeechRecognition: SpeechRecognitionConstructor; webkitSpeechRecognition: SpeechRecognitionConstructor };
                  const SpeechRecognition = Win.SpeechRecognition || Win.webkitSpeechRecognition;
                  if (!SpeechRecognition) {
                    alert("Speech Recognition API is not supported in this browser. Please use Chrome/Edge.");
                    return;
                  }
                  const recognition = new SpeechRecognition();
                  recognition.lang = "en-IN";
                  recognition.interimResults = false;
                  recognition.maxAlternatives = 1;
                  
                  setInput("Listening...");
                  recognition.start();

                  recognition.onresult = (event: SpeechRecognitionEvent) => {
                    const speechToText = event.results[0][0].transcript;
                    setInput(speechToText);
                  };

                  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
                    console.error("Speech recognition error:", event.error);
                    setInput("");
                    alert("Voice detection failed. Please check microphone permissions.");
                  };
                }
              }}
              className="p-2.5 rounded-xl hover:bg-muted/50 text-muted-foreground hover:text-purple-500 transition-colors"
              aria-label="Voice input"
            >
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about farming..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-muted/30 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="p-2.5 rounded-xl gradient-primary text-white disabled:opacity-50 hover:shadow-lg transition-all"
              aria-label="Send message"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </GlassCard>
    </div>
  );
}
