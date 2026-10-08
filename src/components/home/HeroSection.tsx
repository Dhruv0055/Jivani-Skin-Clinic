"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { clinicData } from "@/data/clinic";
import { useLanguage } from "@/components/context/LanguageContext";
import {
  Calendar,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  ShieldCheck,
  Heart,
  Droplets,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  const { t } = useLanguage();

  const clinicVibeChips = [
    { label: "US-FDA Approved Lasers", icon: <Sparkles className="w-3.5 h-3.5 text-accent-rose-gold" /> },
    { label: "Gentle on Indian Skin", icon: <Droplets className="w-3.5 h-3.5 text-primary" /> },
    { label: "Doctor-Led Care", icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> },
    { label: "Hospital-Grade Hygiene", icon: <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> },
  ];

  return (
    <section id="hero" className="relative pt-4 pb-9 sm:pt-10 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F3F8F6]/60 to-white">
      {/* ── Soft Aesthetic Organic Blobs (Skin Care Aura) ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Mint Aura Blob */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 20, 0],
            y: [0, -15, 0],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full bg-primary-light/70 blur-[90px]"
        />

        {/* Blush Peach Aura Blob */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            x: [0, -25, 0],
            y: [0, 20, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut", delay: 1 }}
          className="absolute top-10 right-0 w-[480px] h-[480px] rounded-full bg-[#FCECE4]/80 blur-[100px]"
        />

        {/* Dewy Gold Glow */}
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-[#FFF5EB]/60 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── MOBILE & TABLET VIEW (< lg): Photo Next to Text (Side by Side) ── */}
        <div className="lg:hidden space-y-3.5 sm:space-y-4 text-left">
          {/* Dewy Clinic Pill Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 xs:px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-primary/30 text-[10px] xs:text-[11px] font-semibold text-primary-dark shadow-2xs max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="truncate">Premier Dermatology • Mota Varachha, Surat</span>
          </div>

          {/* SIDE BY SIDE: Headline & Bio on Left, Doctor Photo on Right */}
          <div className="grid grid-cols-12 gap-2.5 xs:gap-3.5 items-center">
            {/* Left 7 cols: Headline & Doctor Bio */}
            <div className="col-span-7 space-y-1.5 xs:space-y-2">
              <h1 className="text-[clamp(1.15rem,4.8vw,1.9rem)] sm:text-2xl md:text-3xl font-heading font-extrabold tracking-tight text-slate-deep leading-[1.25]">
                Healthy, Glowing Skin Starts with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-700 underline decoration-primary/30 underline-offset-2">
                  Expert Care
                </span>
              </h1>
              <p className="text-[11px] xs:text-xs sm:text-sm text-slate-muted leading-relaxed font-normal">
                Led by <strong className="text-slate-deep font-semibold">Dr. Ruchi Goti</strong> (MD Dermatology). Science-backed skin rejuvenation & hair care.
              </p>
            </div>

            {/* Right 5 cols: Doctor Photo NEXT TO TEXT */}
            <div className="col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-soft bg-slate-100 aspect-[3/4] ring-1 ring-primary/20 max-w-[135px] xs:max-w-[145px] sm:max-w-xs ml-auto">
                <Image
                  src="/images/dr-ruchi-goti.webp"
                  alt="Dr. Ruchi Goti - Consultant Dermatologist"
                  fill
                  priority
                  sizes="(max-width: 768px) 45vw, 25vw"
                  className="object-cover object-top"
                />
                {/* Doctor Overlay Badge on Photo */}
                <div className="absolute bottom-1 inset-x-1 p-1 rounded-lg bg-white/95 backdrop-blur-sm border border-white/80 text-center">
                  <h3 className="font-heading text-[9px] xs:text-[10px] font-bold text-slate-deep leading-tight truncate">
                    Dr. Ruchi Goti
                  </h3>
                  <p className="text-[7.5px] xs:text-[8px] text-primary font-semibold leading-tight truncate">
                    MD Dermatology
                  </p>
                </div>
              </div>

              {/* 4.9 Rating Badge */}
              <div className="absolute -top-1.5 -right-1 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded-full shadow-xs border border-clinic-border flex items-center gap-0.5 text-[8.5px] xs:text-[9px] font-bold text-slate-deep">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                <span>4.9 ★</span>
              </div>
            </div>
          </div>

          {/* Action Buttons: Side by Side on Mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-3.5 pt-1">
            <Link
              href="/#book"
              className="inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-soft active:scale-[0.98] transition-all text-center"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{t("bookAppointment")}</span>
            </Link>

            <a
              href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 xs:px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-semibold text-slate-deep bg-white hover:bg-mint-tint border border-clinic-border shadow-xs active:scale-[0.98] transition-all text-center"
            >
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">Call Doctor</span>
            </a>
          </div>

          {/* Clinic Timing Notice */}
          <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-muted pt-0.5">
            <Clock className="w-3 h-3 text-primary shrink-0" />
            <span className="truncate">
              Mon – Sat: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM • Yamuna Chowk
            </span>
          </div>

          {/* Skin Care Clinic Vibe Pills Bar on Mobile & Tablet */}
          <div className="pt-2 border-t border-clinic-border/80 grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {clinicVibeChips.map((chip, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 px-2 xs:px-2.5 py-1.5 rounded-xl bg-white/80 border border-clinic-border text-[10px] xs:text-[11px] sm:text-xs font-semibold text-slate-deep shadow-2xs truncate"
              >
                {chip.icon}
                <span className="truncate">{chip.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ORIGINAL DESKTOP VIEW (lg:grid): PC View Untouched ── */}
        <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Dewy Clinic Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-primary/30 text-xs font-semibold text-primary-dark shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Premier Dermatology & Aesthetic Care • Mota Varachha, Surat</span>
            </div>

            {/* Main Aesthetic Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-slate-deep leading-[1.15]">
              Healthy, Glowing Skin Starts with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-600 to-teal-700 underline decoration-primary/30 underline-offset-4">
                Expert Care
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-muted leading-relaxed max-w-xl font-normal">
              Led by <strong className="text-slate-deep font-semibold">Dr. Ruchi Goti</strong> (MD Dermatology). Experience gentle, science-backed skin rejuvenation, painless laser treatments, and natural hair regrowth in a calm, sterile clinical setting.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <Link
                href="/#book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-primary hover:bg-primary-hover shadow-soft hover:shadow-float active:scale-[0.98] transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("bookAppointment")}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-deep bg-white hover:bg-mint-tint border border-clinic-border shadow-xs active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Call: {clinicData.phoneDisplay}</span>
              </a>
            </div>

            {/* Clinic Timing Notice */}
            <div className="flex items-center gap-2 text-xs text-slate-muted pt-1">
              <Clock className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>
                Mon – Sat: 10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM • Yamuna Chowk, Mota Varachha
              </span>
            </div>

            {/* Skin Care Clinic Vibe Pills Bar */}
            <div className="pt-3 border-t border-clinic-border/80 flex flex-wrap items-center gap-2">
              {clinicVibeChips.map((chip, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FAF8F5] border border-clinic-border text-xs font-semibold text-slate-deep shadow-xs"
                >
                  {chip.icon}
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Doctor Portrait Photo with Glowing Aesthetic Aura */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="relative mx-auto max-w-sm sm:max-w-md"
            >
              {/* Glowing Aura Ring Behind Doctor Photo */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-accent-blush/40 to-emerald-200/30 blur-xl opacity-75 -z-10" />

              {/* Doctor Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-float bg-slate-100 aspect-[3/4] ring-1 ring-primary/20">
                <Image
                  src="/images/dr-ruchi-goti.webp"
                  alt="Dr. Ruchi Goti - Consultant Dermatologist at Jivani Skin Clinic Mota Varachha Surat"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />

                {/* Overlaid Doctor Name Badge with Glassmorphism */}
                <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl glass-card shadow-soft border border-white/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-deep">
                        Dr. Ruchi Goti
                      </h3>
                      <p className="text-xs text-primary font-semibold">
                        MD (Dermatology, Venereology & Leprosy)
                      </p>
                      <p className="text-[11px] text-slate-muted">
                        Consultant Dermatologist & Cosmetologist
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary">
                      <Heart className="w-4 h-4 fill-primary text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Google Rating Pill with gentle floating animation */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-float border border-clinic-border flex items-center gap-2"
              >
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-deep leading-none">4.9 ★ Rating</p>
                  <p className="text-[10px] text-slate-muted leading-tight">Google Reviews</p>
                </div>
              </motion.div>

              {/* Floating Aesthetic Trust Tag on Bottom Left */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-soft border border-clinic-border items-center gap-1.5 text-[11px] font-bold text-slate-deep"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>12,500+ Happy Patients</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
