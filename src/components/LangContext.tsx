"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "ja", toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ja");
  const toggle = () => setLang((l) => (l === "ja" ? "en" : "ja"));
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
