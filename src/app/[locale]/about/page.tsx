"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { MapPin, TrendingUp, BarChart3, FunctionSquare } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { aboutSectionQuery } from "@/sanity/lib/queries";

type AboutData = {
  titleSq?: string; titleEn?: string;
  subtitleSq?: string; subtitleEn?: string;
  desc1Sq?: string; desc1En?: string;
  desc2Sq?: string; desc2En?: string;
  photo?: string;
};

const staticAbout: AboutData = {
  titleSq: "Rreth InfoMat", titleEn: "About InfoMat",
  subtitleSq: "Kush jemi ne", subtitleEn: "Who we are",
  desc1Sq: "InfoMat është një platformë e dedikuar ndërtimit të aplikimeve të bazuara në matematikën e aplikuar. Ne kombinojmë GIS, optimizimin, statistikën dhe vizualizimin për të ofruar zgjidhje reale.",
  desc1En: "InfoMat is a platform dedicated to building applications based on applied mathematics. We combine GIS, optimization, statistics and visualization to deliver real-world solutions.",
  desc2Sq: "Qëllimi ynë është të bëjmë matematikën e aplikuar të aksesueshme dhe praktike për bizneset, institucionet akademike dhe organizatat shtetërore.",
  desc2En: "Our mission is to make applied mathematics accessible and practical for businesses, academic institutions and public organizations.",
};

export default function AboutPage() {
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";
  const [about, setAbout] = useState<AboutData>(staticAbout);

  useEffect(() => {
    client.fetch<AboutData>(aboutSectionQuery)
      .then((data) => { if (data) setAbout(data); })
      .catch(() => {});
  }, []);

  const title    = locale === "sq" ? about.titleSq    : about.titleEn;
  const subtitle = locale === "sq" ? about.subtitleSq : about.subtitleEn;
  const desc1    = locale === "sq" ? about.desc1Sq    : about.desc1En;
  const desc2    = locale === "sq" ? about.desc2Sq    : about.desc2En;

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-slate-400 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">{desc1}</p>
            <p className="text-slate-400 leading-relaxed">{desc2}</p>
          </div>

          {about.photo ? (
            <div className="rounded-2xl overflow-hidden border border-slate-800">
              <Image src={about.photo} alt="About InfoMat" width={600} height={400} className="w-full h-auto object-cover" />
            </div>
          ) : (
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 font-mono text-sm space-y-3">
              <div className="text-slate-500 text-xs mb-4">// Mission</div>
              <div><span className="text-violet-400">platform</span> = <span className="text-green-400">"Applied Mathematics"</span></div>
              <div><span className="text-violet-400">focus</span>    = [<span className="text-blue-300">"GIS"</span>, <span className="text-blue-300">"OR"</span>, <span className="text-blue-300">"Stats"</span>]</div>
              <div><span className="text-violet-400">goal</span>     = <span className="text-green-400">"Real-World Solutions"</span></div>
              <div><span className="text-violet-400">impact</span>   = <span className="text-yellow-400">∞</span></div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: <MapPin className="text-blue-400" size={24} />, labelSq: "Projekte GIS", labelEn: "GIS Projects", value: "10+" },
            { icon: <TrendingUp className="text-indigo-400" size={24} />, labelSq: "Projekte OR", labelEn: "OR Projects", value: "15+" },
            { icon: <BarChart3 className="text-violet-400" size={24} />, labelSq: "Analiza", labelEn: "Analyses", value: "100+" },
            { icon: <FunctionSquare className="text-cyan-400" size={24} />, labelSq: "Algoritme", labelEn: "Algorithms", value: "50+" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-slate-400 text-sm">{locale === "sq" ? item.labelSq : item.labelEn}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
