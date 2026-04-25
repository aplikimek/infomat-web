"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { ExternalLink, MapPin, TrendingUp, BarChart3, FunctionSquare } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

type Project = {
  _id: string;
  title: string;
  titleSq?: string;
  category: string;
  description?: string;
  descriptionSq?: string;
  tags?: string[];
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const categoryIcons: Record<string, React.ReactNode> = {
  gis: <MapPin size={16} />,
  or: <TrendingUp size={16} />,
  stats: <BarChart3 size={16} />,
  viz: <FunctionSquare size={16} />,
};

const categoryBorders: Record<string, string> = {
  gis: "border-blue-500/30 hover:border-blue-400/60",
  or: "border-indigo-500/30 hover:border-indigo-400/60",
  stats: "border-violet-500/30 hover:border-violet-400/60",
  viz: "border-cyan-500/30 hover:border-cyan-400/60",
};

const staticProjects: Project[] = [
  { _id: "1", category: "gis", title: "Urban Road Network Optimizer", titleSq: "Optimizues i Rrjetit Rrugor Urban", description: "GIS application for optimizing urban road networks using Dijkstra's algorithm.", descriptionSq: "Aplikim GIS për optimizimin e rrjeteve rrugore urbane duke përdorur algoritmin Dijkstra.", tags: ["GIS", "Graph Theory", "Python"] },
  { _id: "2", category: "or", title: "Linear Programming Solver", titleSq: "Zgjidhës i Programimit Linear", description: "Interactive tool for solving LP problems with feasible region visualization.", descriptionSq: "Mjet interaktiv për zgjidhjen e problemeve të programimit linear.", tags: ["LP", "Simplex", "TypeScript"] },
  { _id: "3", category: "gis", title: "Spatial Interpolation Tool", titleSq: "Mjet Interpolimi Hapësinor", description: "Kriging and IDW interpolation for geospatial data analysis.", descriptionSq: "Interpolim Kriging dhe IDW për analiza gjeohapësinore.", tags: ["Kriging", "Python", "GeoPandas"] },
  { _id: "4", category: "or", title: "Vehicle Routing Problem", titleSq: "Problemi i Rutimit të Automjeteve", description: "Heuristic VRP solution using genetic algorithms.", descriptionSq: "Zgjidhje heuristike VRP duke përdorur algoritme gjenetike.", tags: ["VRP", "Genetic Algorithm", "OR-Tools"] },
  { _id: "5", category: "stats", title: "Statistical Regression Dashboard", titleSq: "Dashboard Regresioni Statistikor", description: "Interactive dashboard for multiple regression analysis.", descriptionSq: "Dashboard interaktiv për analizë regresioni të shumëfishtë.", tags: ["Regression", "R", "Statistics"] },
  { _id: "6", category: "gis", title: "Land Use Change Detection", titleSq: "Detektim i Ndryshimit të Tokës", description: "Satellite imagery analysis for land use change detection.", descriptionSq: "Analizë imazhesh satelitore për detektim ndryshimesh.", tags: ["Remote Sensing", "ML", "Python"] },
];

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState<Project[]>(staticProjects);

  useEffect(() => {
    client.fetch<Project[]>(projectsQuery)
      .then((data) => { if (data?.length) setProjects(data); })
      .catch(() => {});
  }, []);

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
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(({ key, label }) => (
            <button key={key} onClick={() => setFilter(key)}
              className={cn("px-5 py-2 rounded-full text-sm font-medium transition-all",
                filter === key ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700"
              )}>
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project._id}
              className={cn("group rounded-2xl bg-slate-900 border p-6 flex flex-col transition-all",
                categoryBorders[project.category] ?? "border-slate-700"
              )}>
              <div className="flex items-center gap-2 mb-4">
                <span className="p-1.5 rounded-lg bg-slate-800 text-slate-400">
                  {categoryIcons[project.category]}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">{project.category}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                {locale === "sq" && project.titleSq ? project.titleSq : project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {locale === "sq" && project.descriptionSq ? project.descriptionSq : project.description}
              </p>
              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-700/50 text-slate-300">{tag}</span>
                  ))}
                </div>
              )}
              <div className="flex gap-3 pt-4 border-t border-slate-800">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    <ExternalLink size={14} /> {t("view")}
                  </a>
                )}
                {project.sourceUrl && (
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-400 transition-colors ml-auto">
                    <GithubIcon size={14} /> {t("source")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
