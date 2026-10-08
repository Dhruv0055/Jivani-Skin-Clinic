"use client";

import React, { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Calendar,
  Clock,
  Phone,
  User,
  MessageCircle,
  CheckCircle,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export function AppointmentBookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM – 1:30 PM)",
    concern: "Acne & Acne Scar Treatment",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const concernsList = [
    "Acne & Acne Scar Treatment",
    "Pigmentation & Melasma Care",
    "Hair Fall & Hair Regrowth (PRP)",
    "Anti-Ageing & Fine Line Care",
    "Painless Laser Hair Removal",
    "Medi-Facials & Glow Peels",
    "Warts, Moles & Skin Tag Removal",
    "Eczema, Psoriasis & Skin Rashes",
    "General Dermatology Consultation",
    "Other Skin / Hair Concern",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const waText = `*Appointment Request - Jivani Skin Clinic*
Patient Name: ${formData.name}
Phone: ${formData.phone}
Preferred Date: ${formData.preferredDate || "Earliest Available"}
Time Slot: ${formData.preferredTime}
Consultation For: ${formData.concern}
Notes: ${formData.message || "None"}`;

    const waUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-10 sm:py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quick Scheduling"
          title="Book Your Consultation"
          subtitle="Choose your preferred date and concern. Connect directly with our clinic desk on WhatsApp for instant slot confirmation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-warm-white p-4 xs:p-6 sm:p-7 rounded-2xl border border-clinic-border shadow-xs">
            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-slate-deep">
                  Appointment Request Sent!
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted max-w-sm mx-auto">
                  Your appointment details were directed to WhatsApp. Our staff will reply promptly to confirm your slot with Dr. Ruchi Goti.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    &larr; Book another appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 xs:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-deep mb-1">
                      Patient Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full pl-9 pr-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-deep mb-1">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 98765 43210"
                        className="w-full pl-9 pr-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-3.5">
                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-deep mb-1">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep"
                      />
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-deep mb-1">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-3.5 h-3.5 text-slate-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep"
                      >
                        <option value="Morning (10:00 AM – 1:30 PM)">
                          Morning: 10:00 AM – 1:30 PM
                        </option>
                        <option value="Evening (5:00 PM – 8:30 PM)">
                          Evening: 5:00 PM – 8:30 PM
                        </option>
                        <option value="Sunday (10:30 AM – 1:00 PM)">
                          Sunday: 10:30 AM – 1:00 PM
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Concern */}
                <div>
                  <label className="block text-xs font-semibold text-slate-deep mb-1">
                    Skin / Hair Concern <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full px-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep"
                  >
                    {concernsList.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-deep mb-1">
                    Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe symptoms or past treatments..."
                    className="w-full px-3 py-2 xs:py-2.5 rounded-xl border border-clinic-border text-xs sm:text-sm bg-white focus:border-primary focus:ring-1 focus:ring-primary text-slate-deep placeholder:text-slate-400"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 xs:py-3.5 px-3 xs:px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm shadow-soft active:scale-[0.99] transition-all text-center"
                >
                  <MessageCircle className="w-4 h-4 fill-white shrink-0" />
                  <span className="truncate">Send Request on WhatsApp</span>
                </button>

                <p className="text-[10px] xs:text-[11px] text-slate-muted text-center">
                  Direct WhatsApp connection with clinic reception • Instant reply
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Doctor & Clinic Info Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Doctor Card */}
            <div className="bg-white p-4 xs:p-5 rounded-2xl border border-clinic-border shadow-xs flex items-center gap-3.5 xs:gap-4">
              <div className="w-14 h-14 xs:w-16 xs:h-16 rounded-xl overflow-hidden relative border border-clinic-border shrink-0">
                <Image
                  src="/images/dr-ruchi-goti.webp"
                  alt="Dr. Ruchi Goti"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h4 className="font-heading text-sm xs:text-base font-bold text-slate-deep">
                  Dr. Ruchi Goti
                </h4>
                <p className="text-[11px] xs:text-xs text-primary font-semibold">
                  MBBS, MD Dermatology
                </p>
                <p className="text-[10px] xs:text-[11px] text-slate-muted">
                  Consultant Dermatologist & Cosmetologist
                </p>
              </div>
            </div>

            {/* Timings Box */}
            <div className="bg-white p-4 xs:p-5 rounded-2xl border border-clinic-border shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-deep">
                <Clock className="w-4 h-4 text-primary" />
                <span>Consultation Timings (Varachha)</span>
              </div>
              <div className="text-[11px] xs:text-xs space-y-1.5 text-slate-muted pt-1">
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-clinic-border/60 gap-0.5">
                  <span className="font-semibold text-slate-deep">Mon – Sat Morning</span>
                  <span>10:00 AM – 1:30 PM</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 border-b border-clinic-border/60 gap-0.5">
                  <span className="font-semibold text-slate-deep">Mon – Sat Evening</span>
                  <span>5:00 PM – 8:30 PM</span>
                </div>
                <div className="flex flex-col xs:flex-row xs:justify-between py-1 gap-0.5">
                  <span className="font-semibold text-slate-deep">Sunday</span>
                  <span className="text-primary font-medium">10:30 AM – 1:00 PM (Prior Appt)</span>
                </div>
              </div>
            </div>

            {/* Direct Call Button */}
            <div className="bg-mint-tint p-3.5 xs:p-4 rounded-2xl border border-primary/20 flex flex-col xs:flex-row xs:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-deep">Need immediate assistance?</p>
                <p className="text-[10px] xs:text-[11px] text-slate-muted">Call clinic reception directly</p>
              </div>
              <a
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-clinic-border text-xs font-semibold text-slate-deep hover:text-primary transition-colors shrink-0 w-full xs:w-auto text-center"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
