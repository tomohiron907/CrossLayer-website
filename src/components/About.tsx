"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

export default function About() {
  const { lang } = useLang();
  const t = content.about;

  return (
    <section id="about" className="py-32 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-16">
          {t.heading[lang]}
        </p>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Founder */}
          <div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 mb-6">
              <Image
                src="/founder.jpg"
                alt={t.founder.name[lang]}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs font-mono text-gray-400 mb-1">
              {t.founder.role[lang]}
            </p>
            <h2 className="text-xl font-bold text-gray-900 mb-1">
              {t.founder.name[lang]}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {t.founder.affiliation[lang]}
            </p>
            <p className="text-xs text-gray-400 mb-6">
              {t.founder.expertise[lang]}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t.founder.bio[lang]}
            </p>
          </div>

          {/* Company info */}
          <div className="flex flex-col gap-6">
            <img src="/logo_square.svg" alt="CrossLayer" className="h-20 w-auto" />
            <div>
              <div className="space-y-3 text-sm">
                <div className="flex gap-4">
                  <span className="text-gray-400 w-20 shrink-0">
                    {lang === "ja" ? "社名" : "Name"}
                  </span>
                  <span className="text-gray-900">{t.company.name[lang]}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 w-20 shrink-0">
                    {lang === "ja" ? "設立" : "Founded"}
                  </span>
                  <span className="text-gray-900">
                    {t.company.founded[lang]}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 w-20 shrink-0">
                    {lang === "ja" ? "代表" : "CEO"}
                  </span>
                  <span className="text-gray-900">
                    {t.founder.name[lang]}
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-gray-400 w-20 shrink-0">Email</span>
                  <a
                    href={`mailto:${t.company.email}`}
                    className="text-gray-900 hover:underline"
                  >
                    {t.company.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
