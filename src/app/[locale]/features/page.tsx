import { useTranslations } from "next-intl";
import { GraduationCap, BarChart3, GitBranch, BookOpen, ChevronRight } from "lucide-react";

export default function FeaturesPage() {
  const t = useTranslations("home.features");

  const features = [
    { key: "courses", icon: <GraduationCap size={32} className="text-blue-400" />, bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { key: "datatools", icon: <BarChart3 size={32} className="text-indigo-400" />, bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { key: "algorithms", icon: <GitBranch size={32} className="text-violet-400" />, bg: "bg-violet-500/10", border: "border-violet-500/20" },
    { key: "casestudies", icon: <BookOpen size={32} className="text-cyan-400" />, bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map(({ key, icon, bg, border }) => (
            <div key={key} className={`group p-8 rounded-2xl bg-slate-900 border ${border} hover:shadow-xl transition-all`}>
              <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6`}>{icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">
                {t(`${key}.title` as "courses.title" | "datatools.title" | "algorithms.title" | "casestudies.title")}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-5">
                {t(`${key}.desc` as "courses.desc" | "datatools.desc" | "algorithms.desc" | "casestudies.desc")}
              </p>
              <span className="inline-flex items-center gap-1 text-blue-400 font-medium group-hover:gap-2 transition-all">
                {t(`${key}.link` as "courses.link" | "datatools.link" | "algorithms.link" | "casestudies.link")}
                <ChevronRight size={15} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
