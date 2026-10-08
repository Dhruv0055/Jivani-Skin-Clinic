"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { clinicData } from "@/data/clinic";

type Language = "en" | "gu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("jivani_clinic_lang") as Language;
      if (saved && (saved === "en" || saved === "gu")) {
        setLanguage(saved);
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("jivani_clinic_lang", lang);
    } catch {
      // ignore
    }
  };

  const toggleLanguage = () => {
    handleSetLanguage(language === "en" ? "gu" : "en");
  };

  const t = (key: string): string => {
    const dict = clinicData.translations[language];
    if (dict && dict[key]) {
      return dict[key];
    }
    return clinicData.translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
