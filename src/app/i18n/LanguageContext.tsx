"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { translations } from "./translations";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      // Update HTML attributes
      document.documentElement.lang = next;
      document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
      // Switch font on the body
      if (next === "en") {
        document.body.style.fontFamily = "var(--font-raleway), sans-serif";
      } else {
        document.body.style.fontFamily = "";
      }
      return next;
    });
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang];
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
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
