"use client";

import Image from "next/image";
import { useLang } from "./LangContext";
import { content } from "@/lib/i18n";

const productImages = [
  "/product-g-coordinator.jpg",
  "/product-strecs3d.jpg",
  "/product-robot-arm.jpg",
];

export default function Products() {
  const { lang } = useLang();
  const t = content.products;

  return (
    <section id="products" className="py-32 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-16">
          {t.heading[lang]}
        </p>
        <div className="space-y-24">
          {t.items.map((item, i) => (
            <div key={item.number} className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-50">
                <Image
                  src={productImages[i]}
                  alt={item.title[lang]}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-300 tabular-nums block mb-4">
                  {item.number}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {item.title[lang]}
                </h2>
                <p className="text-sm text-gray-400 mb-5">
                  {item.subtitle[lang]}
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.body[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
