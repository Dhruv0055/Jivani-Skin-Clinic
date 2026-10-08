"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { clinicData, TreatmentDetail } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ArrowRight,
  ArrowLeft,
  Timer,
  CheckCircle,
} from "lucide-react";

export function ServicesGridSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const itemsPerPage = 3;

  // Interactive thumb-scroll + auto-scroll controls for mobile
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const categories = [
    "All",
    "Clinical Dermatology",
    "Aesthetic & Lasers",
    "Trichology / Hair",
    "Advanced Skin Care",
  ];

  const filteredTreatments =
    selectedCategory === "All"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === selectedCategory);

  const totalPages = Math.ceil(filteredTreatments.length / itemsPerPage);

  // Auto-scroll mobile track slowly right-to-left while allowing free thumb swipe
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    let animId: number;

    const autoScroll = () => {
      if (!isUserInteracting && el) {
        el.scrollLeft += 0.75;
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0 && el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      animId = requestAnimationFrame(autoScroll);
    };

    animId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animId);
  }, [isUserInteracting, selectedCategory]);

  const handleTouchStart = () => {
    setIsUserInteracting(true);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
    // Smoothly resume auto-scroll 2 seconds after user finishes thumb swipe
    interactionTimeoutRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2000);
  };

  // Auto-fade timer: advances page every 3.2 seconds automatically
  useEffect(() => {
    if (totalPages <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 3200);

    return () => clearInterval(interval);
  }, [totalPages, isPaused]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(0);
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 0 && newPage < totalPages) {
      setCurrentPage(newPage);
    }
  };

  const currentTreatments = filteredTreatments.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  return (
    <section id="treatments" className="py-10 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Treatments"
          title="Clinical & Aesthetic Skin Services"
          subtitle="Medically supervised solutions for acne scars, pigmentation, hair fall, and laser hair removal by Dr. Ruchi Goti."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 xs:gap-2 mb-6 sm:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`px-3 xs:px-3.5 py-1 xs:py-1.5 rounded-full text-[11px] xs:text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white shadow-soft"
                  : "bg-warm-white text-slate-deep border border-clinic-border hover:bg-mint-tint"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── MOBILE VIEW: Slow Right-to-Left Auto-Scrolling Carousel ── */}
        <div className="md:hidden relative w-full overflow-hidden py-1">
          {/* Soft edge blur overlays */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10" />

          <div
            ref={mobileScrollRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
            className="flex flex-row overflow-x-auto scrollbar-none gap-3.5 xs:gap-4 px-3 py-1 cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {(filteredTreatments.length < 4
              ? [...filteredTreatments, ...filteredTreatments, ...filteredTreatments, ...filteredTreatments]
              : [...filteredTreatments, ...filteredTreatments]
            ).map((treatment: TreatmentDetail, idx: number) => (
              <div
                key={`${treatment.slug}-m-${idx}`}
                className="w-[260px] xs:w-[275px] shrink-0 group flex flex-col bg-white rounded-2xl border border-clinic-border shadow-xs hover:shadow-soft transition-all overflow-hidden text-left"
              >
                {/* Photo Area */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={treatment.heroImage}
                    alt={treatment.title}
                    fill
                    sizes="275px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/70 via-transparent to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[9px] font-bold tracking-wide text-slate-deep shadow-xs">
                    {treatment.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="p-3.5 xs:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-[clamp(0.9rem,3vw,1rem)] font-bold text-slate-deep leading-snug">
                      {treatment.title}
                    </h3>

                    <p className="mt-1.5 text-[clamp(0.725rem,2.2vw,0.8125rem)] text-slate-muted leading-relaxed line-clamp-2">
                      {treatment.shortDesc}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-clinic-border space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] text-slate-muted">
                      <span className="flex items-center gap-1 font-medium">
                        <Timer className="w-3 h-3 text-primary" />
                        {treatment.duration}
                      </span>
                      <span className="text-primary font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-emerald-500" />
                        Doctor Led
                      </span>
                    </div>

                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-xl text-xs font-semibold text-primary bg-mint-tint hover:bg-primary hover:text-white transition-colors text-center"
                    >
                      <span>View Treatment Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Auto-scroll helper note on mobile */}
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-muted mt-3">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span>Auto-scrolling • Swipe freely with thumb or tap any card</span>
          </div>
        </div>

        {/* ── DESKTOP VIEW: Untouched 3-Column Paginated Grid ── */}
        <div className="hidden md:block">
          <div
            className="relative min-h-[460px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentPage}`}
                initial={{ opacity: 0, y: 10, scale: 0.99 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.99 }}
                transition={{ duration: 0.26, ease: "easeOut" }}
                className="grid grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto"
              >
                {currentTreatments.map((treatment: TreatmentDetail) => (
                  <div
                    key={treatment.slug}
                    className="group flex flex-col bg-white rounded-2xl border border-clinic-border hover:border-primary/50 shadow-soft hover:shadow-float transition-all duration-300 overflow-hidden"
                  >
                    {/* Photo Area */}
                    <div className="relative h-52 lg:h-56 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={treatment.heroImage}
                        alt={treatment.title}
                        fill
                        sizes="(max-width: 1024px) 33vw, 360px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/70 via-transparent to-transparent" />

                      {/* Category Pill */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-bold tracking-wide text-slate-deep shadow-xs">
                        {treatment.category}
                      </span>
                    </div>

                    {/* Card Details */}
                    <div className="p-4 lg:p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-base lg:text-lg font-bold text-slate-deep group-hover:text-primary transition-colors leading-snug">
                          {treatment.title}
                        </h3>

                        <p className="mt-2 text-xs lg:text-sm text-slate-muted leading-relaxed line-clamp-3">
                          {treatment.shortDesc}
                        </p>
                      </div>

                      <div className="mt-4 lg:mt-5 pt-3.5 border-t border-clinic-border space-y-3">
                        <div className="flex items-center justify-between text-xs text-slate-muted">
                          <span className="flex items-center gap-1.5 font-medium">
                            <Timer className="w-3.5 h-3.5 text-primary" />
                            {treatment.duration}
                          </span>
                          <span className="text-primary font-semibold flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                            Doctor Led
                          </span>
                        </div>

                        <Link
                          href={`/treatments/${treatment.slug}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 lg:px-3.5 rounded-xl text-xs font-semibold text-primary bg-mint-tint hover:bg-primary hover:text-white transition-colors"
                        >
                          <span>View Treatment Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => handlePageChange((currentPage - 1 + totalPages) % totalPages)}
                aria-label="Previous page"
                className="p-2 rounded-xl border border-clinic-border bg-white text-slate-deep hover:bg-mint-tint transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Pagination dots */}
              <div className="flex items-center gap-1.5">
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePageChange(idx)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all relative overflow-hidden ${
                      currentPage === idx
                        ? "bg-primary text-white shadow-soft"
                        : "bg-warm-white text-slate-muted border border-clinic-border hover:bg-mint-tint hover:text-slate-deep"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handlePageChange((currentPage + 1) % totalPages)}
                aria-label="Next page"
                className="p-2 rounded-xl border border-clinic-border bg-white text-slate-deep hover:bg-mint-tint transition-all"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Quick Consultation Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-mint-tint border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
          <div className="text-center sm:text-left">
            <h4 className="font-heading text-base font-bold text-slate-deep">
              Need personalized advice for your skin or hair?
            </h4>
            <p className="text-xs text-slate-muted mt-0.5">
              Consult Dr. Ruchi Goti for an in-depth diagnosis and treatment plan in Mota Varachha, Surat.
            </p>
          </div>
          <Link
            href="/#book"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-soft shrink-0"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
