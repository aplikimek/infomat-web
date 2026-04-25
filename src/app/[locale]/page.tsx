import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp, BarChart3, FunctionSquare } from "lucide-react";

function HeroSection() {
  const t = useTranslations("home.hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />
      {/* Blue glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          {t("badge")}
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          {t("title")}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {t("titleHighlight")}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            {t("cta_primary")} <ArrowRight size={18} />
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 font-semibold transition-colors"
          >
            {t("cta_secondary")}
          </Link>
        </div>

        {/* Math formula decoration */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-40 text-slate-500 font-mono text-sm select-none">
          <span>min f(x) s.t. Ax ≤ b</span>
          <span>·</span>
          <span>∇²L(x,λ) ≻ 0</span>
          <span>·</span>
          <span>∑ wᵢxᵢ = Z*</span>
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
  ];
  return (
    <section className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map(({ value, key }) => (
          <div key={key} className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1">{value}</div>
            <div className="text-slate-400 text-sm">{t(key as "projects" | "algorithms" | "datasets" | "years")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations("home.services");

  const services = [
    {
      key: "gis",
      icon: <MapPin className="text-blue-400" size={28} />,
      color: "blue",
    },
    {
      key: "or",
      icon: <TrendingUp className="text-indigo-400" size={28} />,
      color: "indigo",
    },
    {
      key: "stats",
      icon: <BarChart3 className="text-violet-400" size={28} />,
      color: "violet",
    },
    {
      key: "viz",
      icon: <FunctionSquare className="text-cyan-400" size={28} />,
      color: "cyan",
    },
  ] as const;

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:bg-slate-800/50 transition-all group"
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

function AboutSection() {
  const t = useTranslations("home.about");

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">
              {t("subtitle")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t("title")}</h2>
            <p className="text-slate-400 leading-relaxed mb-4">{t("description1")}</p>
            <p className="text-slate-400 leading-relaxed">{t("description2")}</p>
          </div>

          {/* Math formula box */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-8 font-mono text-sm">
            <div className="text-slate-500 mb-4 text-xs">// Linear Programming</div>
            <div className="space-y-2">
              <div><span className="text-violet-400">minimize</span>  <span className="text-blue-300">cᵀx</span></div>
              <div><span className="text-violet-400">subject to</span> <span className="text-green-400">Ax ≤ b</span></div>
              <div className="ml-[84px]">    <span className="text-green-400">x ≥ 0</span></div>
              <div className="mt-4 text-slate-500">// GIS Distance Metric</div>
              <div><span className="text-yellow-400">d(p,q)</span> = <span className="text-blue-300">√[(x₂-x₁)² + (y₂-y₁)²]</span></div>
              <div className="mt-4 text-slate-500">// Dijkstra shortest path</div>
              <div><span className="text-cyan-400">dist[v]</span> = <span className="text-blue-300">min(dist[u] + w(u,v))</span></div>
            </div>
          </div>
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
      <ServicesSection />
      <AboutSection />
    </>
  );
}
