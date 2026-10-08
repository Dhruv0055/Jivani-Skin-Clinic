"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  UserCheck,
  Zap,
  Sparkles,
  FileCheck,
  BadgePercent,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function WhyChooseUsSection() {
  const [activeHighlight, setActiveHighlight] = useState<number>(0);
  const total = clinicData.whyChooseUs.length;

  // Auto-fading animation: changes active highlight every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(interval);
  }, [total]);

  const iconMap: Record<string, React.ReactNode> = {
    UserCheck: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
    Zap: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
    Sparkle: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />,
    FileCheck: <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />,
    BadgePercent: <BadgePercent className="w-5 h-5 sm:w-6 sm:h-6 text-accent-rose-gold" />,
    MapPin: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />,
  };

  const current = clinicData.whyChooseUs[activeHighlight];

  return (
    <section id="why-us" className="py-7 sm:py-12 bg-gradient-to-b from-[#FAF8F5] via-white to-[#FAF8F5] border-y border-clinic-border relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Jivani Standard"
          title="Why Choose Jivani Skin Clinic?"
          subtitle="Ethical medical standards and doctor-led care by Dr. Ruchi Goti in Mota Varachha, Surat."
        />

        {/* ── Compact Side-by-Side Auto-Fading Showcase (Mobile & Desktop Aligned) ── */}
        <div className="mt-4 sm:mt-8 max-w-2xl mx-auto min-h-[105px] sm:min-h-[120px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHighlight}
              initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full flex flex-row items-center gap-3 xs:gap-3.5 sm:gap-5 p-3.5 xs:p-4 sm:p-5 rounded-2xl bg-white border border-clinic-border shadow-xs hover:border-primary/30 transition-all text-left"
            >
              {/* Left: Icon & Indicator Number (Side-by-Side) */}
              <div className="shrink-0 flex flex-col items-center justify-center">
                <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-mint-tint border border-primary/25 flex items-center justify-center shadow-2xs">
                  {iconMap[current.icon] || <ShieldCheck className="w-5 h-5 text-primary" />}
                </div>
                <span className="text-[10px] font-bold text-primary tracking-wider mt-1">
                  0{activeHighlight + 1}/0{total}
                </span>
              </div>

              {/* Right: Title & Description (Side-by-Side) */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
                  <h3 className="font-heading text-[clamp(0.85rem,2.8vw,1rem)] font-bold text-slate-deep truncate">
                    {current.title}
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60 ml-auto shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>
                </div>
                <p className="text-[clamp(0.75rem,2.2vw,0.875rem)] text-slate-muted leading-relaxed line-clamp-2">
                  {current.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
