"use client";

import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

export default function Nav() {
  const { lang, toggle } = useLang();
  const t = content.nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#">
          <img src="/logo_horizontal.svg" alt="CrossLayer" className="h-8 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-500">
          <a href="#mission" className="hover:text-gray-900 transition-colors">
            {t.mission[lang]}
          </a>
          <a href="#products" className="hover:text-gray-900 transition-colors">
            {t.products[lang]}
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            {t.about[lang]}
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            {t.contact[lang]}
          </a>
        </nav>
        <button
          onClick={toggle}
          className="text-xs font-mono px-3 py-1.5 border border-gray-200 rounded-full hover:border-gray-400 transition-colors text-gray-500 hover:text-gray-900"
        >
          {lang === "ja" ? "EN" : "JA"}
        </button>
      </div>
    </header>
  );
}
