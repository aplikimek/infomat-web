import { useTranslations } from "next-intl";
import { MapPin, TrendingUp, BarChart3, FunctionSquare } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("home.about");
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-slate-300 leading-relaxed text-lg mb-6">{t("description1")}</p>
            <p className="text-slate-400 leading-relaxed">{t("description2")}</p>
          </div>
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 font-mono text-sm space-y-3">
            <div className="text-slate-500 text-xs mb-4">// Mission</div>
            <div><span className="text-violet-400">platform</span> = <span className="text-green-400">"Applied Mathematics"</span></div>
            <div><span className="text-violet-400">focus</span>    = [<span className="text-blue-300">"GIS"</span>, <span className="text-blue-300">"OR"</span>, <span className="text-blue-300">"Stats"</span>]</div>
            <div><span className="text-violet-400">goal</span>     = <span className="text-green-400">"Real-World Solutions"</span></div>
            <div><span className="text-violet-400">impact</span>   = <span className="text-yellow-400">∞</span></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <MapPin className="text-blue-400" size={24} />, title: locale === "sq" ? "GIS" : "GIS", value: "10+" },
            { icon: <TrendingUp className="text-indigo-400" size={24} />, title: locale === "sq" ? "Projekte OR" : "OR Projects", value: "15+" },
            { icon: <BarChart3 className="text-violet-400" size={24} />, title: locale === "sq" ? "Analiza" : "Analyses", value: "100+" },
            { icon: <FunctionSquare className="text-cyan-400" size={24} />, title: locale === "sq" ? "Algoritme" : "Algorithms", value: "50+" },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-center">
              <div className="flex justify-center mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{item.value}</div>
              <div className="text-slate-400 text-sm">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
