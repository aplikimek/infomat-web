"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ExternalLink, MapPin, TrendingUp, BarChart3, FunctionSquare } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    category: "gis",
    title: "Urban Road Network Optimizer",
    titleSq: "Optimizues i Rrjetit Rrugor Urban",
    desc: "GIS application for optimizing urban road networks using graph theory and Dijkstra's algorithm on real geographic data.",
    descSq: "Aplikim GIS për optimizimin e rrjeteve rrugore urbane duke përdorur teorinë e grafëve dhe algoritmin Dijkstra.",
    tags: ["GIS", "Graph Theory", "Python", "QGIS"],
    color: "blue",
  },
  {
    id: 2,
    category: "or",
    title: "Linear Programming Solver",
    titleSq: "Zgjidhës i Programimit Linear",
    desc: "Interactive tool for solving linear programming problems with visualization of the feasible region and optimal solution.",
    descSq: "Mjet interaktiv për zgjidhjen e problemeve të programimit linear me vizualizim të rajonit fizibël.",
    tags: ["LP", "Simplex", "TypeScript", "D3.js"],
    color: "indigo",
  },
  {
    id: 3,
    category: "gis",
    title: "Spatial Interpolation Tool",
    titleSq: "Mjet Interpolimi Hapësinor",
    desc: "Kriging and IDW interpolation tool for geospatial data analysis, used for environmental monitoring.",
    descSq: "Mjet interpolimi Kriging dhe IDW për analiza të të dhënave gjeohapësinore.",
    tags: ["Kriging", "IDW", "Python", "GeoPandas"],
    color: "blue",
  },
  {
    id: 4,
    category: "or",
    title: "Vehicle Routing Problem",
    titleSq: "Problemi i Rutimit të Automjeteve",
    desc: "Heuristic solution for the Vehicle Routing Problem (VRP) using genetic algorithms and simulated annealing.",
    descSq: "Zgjidhje heuristike për Problemin e Rutimit të Automjeteve (VRP) duke përdorur algoritme gjenetike.",
    tags: ["VRP", "Genetic Algorithm", "Python", "OR-Tools"],
    color: "indigo",
  },
  {
    id: 5,
    category: "stats",
    title: "Statistical Regression Dashboard",
    titleSq: "Dashboard Regresioni Statistikor",
    desc: "Interactive dashboard for multiple regression analysis, correlation matrices and residual diagnostics.",
    descSq: "Dashboard interaktiv për analizë regresioni të shumëfishtë, matrica korrelacioni dhe diagnostikë residuale.",
    tags: ["Regression", "R", "Statistics", "Visualization"],
    color: "violet",
  },
  {
    id: 6,
    category: "gis",
    title: "Land Use Change Detection",
    titleSq: "Detektim i Ndryshimit të Përdorimit të Tokës",
    desc: "Satellite imagery analysis for detecting land use changes over time using classification algorithms.",
    descSq: "Analizë e imazheve satelitore për detektimin e ndryshimeve të përdorimit të tokës me algoritme klasifikimi.",
    tags: ["Remote Sensing", "ML", "Python", "Rasterio"],
    color: "blue",
  },
];

const categoryIcons = {
  gis: <MapPin size={16} />,
  or: <TrendingUp size={16} />,
  stats: <BarChart3 size={16} />,
  viz: <FunctionSquare size={16} />,
};

const categoryColors = {
  blue: "border-blue-500/30 hover:border-blue-400/60",
  indigo: "border-indigo-500/30 hover:border-indigo-400/60",
  violet: "border-violet-500/30 hover:border-violet-400/60",
};

const tagColors: Record<string, string> = {
  GIS: "bg-blue-500/10 text-blue-400",
  "Graph Theory": "bg-indigo-500/10 text-indigo-400",
  Python: "bg-yellow-500/10 text-yellow-400",
  LP: "bg-green-500/10 text-green-400",
  TypeScript: "bg-blue-500/10 text-blue-300",
  Regression: "bg-violet-500/10 text-violet-400",
};

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const tNav = useTranslations("nav");
  const [filter, setFilter] = useState("all");

  // Detect locale from translations context (simple approach)
  const locale = tNav("home") === "Kryefaqja" ? "sq" : "en";

  const filters = [
    { key: "all", label: t("filter_all") },
    { key: "gis", label: t("filter_gis") },
    { key: "or", label: t("filter_or") },
    { key: "stats", label: t("filter_stats") },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all",
                filter === key
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={cn(
                "group rounded-2xl bg-slate-900 border p-6 flex flex-col transition-all",
                categoryColors[project.color as keyof typeof categoryColors]
              )}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-lg bg-slate-800 text-slate-400">
                  {categoryIcons[project.category as keyof typeof categoryIcons]}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  {project.category.toUpperCase()}
                </span>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {locale === "sq" ? project.titleSq : project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {locale === "sq" ? project.descSq : project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium",
                      tagColors[tag] ?? "bg-slate-700/50 text-slate-300"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-slate-800">
                <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <ExternalLink size={14} /> {t("view")}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors ml-auto">
                  <GithubIcon size={14} /> {t("source")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
