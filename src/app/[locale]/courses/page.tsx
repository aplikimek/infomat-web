import { useTranslations } from "next-intl";
import { GraduationCap, Clock, ChevronRight, BookOpen } from "lucide-react";

const courses = [
  {
    level: "Fillues",
    levelEn: "Beginner",
    title: "Hyrje në Matematikën e Aplikuar",
    titleEn: "Introduction to Applied Mathematics",
    desc: "Bazat e matematikës diskrete, algjebra lineare dhe llogaritja diferenciale me aplikime praktike.",
    descEn: "Fundamentals of discrete math, linear algebra and calculus with practical applications.",
    duration: "8 javë",
    durationEn: "8 weeks",
    color: "blue",
  },
  {
    level: "Mesatar",
    levelEn: "Intermediate",
    title: "Programim Linear & Optimizim",
    titleEn: "Linear Programming & Optimization",
    desc: "Metoda Simplex, dualiteti, analiza sensitivitetit dhe aplikime në logjistikë dhe prodhim.",
    descEn: "Simplex method, duality, sensitivity analysis and applications in logistics and production.",
    duration: "10 javë",
    durationEn: "10 weeks",
    color: "indigo",
  },
  {
    level: "Mesatar",
    levelEn: "Intermediate",
    title: "Bazat e GIS dhe Analizës Hapësinore",
    titleEn: "GIS Fundamentals & Spatial Analysis",
    desc: "Sisteme koordinatash, projeksione, analizë rrjetore dhe modelim gjeografik me QGIS/Python.",
    descEn: "Coordinate systems, projections, network analysis and geographic modeling with QGIS/Python.",
    duration: "12 javë",
    durationEn: "12 weeks",
    color: "green",
  },
  {
    level: "Avancuar",
    levelEn: "Advanced",
    title: "Algortime dhe Strukturat e të Dhënave",
    titleEn: "Algorithms & Data Structures",
    desc: "Teoria grafësh, algoritme heuristike, programim dinamik dhe kompleksiteti llogaritës.",
    descEn: "Graph theory, heuristic algorithms, dynamic programming and computational complexity.",
    duration: "12 javë",
    durationEn: "12 weeks",
    color: "violet",
  },
  {
    level: "Avancuar",
    levelEn: "Advanced",
    title: "Statistikë & Machine Learning",
    titleEn: "Statistics & Machine Learning",
    desc: "Regresion, klasifikim, cluster analysis dhe modele parashikuese me Python/R.",
    descEn: "Regression, classification, cluster analysis and predictive models with Python/R.",
    duration: "14 javë",
    durationEn: "14 weeks",
    color: "cyan",
  },
  {
    level: "Avancuar",
    levelEn: "Advanced",
    title: "Kërkime Operacionale të Avancuara",
    titleEn: "Advanced Operational Research",
    desc: "VRP, TSP, simulim Monte Carlo, teori lojërash dhe metaheuristika.",
    descEn: "VRP, TSP, Monte Carlo simulation, game theory and metaheuristics.",
    duration: "14 javë",
    durationEn: "14 weeks",
    color: "orange",
  },
];

const levelColors: Record<string, string> = {
  "Fillues": "bg-green-500/10 text-green-400 border-green-500/20",
  "Beginner": "bg-green-500/10 text-green-400 border-green-500/20",
  "Mesatar": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Intermediate": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Avancuar": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Advanced": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

export default function CoursesPage() {
  const t = useTranslations("nav");
  const locale = t("home") === "Kryefaqja" ? "sq" : "en";

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
          {courses.map((course, i) => {
            const level = locale === "sq" ? course.level : course.levelEn;
            const title = locale === "sq" ? course.title : course.titleEn;
            const desc = locale === "sq" ? course.desc : course.descEn;
            const duration = locale === "sq" ? course.duration : course.durationEn;

            return (
              <div key={i} className="group rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 p-6 flex flex-col transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <BookOpen size={18} className="text-blue-400" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${levelColors[level]}`}>
                    {level}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock size={12} /> {duration}
                  </span>
                  <button className="flex items-center gap-1 text-blue-400 text-sm font-medium group-hover:gap-2 transition-all">
                    {locale === "sq" ? "Shiko kursin" : "View course"}
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
