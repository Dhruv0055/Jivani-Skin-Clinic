"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicData } from "@/data/clinic";
import { useLanguage } from "@/components/context/LanguageContext";
import { Phone, Calendar, Menu, X, Globe } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("navHome"), href: "/#hero" },
    { name: t("navAbout"), href: "/#about" },
    { name: t("navTreatments"), href: "/#treatments" },
    { name: t("navTestimonials"), href: "/#reviews" },
    { name: t("navFaq"), href: "/#faq" },
    { name: t("navContact"), href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "glass-nav shadow-soft py-2.5"
            : "bg-white/95 backdrop-blur-md py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 lg:gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3.5 shrink-0 group">
              <div className="relative h-9 xs:h-10 sm:h-11 w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.02]">
                <Image
                  src="/images/jivani-logo.png"
                  alt={clinicData.clinicName}
                  width={220}
                  height={100}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="hidden xs:flex flex-col min-w-0 pl-2.5 border-l border-slate-200">
                <span className="text-[11px] sm:text-xs font-bold text-slate-deep leading-tight">
                  Dr. Ruchi Goti
                </span>
                <span className="text-[9px] sm:text-[10px] font-medium text-slate-muted leading-tight truncate">
                  Mota Varachha, Surat
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-deep hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Action buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {/* Language toggle */}
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-xl border border-clinic-border text-xs font-semibold text-slate-deep hover:border-primary hover:bg-mint-tint transition-colors whitespace-nowrap"
              >
                <Globe className="w-3.5 h-3.5 text-primary" />
                <span>{language === "en" ? "ગુજરાતી" : "English"}</span>
              </button>

              {/* Real Phone Call button */}
              <a
                href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-deep bg-warm-white hover:bg-mint-tint border border-clinic-border transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>{clinicData.phoneDisplay}</span>
              </a>

              {/* Book Appointment CTA */}
              <Link
                href="/#book"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-soft active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t("bookAppointment")}</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden shrink-0">
              <button
                type="button"
                onClick={toggleLanguage}
                className="px-2 py-1.5 rounded-lg text-xs font-semibold text-slate-deep bg-warm-white border border-clinic-border sm:hidden"
              >
                {language === "en" ? "ગુજ" : "EN"}
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-mint-tint text-slate-deep border border-clinic-border"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isOpen && (
          <div className="xl:hidden bg-white border-b border-clinic-border shadow-float animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
              <nav className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-medium text-slate-deep hover:bg-mint-tint hover:text-primary transition-colors whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-3 border-t border-clinic-border flex flex-col gap-2">
                <a
                  href={`tel:${clinicData.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-slate-deep bg-warm-white border border-clinic-border"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>Call {clinicData.phoneDisplay}</span>
                </a>
                <Link
                  href="/#book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-primary shadow-soft"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{t("bookAppointment")}</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="h-16" />
    </>
  );
}
