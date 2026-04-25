"use client";

import { useTranslations, useLocale } from "next-intl";
import { Calculator, FunctionSquare, TrendingUp, ArrowRight } from "lucide-react";

const tools = [
  {
    key: "matrix",
    icon: <Calculator size={32} className="text-blue-400" />,
    bg: "bg-blue-500/10",
    border: "border-blue-500/20 hover:border-blue-400/50",
    status: "available",
  },
  {
    key: "plotter",
    icon: <FunctionSquare size={32} className="text-indigo-400" />,
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20 hover:border-indigo-400/50",
    status: "available",
  },
  {
    key: "regression",
    icon: <TrendingUp size={32} className="text-violet-400" />,
    bg: "bg-violet-500/10",
    border: "border-violet-500/20 hover:border-violet-400/50",
    status: "available",
  },
] as const;

export default function ToolsPage() {
  const t = useTranslations("home.tools");
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subdesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map(({ key, icon, bg, border }) => (
            <div key={key} className={`group rounded-2xl bg-slate-900 border ${border} p-8 flex flex-col transition-all hover:scale-[1.02]`}>
              <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6`}>
                {icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                {t(`${key}.title` as "matrix.title" | "plotter.title" | "regression.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                {t(`${key}.desc` as "matrix.desc" | "plotter.desc" | "regression.desc")}
              </p>
              <button className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                {t(`${key}.link` as "matrix.link" | "plotter.link" | "regression.link")}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
