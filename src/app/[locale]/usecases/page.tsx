import { useTranslations } from "next-intl";
import { MapPin, TrendingUp, BarChart3, Building2, Leaf, Truck } from "lucide-react";

const cases = [
  {
    icon: <MapPin size={24} className="text-blue-400" />,
    bg: "bg-blue-500/10",
    titleSq: "Planifikim Urban me GIS",
    titleEn: "Urban Planning with GIS",
    descSq: "Analiza e rrjetit rrugor dhe optimizimi i transportit publik për qytete të mëdha duke përdorur të dhëna hapësinore.",
    descEn: "Road network analysis and public transport optimization for large cities using spatial data.",
    domain: "Government",
  },
  {
    icon: <Truck size={24} className="text-indigo-400" />,
    bg: "bg-indigo-500/10",
    titleSq: "Optimizim i Zinxhirit të Furnizimit",
    titleEn: "Supply Chain Optimization",
    descSq: "Reduktimi i kostove logjistike me 23% duke aplikuar VRP dhe programim linear në distributimin e mallrave.",
    descEn: "Reducing logistics costs by 23% by applying VRP and linear programming in goods distribution.",
    domain: "Logistics",
  },
  {
    icon: <Leaf size={24} className="text-green-400" />,
    bg: "bg-green-500/10",
    titleSq: "Monitorim Mjedisor",
    titleEn: "Environmental Monitoring",
    descSq: "Interpolim hapësinor i cilësisë së ajrit dhe ujit duke përdorur Kriging dhe imazhe satelitore.",
    descEn: "Spatial interpolation of air and water quality using Kriging and satellite imagery.",
    domain: "Environment",
  },
  {
    icon: <BarChart3 size={24} className="text-violet-400" />,
    bg: "bg-violet-500/10",
    titleSq: "Parashikim Financiar",
    titleEn: "Financial Forecasting",
    descSq: "Modele regresioni dhe seri kohore për parashikimin e tregut dhe menaxhimin e riskut.",
    descEn: "Regression models and time series for market forecasting and risk management.",
    domain: "Finance",
  },
  {
    icon: <Building2 size={24} className="text-cyan-400" />,
    bg: "bg-cyan-500/10",
    titleSq: "Menaxhim i Burimeve në Spital",
    titleEn: "Hospital Resource Management",
    descSq: "Optimizimi i orareve të stafit dhe shpërndarjes së pajisjeve mjekësore duke minimizuar kohët e pritjes.",
    descEn: "Optimizing staff schedules and medical equipment distribution to minimize waiting times.",
    domain: "Healthcare",
  },
  {
    icon: <TrendingUp size={24} className="text-orange-400" />,
    bg: "bg-orange-500/10",
    titleSq: "Analiza e Tregut të Pasurive",
    titleEn: "Real Estate Market Analysis",
    descSq: "Modele hedonike çmimesh dhe analiza gjeografike e vlerës së pronave bazuar në faktorë hapësinorë.",
    descEn: "Hedonic price models and geographic analysis of property values based on spatial factors.",
    domain: "Real Estate",
  },
];

const domainColors: Record<string, string> = {
  Government: "bg-blue-500/10 text-blue-400",
  Logistics: "bg-indigo-500/10 text-indigo-400",
  Environment: "bg-green-500/10 text-green-400",
  Finance: "bg-violet-500/10 text-violet-400",
  Healthcare: "bg-cyan-500/10 text-cyan-400",
  "Real Estate": "bg-orange-500/10 text-orange-400",
};

export default function UseCasesPage() {
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";

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
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 p-6 flex flex-col transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                  {c.icon}
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${domainColors[c.domain]}`}>
                  {c.domain}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {locale === "sq" ? c.titleSq : c.titleEn}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {locale === "sq" ? c.descSq : c.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
