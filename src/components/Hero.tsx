"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const t = content.hero;

  return (
    <section id="mission" className="pt-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden bg-gray-50">
          <Image
            src="/hero-section.png"
            alt="CrossLayer 3D printing"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-8">
          Mission
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-8 whitespace-pre-line">
          {t.tagline[lang]}
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed mb-12">
          {t.description[lang]}
        </p>
        <a
          href="#products"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border border-gray-900 px-5 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
        >
          {t.cta[lang]}
          <span>↓</span>
        </a>
      </div>
    </section>
  );
}
