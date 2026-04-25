import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  TrendingUp,
  BarChart3,
  FunctionSquare,
  GraduationCap,
  Calculator,
  GitBranch,
  BookOpen,
  ChevronRight,
} from "lucide-react";

function HeroSection() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest mb-8 uppercase">
            {t("badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            {t("title")}{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/courses`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              {t("cta_primary")} <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold transition-colors"
            >
              {t("cta_secondary")} <BarChart3 size={16} />
            </Link>
          </div>
        </div>

        {/* Right - Math visual */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20" />
            <div className="absolute inset-6 rounded-2xl bg-slate-900/80 border border-slate-700/50 flex flex-col items-center justify-center gap-6 p-8 font-mono">
              <div className="text-5xl font-bold text-blue-400 select-none">Σ</div>
              <div className="text-slate-300 text-sm text-center space-y-2">
                <div className="bg-slate-800 rounded-lg px-4 py-2 text-blue-300">
                  f(x) = ∫ₐᵇ x² dx
                </div>
                <div className="bg-slate-800 rounded-lg px-4 py-2 text-green-400">
                  min cᵀx  s.t. Ax ≤ b
                </div>
                <div className="bg-slate-800 rounded-lg px-4 py-2 text-violet-400">
                  d(p,q) = √(Δx² + Δy²)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const t = useTranslations("home.features");

  const features = [
    {
      key: "courses",
      icon: <GraduationCap size={28} className="text-blue-400" />,
      bg: "bg-blue-500/10",
    },
    {
      key: "datatools",
      icon: <BarChart3 size={28} className="text-indigo-400" />,
      bg: "bg-indigo-500/10",
    },
    {
      key: "algorithms",
      icon: <GitBranch size={28} className="text-violet-400" />,
      bg: "bg-violet-500/10",
    },
    {
      key: "casestudies",
      icon: <BookOpen size={28} className="text-cyan-400" />,
      bg: "bg-cyan-500/10",
    },
  ] as const;

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ key, icon, bg }) => (
            <div
              key={key}
              className="group p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5`}>
                {icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {t(`${key}.title` as "courses.title" | "datatools.title" | "algorithms.title" | "casestudies.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {t(`${key}.desc` as "courses.desc" | "datatools.desc" | "algorithms.desc" | "casestudies.desc")}
              </p>
              <span className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                {t(`${key}.link` as "courses.link" | "datatools.link" | "algorithms.link" | "casestudies.link")}
                <ChevronRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InteractiveToolsSection() {
  const t = useTranslations("home.tools");
  const locale = useLocale();

  const tools = [
    {
      key: "matrix",
      icon: <Calculator size={28} className="text-blue-400" />,
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      key: "plotter",
      icon: <FunctionSquare size={28} className="text-indigo-400" />,
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      key: "regression",
      icon: <TrendingUp size={28} className="text-violet-400" />,
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
  ] as const;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left text */}
          <div className="lg:col-span-2">
            <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("description")}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {t("subdesc")}
            </p>
            <Link
              href={`/${locale}/tools`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              {t("cta")} <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right tools cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tools.map(({ key, icon, bg, border }) => (
              <div
                key={key}
                className={`group p-6 rounded-2xl bg-slate-900 border ${border} hover:scale-105 transition-all cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  {icon}
                </div>
                <h3 className="text-white font-semibold mb-2">
                  {t(`${key}.title` as "matrix.title" | "plotter.title" | "regression.title")}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {t(`${key}.desc` as "matrix.desc" | "plotter.desc" | "regression.desc")}
                </p>
                <span className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                  {t(`${key}.link` as "matrix.link" | "plotter.link" | "regression.link")}
                  <ArrowRight size={13} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const t = useTranslations("home.stats");
  const stats = [
    { value: "30+", key: "projects" },
    { value: "50+", key: "algorithms" },
    { value: "100+", key: "datasets" },
    { value: "5+", key: "years" },
  ] as const;

  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, key }) => (
          <div key={key} className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">{value}</div>
            <div className="text-slate-400 text-sm">{t(key)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations("home.services");

  const services = [
    { key: "gis", icon: <MapPin className="text-blue-400" size={28} /> },
    { key: "or", icon: <TrendingUp className="text-indigo-400" size={28} /> },
    { key: "stats", icon: <BarChart3 className="text-violet-400" size={28} /> },
    { key: "viz", icon: <FunctionSquare className="text-cyan-400" size={28} /> },
  ] as const;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
            {t("subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t("title")}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ key, icon }) => (
            <div
              key={key}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 transition-all"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {t(`${key}.title` as "gis.title" | "or.title" | "stats.title" | "viz.title")}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t(`${key}.desc` as "gis.desc" | "or.desc" | "stats.desc" | "viz.desc")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <InteractiveToolsSection />
      <ServicesSection />
    </>
  );
}
