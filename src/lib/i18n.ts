export type Lang = "ja" | "en";

export const content = {
  nav: {
    mission: { ja: "ミッション", en: "Mission" },
    products: { ja: "プロダクト", en: "Products" },
    about: { ja: "会社概要", en: "About" },
    contact: { ja: "お問い合わせ", en: "Contact" },
  },
  hero: {
    tagline: {
      ja: "アルゴリズムとソフトウェアで\n3Dプリントの限界を押し上げる",
      en: "Pushing the limits of 3D printing\nwith algorithms and software",
    },
    description: {
      ja: "CrossLayerは、3Dプリントの「難しい」を解く会社です。物理やアルゴリズムといった理論レイヤーから、3Dプリンタによる製造レイヤーまでソフトウェアを介して縦断することで、3Dプリントの難題を解くことを目指します。",
      en: "CrossLayer solves the hard problems in 3D printing. We bridge theory — physics, algorithms — to the manufacturing layer through software, pushing 3D printing beyond its current limits.",
    },
    cta: { ja: "詳しく見る", en: "Learn more" },
  },
  products: {
    heading: { ja: "プロダクト", en: "Products" },
    items: [
      {
        number: "01",
        title: { ja: "G-coordinator", en: "G-coordinator" },
        subtitle: {
          ja: "試作止まりから、最終製品へ",
          en: "From prototype to final product",
        },
        body: {
          ja: "3Dプリンタは従来試作として使われてきたが、最終製品としての質感や精度を出すには壁があった。ノズルの動き・温度・速度を数式とコーディングで細かく制御できるソフトを開発。試作の道具だった3Dプリントを、最終製品をつくる道具に変えることができる。",
          en: "3D printers have traditionally been used for prototyping — but achieving final-product quality required overcoming major barriers. G-coordinator gives precise control over nozzle movement, temperature, and speed through mathematical formulas and code, transforming 3D printing into a production-grade tool.",
        },
      },
      {
        number: "02",
        title: { ja: "Strecs3D", en: "Strecs3D" },
        subtitle: {
          ja: "強度不足を、インフィルで解決",
          en: "Solving strength issues through infill optimization",
        },
        body: {
          ja: "3Dプリント部品は強度が足りないことが多い。内部のインフィル密度をシミュレーションで最適化するソフトを開発。既存のスライサーと連携しながらインフィルを最適化し、同じ重さでも強度が約2倍に。完成後に「強度が足りずに再印刷」という手戻りをなくす。",
          en: "3D printed parts often lack sufficient strength. Strecs3D uses simulation to optimize internal infill density, integrating with existing slicers to roughly double strength at the same weight — eliminating costly reprints due to structural failure.",
        },
      },
      {
        number: "03",
        title: {
          ja: "ロボットアームの3Dプリンタ化",
          en: "Robot Arm as 3D Printer",
        },
        subtitle: {
          ja: "6軸ロボットアームを3Dプリンタとして動かす",
          en: "Driving a 6-axis robot arm as a 3D printer",
        },
        body: {
          ja: "6軸ロボットアームを3Dプリンタとして動かすには、通信・ハードウェア・材料など多くの領域をまたぐ必要があった。これを一つのシステムにまとめ、大阪万博日本館で実演、建築業界でも活用が始まっている。",
          en: "Operating a 6-axis robot arm as a 3D printer required bridging communication, hardware, and materials — across many domains. We unified these into a single system, demonstrated at Osaka Expo Japan Pavilion, now being adopted in the architecture industry.",
        },
      },
    ],
  },
  partnership: {
    heading: { ja: "協業・お問い合わせ", en: "Partnership & Contact" },
    body: {
      ja: "CrossLayerは協業パートナーを探しています。3Dプリントで「これは作れない」「強度が足りない」といった課題をお持ちの企業・研究機関の方、ぜひお声がけください。",
      en: "CrossLayer is actively seeking collaboration partners. If you're a company or research institution facing challenges like 'this can't be 3D printed' or 'the parts aren't strong enough,' we'd love to hear from you.",
    },
    options: {
      ja: ["共同研究", "受託開発", "技術相談"],
      en: ["Joint Research", "Contract Development", "Technical Consulting"],
    },
    cta: { ja: "メールでお問い合わせ", en: "Get in touch via email" },
  },
  about: {
    heading: { ja: "会社概要", en: "About" },
    founder: {
      name: { ja: "谷口 朝洋", en: "Tomohiro Taniguchi" },
      role: { ja: "代表", en: "Founder & CEO" },
      affiliation: {
        ja: "慶應義塾大学大学院 博士課程在学",
        en: "Ph.D. Student, Keio University Graduate School",
      },
      expertise: {
        ja: "デジタルファブリケーション・シミュレーション・形状最適化",
        en: "Digital Fabrication · Simulation · Shape Optimization",
      },
      bio: {
        ja: "中高でロボコンに取り組み、ソフトウェアとハードウェア両面のエンジニアリングを実践。慶應義塾大学・大学院で3Dプリントの研究に取り組み、G-coordinator、Strecs3Dなど独自のソフトウェアを開発。4DFF学会 TopAward受賞、IPA未踏事業2025年度採択。「3Dプリントの限界を押し上げる」を掲げて合同会社CrossLayerを設立。",
        en: "Practiced both software and hardware engineering through robotics competitions in high school. Researched 3D printing at Keio University, developing G-coordinator and Strecs3D. Winner of 4DFF Society TopAward and selected for IPA Mitou Project 2025. Founded CrossLayer to push the limits of 3D printing.",
      },
    },
    company: {
      name: { ja: "合同会社 CrossLayer", en: "CrossLayer LLC" },
      founded: { ja: "2026年4月設立", en: "Founded April 2026" },
      email: "taniguchi@crosslayer.co.jp",
    },
  },
  footer: {
    rights: {
      ja: "© 2026 合同会社CrossLayer. All rights reserved.",
      en: "© 2026 CrossLayer LLC. All rights reserved.",
    },
  },
};
