"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, TrendingUp, BarChart3, Building2, Leaf, Truck } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { useCasesQuery } from "@/sanity/lib/queries";

type UseCase = {
  _id: string;
  titleSq?: string;
  titleEn?: string;
  descSq?: string;
  descEn?: string;
  domain?: string;
  icon?: string;
};

const iconMap: Record<string, React.ReactNode> = {
  map:      <MapPin size={24} className="text-blue-400" />,
  truck:    <Truck size={24} className="text-indigo-400" />,
  leaf:     <Leaf size={24} className="text-green-400" />,
  chart:    <BarChart3 size={24} className="text-violet-400" />,
  building: <Building2 size={24} className="text-cyan-400" />,
  trending: <TrendingUp size={24} className="text-orange-400" />,
};

const bgMap: Record<string, string> = {
  map: "bg-blue-500/10", truck: "bg-indigo-500/10", leaf: "bg-green-500/10",
  chart: "bg-violet-500/10", building: "bg-cyan-500/10", trending: "bg-orange-500/10",
};

const domainColors: Record<string, string> = {
  Government: "bg-blue-500/10 text-blue-400",
  Logistics: "bg-indigo-500/10 text-indigo-400",
  Environment: "bg-green-500/10 text-green-400",
  Finance: "bg-violet-500/10 text-violet-400",
  Healthcare: "bg-cyan-500/10 text-cyan-400",
  "Real Estate": "bg-orange-500/10 text-orange-400",
  Education: "bg-yellow-500/10 text-yellow-400",
  Other: "bg-slate-500/10 text-slate-400",
};

const staticCases: UseCase[] = [
  { _id: "1", icon: "map", domain: "Government", titleSq: "Planifikim Urban me GIS", titleEn: "Urban Planning with GIS", descSq: "Analiza e rrjetit rrugor dhe optimizimi i transportit publik për qytete të mëdha.", descEn: "Road network analysis and public transport optimization for large cities." },
  { _id: "2", icon: "truck", domain: "Logistics", titleSq: "Optimizim i Zinxhirit të Furnizimit", titleEn: "Supply Chain Optimization", descSq: "Reduktimi i kostove logjistike me 23% duke aplikuar VRP dhe programim linear.", descEn: "Reducing logistics costs by 23% by applying VRP and linear programming." },
  { _id: "3", icon: "leaf", domain: "Environment", titleSq: "Monitorim Mjedisor", titleEn: "Environmental Monitoring", descSq: "Interpolim hapësinor i cilësisë së ajrit dhe ujit duke përdorur Kriging.", descEn: "Spatial interpolation of air and water quality using Kriging." },
  { _id: "4", icon: "chart", domain: "Finance", titleSq: "Parashikim Financiar", titleEn: "Financial Forecasting", descSq: "Modele regresioni dhe seri kohore për parashikimin e tregut.", descEn: "Regression models and time series for market forecasting." },
  { _id: "5", icon: "building", domain: "Healthcare", titleSq: "Menaxhim i Burimeve në Spital", titleEn: "Hospital Resource Management", descSq: "Optimizimi i orareve të stafit dhe shpërndarjes së pajisjeve mjekësore.", descEn: "Optimizing staff schedules and medical equipment distribution." },
  { _id: "6", icon: "trending", domain: "Real Estate", titleSq: "Analiza e Tregut të Pasurive", titleEn: "Real Estate Market Analysis", descSq: "Modele hedonike çmimesh dhe analiza gjeografike e vlerës së pronave.", descEn: "Hedonic price models and geographic analysis of property values." },
];

export default function UseCasesPage() {
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";
  const [cases, setCases] = useState<UseCase[]>(staticCases);

  useEffect(() => {
    client.fetch<UseCase[]>(useCasesQuery)
      .then((data) => { if (data?.length) setCases(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {locale === "sq" ? "Raste Përdorimi" : "Use Cases"}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {locale === "sq"
              ? "Shembuj realë të matematikës së aplikuar në zgjidhjen e problemeve komplekse"
              : "Real examples of applied mathematics solving complex problems"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => {
            const iconKey = c.icon ?? "chart";
            return (
              <div key={c._id} className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 p-6 flex flex-col transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bgMap[iconKey] ?? "bg-slate-700"} flex items-center justify-center`}>
                    {iconMap[iconKey]}
                  </div>
                  {c.domain && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${domainColors[c.domain] ?? "bg-slate-700 text-slate-300"}`}>
                      {c.domain}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {locale === "sq" ? c.titleSq : c.titleEn}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {locale === "sq" ? c.descSq : c.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
