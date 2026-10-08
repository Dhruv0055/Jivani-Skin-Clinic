"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown, PhoneCall, HelpCircle } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-10 sm:py-16 bg-warm-white border-y border-clinic-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Help & Information"
          title="Frequently Asked Questions"
          subtitle="Clear answers about appointments, timings, procedures, and consultation with Dr. Ruchi Goti."
        />

        <div className="space-y-3">
          {clinicData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-clinic-border bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-3.5 xs:p-4 sm:p-5 text-left flex items-center justify-between gap-3 xs:gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-heading text-xs xs:text-sm sm:text-base font-bold text-slate-deep leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-lg bg-mint-tint flex items-center justify-center text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-primary text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-4 xs:px-4 xs:pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-muted leading-relaxed border-t border-clinic-border/40">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Line */}
        <div className="mt-8 p-3.5 xs:p-4 rounded-xl bg-white border border-clinic-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 text-left">
          <div>
            <p className="text-xs sm:text-sm font-bold text-slate-deep">
              Have another question regarding your skin or hair condition?
            </p>
            <p className="text-[11px] xs:text-xs text-slate-muted mt-0.5">
              Call our clinic desk for immediate assistance.
            </p>
          </div>
          <a
            href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-mint-tint text-primary font-semibold text-xs hover:bg-primary hover:text-white transition-colors shrink-0 w-full sm:w-auto text-center"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {clinicData.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
