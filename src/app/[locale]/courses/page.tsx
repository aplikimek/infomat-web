"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Clock, ChevronRight, BookOpen } from "lucide-react";
import { client } from "@/sanity/lib/client";
import { coursesQuery } from "@/sanity/lib/queries";

type Course = {
  _id: string;
  titleSq?: string;
  titleEn?: string;
  descSq?: string;
  descEn?: string;
  level?: string;
  durationSq?: string;
  durationEn?: string;
  url?: string;
};

const staticCourses: Course[] = [
  { _id: "1", titleSq: "Hyrje në Matematikën e Aplikuar", titleEn: "Introduction to Applied Mathematics", descSq: "Bazat e matematikës diskrete, algjebra lineare dhe llogaritja diferenciale me aplikime praktike.", descEn: "Fundamentals of discrete math, linear algebra and calculus with practical applications.", level: "beginner", durationSq: "8 javë", durationEn: "8 weeks" },
  { _id: "2", titleSq: "Programim Linear & Optimizim", titleEn: "Linear Programming & Optimization", descSq: "Metoda Simplex, dualiteti, analiza sensitivitetit dhe aplikime në logjistikë dhe prodhim.", descEn: "Simplex method, duality, sensitivity analysis and applications in logistics.", level: "intermediate", durationSq: "10 javë", durationEn: "10 weeks" },
  { _id: "3", titleSq: "Bazat e GIS dhe Analizës Hapësinore", titleEn: "GIS Fundamentals & Spatial Analysis", descSq: "Sisteme koordinatash, projeksione, analizë rrjetore dhe modelim gjeografik me QGIS/Python.", descEn: "Coordinate systems, projections, network analysis and geographic modeling.", level: "intermediate", durationSq: "12 javë", durationEn: "12 weeks" },
  { _id: "4", titleSq: "Algortime dhe Strukturat e të Dhënave", titleEn: "Algorithms & Data Structures", descSq: "Teoria grafësh, algoritme heuristike, programim dinamik dhe kompleksiteti llogaritës.", descEn: "Graph theory, heuristic algorithms, dynamic programming.", level: "advanced", durationSq: "12 javë", durationEn: "12 weeks" },
  { _id: "5", titleSq: "Statistikë & Machine Learning", titleEn: "Statistics & Machine Learning", descSq: "Regresion, klasifikim, cluster analysis dhe modele parashikuese me Python/R.", descEn: "Regression, classification, cluster analysis and predictive models.", level: "advanced", durationSq: "14 javë", durationEn: "14 weeks" },
  { _id: "6", titleSq: "Kërkime Operacionale të Avancuara", titleEn: "Advanced Operational Research", descSq: "VRP, TSP, simulim Monte Carlo, teori lojërash dhe metaheuristika.", descEn: "VRP, TSP, Monte Carlo simulation, game theory and metaheuristics.", level: "advanced", durationSq: "14 javë", durationEn: "14 weeks" },
];

const levelLabels: Record<string, { sq: string; en: string; color: string }> = {
  beginner:     { sq: "Fillues",  en: "Beginner",     color: "bg-green-500/10 text-green-400 border-green-500/20" },
  intermediate: { sq: "Mesatar",  en: "Intermediate",  color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  advanced:     { sq: "Avancuar", en: "Advanced",      color: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
};

export default function CoursesPage() {
  const locale = useTranslations("nav")("home") === "Kryefaqja" ? "sq" : "en";
  const [courses, setCourses] = useState<Course[]>(staticCourses);

  useEffect(() => {
    client.fetch<Course[]>(coursesQuery)
      .then((data) => { if (data?.length) setCourses(data); })
      .catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {locale === "sq" ? "Kurset" : "Courses"}
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            {locale === "sq"
              ? "Mëso matematikën e aplikuar me shembuj praktikë dhe projekte reale"
              : "Learn applied mathematics with hands-on examples and real-world projects"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const lvl = levelLabels[course.level ?? "beginner"];
            const title = locale === "sq" ? course.titleSq : course.titleEn;
            const desc = locale === "sq" ? course.descSq : course.descEn;
            const duration = locale === "sq" ? course.durationSq : course.durationEn;
            const levelLabel = locale === "sq" ? lvl?.sq : lvl?.en;

            return (
              <div key={course._id} className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 p-6 flex flex-col transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <BookOpen size={18} className="text-blue-400" />
                  </div>
                  {lvl && (
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${lvl.color}`}>
                      {levelLabel}
                    </span>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock size={12} /> {duration}
                  </span>
                  {course.url ? (
                    <a href={course.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                      {locale === "sq" ? "Shiko kursin" : "View course"} <ChevronRight size={14} />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all cursor-pointer">
                      {locale === "sq" ? "Shiko kursin" : "View course"} <ChevronRight size={14} />
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
