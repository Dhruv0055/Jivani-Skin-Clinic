"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle2, Award, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";

export function AboutDoctorSection() {
  return (
    <section id="about" className="py-10 sm:py-16 bg-warm-white border-y border-clinic-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Clinical Leadership"
          title="Meet Dr. Ruchi Goti"
          subtitle="Consultant Dermatologist, Trichologist & Cosmetologist in Varachha, Surat."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Doctor Photo & Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-clinic-border shadow-float bg-white">
                <Image
                  src="/images/dr-ruchi-goti.webp"
                  alt="Dr. Ruchi Goti - Dermatologist at Jivani Skin Clinic"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-top"
                />

                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-deep/90 via-slate-deep/60 to-transparent text-white">
                  <h3 className="font-heading text-lg sm:text-xl font-bold">
                    Dr. Ruchi Goti
                  </h3>
                  <p className="text-xs text-primary-light font-medium">
                    MBBS, MD (Dermatology, Venereology & Leprosy)
                  </p>
                  <p className="text-[11px] text-white/80 mt-0.5">
                    Reg. No: {clinicData.doctor.regNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-white rounded-2xl p-4 border border-clinic-border shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-deep uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Professional Affiliations</span>
              </div>
              <ul className="text-xs text-slate-muted space-y-1">
                {clinicData.doctor.memberships.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Bio & Counters */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold">
                <Stethoscope className="w-3.5 h-3.5 text-primary" />
                <span>Personalized, Ethical Skin Care</span>
              </div>

              <h3 className="text-[clamp(1.25rem,4vw,1.875rem)] font-heading font-bold text-slate-deep leading-snug">
                Accurate Medical Diagnosis with Gentle, Patient-Centric Care
              </h3>

              <p className="text-slate-muted text-xs sm:text-base leading-relaxed">
                {clinicData.doctor.bio}
              </p>
              <p className="text-slate-muted text-xs sm:text-base leading-relaxed">
                At Jivani Skin Clinic, every patient undergoes an individualized diagnostic assessment. We never prescribe one-size-fits-all packages; our treatment regimens respect your natural skin barrier, genetics, and lifestyle.
              </p>
            </div>

            {/* Specializations Grid */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-deep mb-2.5">
                Key Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {clinicData.doctor.specializations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-medium text-slate-deep bg-white p-2.5 rounded-xl border border-clinic-border"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 border-t border-clinic-border">
              <div className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl bg-white border border-clinic-border text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={clinicData.doctor.experienceYears} suffix="+" />
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-muted mt-0.5">Years Experience</p>
              </div>

              <div className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl bg-white border border-clinic-border text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={clinicData.doctor.patientsTreated} suffix="+" />
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-muted mt-0.5">Patients Treated</p>
              </div>

              <div className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl bg-white border border-clinic-border text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={clinicData.doctor.proceduresDone} suffix="+" />
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-muted mt-0.5">Procedures Done</p>
              </div>

              <div className="p-2.5 xs:p-3 sm:p-3.5 rounded-xl bg-white border border-clinic-border text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={clinicData.doctor.satisfactionRate} suffix="%" />
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-slate-muted mt-0.5">Satisfaction</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/#book"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-soft transition-all w-full sm:w-auto text-center"
              >
                <span>Book Consultation with Dr. Ruchi Goti</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
