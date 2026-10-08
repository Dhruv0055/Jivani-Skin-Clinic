import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { clinicData, TreatmentDetail } from "@/data/clinic";
import {
  Calendar,
  Phone,
  Timer,
  Repeat,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowLeft,
  ShieldCheck,
  ChevronRight,
  HelpCircle,
  MessageCircle,
  HeartHandshake,
  Check,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return clinicData.treatments.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const treatment = clinicData.treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Jivani Skin Clinic",
    };
  }

  return {
    title: `${treatment.title} in Mota Varachha, Surat | Dr. Ruchi Goti`,
    description: `${treatment.shortDesc} Consultation with Dr. Ruchi Goti at Jivani Skin Clinic, Mota Varachha, Surat.`,
    openGraph: {
      title: `${treatment.title} | Dr. Ruchi Goti - Jivani Skin Clinic Surat`,
      description: treatment.shortDesc,
      images: [{ url: treatment.heroImage }],
    },
  };
}

export default function TreatmentDetailPage({ params }: Props) {
  const treatment = clinicData.treatments.find((t) => t.slug === params.slug);

  if (!treatment) {
    notFound();
  }

  const prefilledWhatsApp = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
    `Hello Dr. Ruchi Goti, I would like to book a consultation for ${treatment.title} at Jivani Skin Clinic (Mota Varachha).`
  )}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-warm-white border-b border-clinic-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-slate-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/#treatments" className="hover:text-primary transition-colors">
              Treatments
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-deep font-semibold truncate">{treatment.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="relative py-10 sm:py-14 bg-gradient-to-b from-mint-tint/50 to-white border-b border-clinic-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Title & Key Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary-dark text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Doctor Supervised Care</span>
              </div>

              <h1 className="text-[clamp(1.25rem,4.5vw,2.25rem)] sm:text-3xl lg:text-4xl font-heading font-extrabold tracking-tight text-slate-deep leading-tight">
                {treatment.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-muted leading-relaxed">
                {treatment.shortDesc}
              </p>

              {/* Patient Friendly Quick Spec Pills */}
              <div className="grid grid-cols-3 gap-2 xs:gap-2.5 pt-1 max-w-lg">
                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-xl border border-clinic-border shadow-xs text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-primary text-[10px] xs:text-[11px] font-semibold">
                    <Timer className="w-3.5 h-3.5" />
                    <span>Time</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-slate-deep font-bold mt-0.5 truncate">{treatment.duration}</p>
                </div>

                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-xl border border-clinic-border shadow-xs text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-primary text-[10px] xs:text-[11px] font-semibold">
                    <Repeat className="w-3.5 h-3.5" />
                    <span>Plan</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-slate-deep font-bold mt-0.5 truncate">
                    {treatment.sessionsRecommended}
                  </p>
                </div>

                <div className="bg-white p-2 xs:p-2.5 sm:p-3 rounded-xl border border-clinic-border shadow-xs text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1 text-primary text-[10px] xs:text-[11px] font-semibold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recovery</span>
                  </div>
                  <p className="text-[11px] xs:text-xs text-slate-deep font-bold mt-0.5 truncate">
                    {treatment.downtime}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-2">
                <a
                  href={prefilledWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs shadow-soft transition-all w-full sm:w-auto text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp</span>
                </a>

                <Link
                  href="/#book"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-xs shadow-soft transition-all w-full sm:w-auto text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Dr. Ruchi Goti</span>
                </Link>
              </div>
            </div>

            {/* Treatment Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-clinic-border shadow-soft bg-slate-100">
                <Image
                  src={treatment.heroImage}
                  alt={treatment.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body: Simple & Easy for Patients to Understand */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Easy Explanations */}
            <div className="lg:col-span-8 space-y-10">
              {/* 1. What Is It? Simple Overview */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-deep flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>About This Treatment</span>
                </h2>
                <p className="text-slate-muted leading-relaxed text-sm sm:text-base">
                  {treatment.overview}
                </p>

                {/* How Dr. Ruchi Goti Helps (Simple Language) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-mint-tint/70 border border-primary/20 text-xs sm:text-sm text-slate-deep leading-relaxed space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-primary-dark">
                    <HeartHandshake className="w-4 h-4" />
                    <span>How Dr. Ruchi Goti Treats It:</span>
                  </div>
                  <p className="text-slate-muted">{treatment.howItWorks}</p>
                </div>
              </div>

              {/* 2. Is This Right For You? Simple Checklist */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-deep flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Is This Suitable For You?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {treatment.whoItsFor.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-warm-white border border-clinic-border text-xs sm:text-sm text-slate-deep"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. What Happens During Your Visit (4 Easy Steps) */}
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-deep flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>What to Expect on Your Visit (4 Easy Steps)</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatment.procedureSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 rounded-xl border border-clinic-border bg-white shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="w-7 h-7 rounded-lg bg-mint-tint text-primary font-heading font-bold text-xs flex items-center justify-center">
                            0{step.step}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-400 uppercase">
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="font-heading text-sm font-bold text-slate-deep">
                          {step.title}
                        </h3>
                        <p className="text-xs text-slate-muted mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Key Benefits for Patients */}
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-deep flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span>Benefits You Can Expect</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-deep">
                  {treatment.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-warm-white border border-clinic-border"
                    >
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Patient Questions & Answers */}
              {treatment.faqs && treatment.faqs.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-clinic-border">
                  <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-deep flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>Frequently Asked Questions by Patients</span>
                  </h2>
                  <div className="space-y-2.5">
                    {treatment.faqs.map((faq, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-warm-white border border-clinic-border space-y-1.5"
                      >
                        <h3 className="font-heading text-xs sm:text-sm font-bold text-slate-deep flex items-start gap-2">
                          <HelpCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{faq.question}</span>
                        </h3>
                        <p className="text-xs text-slate-muted leading-relaxed pl-6">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 6. Honest Doctor Note */}
              <div className="p-4 rounded-xl bg-accent-blush border border-accent-rose-gold/30 text-xs text-slate-deep leading-relaxed flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-accent-rose-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-deep mb-0.5">Doctor&apos;s Advice for Patients</p>
                  <p className="text-slate-muted">{treatment.medicalDisclaimer}</p>
                </div>
              </div>
            </div>

            {/* Right Sidebar: Sticky Doctor Card */}
            <div className="lg:col-span-4 sticky top-24 space-y-4">
              <div className="bg-warm-white p-5 rounded-2xl border border-clinic-border shadow-xs space-y-4">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 rounded-full mx-auto overflow-hidden relative border-2 border-primary">
                    <Image
                      src="/images/dr-ruchi-goti.webp"
                      alt="Dr. Ruchi Goti"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-deep">
                    Dr. Ruchi Goti
                  </h3>
                  <p className="text-xs text-slate-muted">MBBS, MD Dermatology</p>
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-light text-primary-dark text-[11px] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>In-Person Consultation</span>
                  </div>
                </div>

                <div className="border-t border-clinic-border pt-3 space-y-1.5 text-xs text-slate-muted">
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-deep">Location:</span>
                    <span>Mota Varachha, Surat</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-deep">Timings:</span>
                    <span>10 AM–1:30 PM & 5–8:30 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium text-slate-deep">Phone:</span>
                    <span className="font-semibold text-slate-deep">{clinicData.phoneDisplay}</span>
                  </p>
                </div>

                <div className="pt-1 space-y-2">
                  <a
                    href={prefilledWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-semibold shadow-xs hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    href="/#book"
                    className="w-full min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary-hover shadow-xs transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Clinic Visit</span>
                  </Link>

                  <a
                    href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                    className="w-full min-h-[44px] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-clinic-border text-slate-deep text-xs font-semibold hover:bg-mint-tint transition-all"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>Call Clinic Reception</span>
                  </a>
                </div>
              </div>

              <Link
                href="/#treatments"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline px-2"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View all treatments</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
