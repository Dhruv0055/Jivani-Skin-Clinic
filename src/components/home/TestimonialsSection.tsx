"use client";

import React from "react";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Star, CheckCircle, ExternalLink } from "lucide-react";

export function TestimonialsSection() {
  const avatarColors = [
    "bg-teal-100 text-teal-800",
    "bg-rose-100 text-rose-800",
    "bg-amber-100 text-amber-800",
    "bg-blue-100 text-blue-800",
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeItems = [...clinicData.testimonials, ...clinicData.testimonials];

  return (
    <section id="reviews" className="py-10 sm:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Satisfaction"
          title="Patient Reviews & Experiences"
          subtitle="Real reviews from patients who consulted Dr. Ruchi Goti at Jivani Skin Clinic, Mota Varachha, Surat."
        />

        {/* Google Reviews Summary Header Banner */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 p-3.5 xs:p-4 sm:p-5 rounded-2xl bg-warm-white border border-clinic-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            {/* Google G logo */}
            <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-xl bg-white shadow-xs border border-clinic-border flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 xs:w-6 xs:h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 justify-center sm:justify-start">
                <span className="font-heading font-extrabold text-lg xs:text-xl text-slate-deep">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 xs:w-4 xs:h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[11px] xs:text-xs text-slate-muted mt-0.5">
                Excellent rating on Google Reviews (Mota Varachha, Surat)
              </p>
            </div>
          </div>

          <a
            href={clinicData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-clinic-border text-xs font-semibold text-slate-deep hover:text-primary transition-colors shadow-xs w-full sm:w-auto"
          >
            <span>View on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-primary" />
          </a>
        </div>
      </div>

      {/* Infinite Right-to-Left Sliding Carousel */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Soft edge blur overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee gap-4 xs:gap-5 px-3 xs:px-4 cursor-pointer">
          {marqueeItems.map((test, idx) => {
            const initials = test.patientName
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <div
                key={`${test.id}-${idx}`}
                className="w-[270px] xs:w-[300px] sm:w-[350px] shrink-0 bg-warm-white p-4 xs:p-5 rounded-2xl border border-clinic-border shadow-xs hover:shadow-soft hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top user row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-full ${
                        avatarColors[idx % avatarColors.length]
                      } font-bold text-xs flex items-center justify-center shrink-0`}
                    >
                      {initials}
                    </div>
                    <div className="truncate">
                      <h4 className="font-heading text-sm font-bold text-slate-deep truncate">
                        {test.patientName}
                      </h4>
                      <p className="text-[11px] text-primary font-medium truncate">
                        {test.treatment}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-amber-400 gap-0.5 mb-2.5">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs text-slate-muted leading-relaxed line-clamp-4">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>

                {/* Footer badge */}
                <div className="mt-4 pt-3 border-t border-clinic-border/60 flex items-center justify-between text-[11px] text-slate-muted">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle className="w-3 h-3" />
                    Verified Review
                  </span>
                  <span>{test.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
