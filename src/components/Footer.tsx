"use client";

import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const t = content.footer;
  const nav = content.nav;

  return (
    <footer className="border-t border-gray-100 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <img src="/logo_horizontal.svg" alt="CrossLayer" className="h-6 w-auto" />
        <nav className="flex flex-wrap gap-6 text-xs text-gray-400">
          <a href="#mission" className="hover:text-gray-900 transition-colors">
            {nav.mission[lang]}
          </a>
          <a href="#products" className="hover:text-gray-900 transition-colors">
            {nav.products[lang]}
          </a>
          <a href="#about" className="hover:text-gray-900 transition-colors">
            {nav.about[lang]}
          </a>
          <a href="#links" className="hover:text-gray-900 transition-colors">
            {nav.links[lang]}
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            {nav.contact[lang]}
          </a>
        </nav>
        <p className="text-xs text-gray-300">{t.rights[lang]}</p>
      </div>
    </footer>
  );
}
