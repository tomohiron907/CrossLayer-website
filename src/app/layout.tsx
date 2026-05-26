import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CrossLayer — 3Dプリントの限界を押し上げる",
  description:
    "アルゴリズムとソフトウェアで3Dプリントの難題を解く。G-coordinator、Strecs3Dをはじめ、3Dプリント向けソフトウェアを開発する合同会社CrossLayerの公式サイト。",
  keywords: ["3Dプリント", "CrossLayer", "G-coordinator", "Strecs3D", "デジタルファブリケーション"],
  openGraph: {
    title: "CrossLayer — Pushing the Limits of 3D Printing",
    description:
      "We solve hard problems in 3D printing — from algorithms and physics to manufacturing software.",
    url: "https://crosslayer.co.jp",
    siteName: "CrossLayer",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
