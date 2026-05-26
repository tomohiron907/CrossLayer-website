"use client";

import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

export default function Partnership() {
  const { lang } = useLang();
  const t = content.partnership;
  const company = content.about.company;

  return (
    <section id="contact" className="py-32 border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">
          {t.heading[lang]}
        </p>
        <p className="text-xl md:text-2xl font-medium text-gray-900 max-w-2xl leading-relaxed mb-10">
          {t.body[lang]}
        </p>
        <div className="flex flex-wrap gap-3 mb-12">
          {t.options[lang].map((opt) => (
            <span
              key={opt}
              className="text-sm px-4 py-2 border border-gray-300 rounded-full text-gray-600"
            >
              {opt}
            </span>
          ))}
        </div>
        <a
          href={`mailto:${company.email}`}
          className="inline-flex items-center gap-2 text-sm font-medium bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
        >
          {t.cta[lang]}
          <span className="font-mono text-xs opacity-60">{company.email}</span>
        </a>
      </div>
    </section>
  );
}
