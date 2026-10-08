"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { clinicData } from "@/data/clinic";
import { ArrowUpRight, Phone, MapPin, Clock } from "lucide-react";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const riseItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.6, bounce: 0 },
  },
};

const giantTextVariant: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.8, bounce: 0 },
  },
};

export function Footer() {
  const brandName = "JIVANI CLINIC";

  const navLinks = [
    { label: "Home", href: "/#hero" },
    { label: "About Dr. Ruchi Goti", href: "/#about" },
    { label: "Clinical Treatments", href: "/#treatments" },
    { label: "Patient Reviews", href: "/#reviews" },
    { label: "Common FAQs", href: "/#faq" },
    { label: "Book Appointment", href: "/#book" },
  ];

  const socialLinks = [
    { label: "INSTAGRAM", href: clinicData.instagramUrl },
    { label: "WHATSAPP", href: `https://wa.me/${clinicData.whatsappNumber}` },
    { label: "GOOGLE MAPS", href: clinicData.googleMapsUrl },
    { label: "CALL NOW", href: `tel:${clinicData.phone.replace(/[^0-9+]/g, "")}` },
  ];

  return (
    <motion.footer
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="relative w-full overflow-hidden bg-[#0A1217] font-sans text-slate-400 transition-colors duration-300 border-t border-slate-800 pb-20 md:pb-12"
    >
      {/* ── Noise Background ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Vertical Floating Contact Text on Desktop ── */}
      <div className="absolute top-[40%] right-0 hidden origin-bottom-right -rotate-90 xl:block pointer-events-none">
        <span className="translate-x-1/2 text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
          Mota Varachha • Surat
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 pb-8">
        {/* ── Top Section ── */}
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:gap-16">
          <motion.div variants={riseItem} className="flex flex-col gap-3.5 sm:gap-4 lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] font-heading font-extrabold tracking-tight text-white">
              Healthy skin starts{"\n"}with expert care.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Dr. Ruchi Goti (MBBS, MD Dermatology) provides ethical skin, laser, and hair therapies with hospital-grade sterility in Mota Varachha, Surat.
            </p>
            {/* Corner Arrow SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-12 h-12 sm:w-16 sm:h-16 text-primary transition-colors mt-1"
            >
              <path d="M6 4v10h10" />
              <path d="M12 10l4 4-4 4" />
            </svg>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-16 lg:w-1/2 lg:justify-end">
            {/* Nav Column */}
            <motion.div variants={riseItem} className="flex flex-col gap-3.5 sm:gap-4">
              <h4 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                Quick Navigation
              </h4>
              <ul className="flex flex-col gap-2 sm:gap-2.5">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-300 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Clinic Info Column */}
            <motion.div variants={riseItem} className="flex flex-col gap-3.5 sm:gap-4">
              <h4 className="font-heading text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                Clinic Location
              </h4>
              <div className="flex flex-col gap-2.5 sm:gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    {clinicData.address}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                    className="hover:text-primary font-semibold text-white"
                  >
                    {clinicData.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-slate-800">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <p className="font-semibold text-white">Mon – Sat:</p>
                    <p className="text-slate-300">10:00 AM – 1:30 PM & 5:00 PM – 8:30 PM</p>
                    <p className="font-semibold text-white pt-1">Sunday:</p>
                    <p className="text-primary font-medium">10:30 AM – 1:00 PM (Prior Appt)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Middle Section: Divider & Social Links ── */}
        <motion.div
          variants={riseItem}
          className="mt-12 sm:mt-20 flex flex-col items-center gap-4 md:flex-row"
        >
          <div className="hidden h-px flex-1 bg-slate-800 md:block" />
          <div className="flex w-full flex-wrap items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:w-auto md:justify-end md:gap-8">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-slate-200 uppercase transition-all hover:border-primary hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Lower Section: Giant Brand Text & Legal (Dark Mode) ── */}
        <div className="relative flex w-full flex-col mt-10 sm:mt-12">
          {/* Giant Brand SVG Header */}
          <motion.div
            variants={giantTextVariant}
            className="relative mb-6 flex w-full justify-center overflow-hidden"
          >
            <svg
              className="h-auto w-full transition-colors duration-300 select-none"
              viewBox={`0 0 ${Math.max(brandName.length * 62, 300)} 100`}
              preserveAspectRatio="xMidYMid meet"
              aria-label={brandName}
            >
              <text
                x="50%"
                y="55%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="fill-white/[0.07] font-heading font-extrabold tracking-tighter"
                fontSize="92"
              >
                {brandName}
              </text>
            </svg>

            <div className="absolute inset-x-0 bottom-0 z-10 mb-2 h-px w-full bg-slate-800" />
          </motion.div>

          {/* Legal / Medical Disclaimer Row */}
          <motion.div
            variants={riseItem}
            className="flex flex-col items-start justify-between gap-4 sm:gap-6 text-xs text-slate-400 lg:flex-row lg:items-center"
          >
            <p className="max-w-2xl leading-relaxed">
              &copy; {new Date().getFullYear()} Jivani Skin Clinic. Dr. Ruchi Goti (MBBS, MD Dermatology). Located at Yamuna Chowk, Mota Varachha, Surat. Medical content is for informational purposes only. Results vary from person to person.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <Link href="/#faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/#book" className="hover:text-white transition-colors">
                Book Consultation
              </Link>
              <a
                href={clinicData.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
