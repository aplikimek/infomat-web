"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { Calculator, FunctionSquare, TrendingUp, ArrowRight } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { toolsSectionQuery } from "@/sanity/lib/queries";

type ToolItem = {
  titleSq?: string;
  titleEn?: string;
  descSq?: string;
  descEn?: string;
  url?: string;
  type?: string;
};

type ToolsData = {
  titleSq?: string;
  titleEn?: string;
  subtitleSq?: string;
  subtitleEn?: string;
  descSq?: string;
  descEn?: string;
  tools?: ToolItem[];
};

const staticTools: ToolsData = {
  titleSq: "Mjete Interaktive",  titleEn: "Interactive Tools",
  subtitleSq: "MJETE INTERAKTIVE", subtitleEn: "INTERACTIVE TOOLS",
  descSq: "Përdorni mjetet tona interaktive dhe simulatorët për të eksperimentuar me modele matematike.",
  descEn: "Use our interactive tools and simulators to experiment with mathematical models and see results in real-time.",
  tools: [
    { type: "matrix",     titleSq: "Kalkulator Matricash",    titleEn: "Matrix Calculator",    descSq: "Kryeni operacione mbi matrica me lehtësi.",                  descEn: "Perform operations on matrices with ease." },
    { type: "plotter",    titleSq: "Vizualizues Funksionesh", titleEn: "Function Plotter",     descSq: "Vizualizoni funksione dhe analizoni sjelljen e tyre.",          descEn: "Visualize functions and analyze their behavior." },
    { type: "regression", titleSq: "Analizë Regresioni",      titleEn: "Regression Analysis",  descSq: "Ndërtoni dhe vlerësoni modele regresioni.",                    descEn: "Build and evaluate regression models." },
  ],
};

const iconByType: Record<string, React.ReactNode> = {
  matrix:     <Calculator     size={32} className="text-blue-400" />,
  plotter:    <FunctionSquare size={32} className="text-indigo-400" />,
  regression: <TrendingUp     size={32} className="text-violet-400" />,
};

const styleByType: Record<string, { bg: string; border: string }> = {
  matrix:     { bg: "bg-blue-500/10",   border: "border-blue-500/20   hover:border-blue-400/50" },
  plotter:    { bg: "bg-indigo-500/10", border: "border-indigo-500/20 hover:border-indigo-400/50" },
  regression: { bg: "bg-violet-500/10", border: "border-violet-500/20 hover:border-violet-400/50" },
};

export default function ToolsPage() {
  const locale = useLocale();
  const [data, setData] = useState<ToolsData>(staticTools);

  useEffect(() => {
    client.fetch<ToolsData>(toolsSectionQuery)
      .then((d) => { if (d?.tools?.length) setData(d); })
      .catch(() => {});
  }, []);

  const pageTitle = locale === "sq" ? data.titleSq : data.titleEn;
  const pageDesc  = locale === "sq" ? data.descSq  : data.descEn;

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{pageTitle}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{pageDesc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.tools?.map((tool, i) => {
            const t = tool.type ?? "matrix";
            const style = styleByType[t] ?? styleByType["matrix"];
            return (
              <div key={i} className={`group rounded-2xl bg-slate-900 border ${style.border} p-8 flex flex-col transition-all hover:scale-[1.02]`}>
                <div className={`w-14 h-14 rounded-2xl ${style.bg} flex items-center justify-center mb-6`}>
                  {iconByType[t]}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {locale === "sq" ? tool.titleSq : tool.titleEn}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                  {locale === "sq" ? tool.descSq : tool.descEn}
                </p>
                {tool.url ? (
                  <a href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all">
                    {locale === "sq" ? "Hap Mjetin" : "Open Tool"} <ArrowRight size={16} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all cursor-pointer">
                    {locale === "sq" ? "Hap Mjetin" : "Open Tool"} <ArrowRight size={16} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
