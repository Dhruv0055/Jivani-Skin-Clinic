"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinic";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${clinicData.whatsappNumber}?text=${encodeURIComponent(
    clinicData.whatsappMessagePreset
  )}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="hidden md:flex fixed bottom-8 right-5 z-40 items-end gap-3">
      {/* Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white px-4 py-2.5 rounded-2xl shadow-float border border-clinic-border text-xs text-slate-deep animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span>Need consultation? Chat on WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-muted hover:text-slate-deep ml-1"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Jivani Skin Clinic on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-float hover:scale-110 active:scale-95 transition-all duration-300 relative group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white text-transparent group-hover:scale-105 transition-transform" />
      </a>
    </aside>
  );
}
