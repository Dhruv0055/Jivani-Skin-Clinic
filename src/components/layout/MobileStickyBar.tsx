"use client";

import React from "react";
import Link from "next/link";
import { clinicData } from "@/data/clinic";
import { Phone, Calendar, MessageCircle } from "lucide-react";

export function MobileStickyBar() {
  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
    clinicData.whatsappMessagePreset
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-clinic-border pt-2 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-4px_25px_rgba(43,58,66,0.08)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-warm-white border border-clinic-border text-slate-deep active:scale-95 transition-all text-center"
          aria-label="Call clinic"
        >
          <Phone className="w-4 h-4 text-primary mb-1" />
          <span className="text-[11px] font-semibold">Call Doctor</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] active:scale-95 transition-all text-center"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366] mb-1" />
          <span className="text-[11px] font-semibold">WhatsApp</span>
        </a>

        {/* Book Appointment button */}
        <Link
          href="/#book"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-primary text-white shadow-soft active:scale-95 transition-all text-center"
          aria-label="Book appointment"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-semibold">Book Visit</span>
        </Link>
      </div>
    </div>
  );
}
