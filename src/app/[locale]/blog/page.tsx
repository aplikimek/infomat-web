import { useTranslations } from "next-intl";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlockFormula } from "@/components/MathFormula";

const posts = [
  {
    id: "dijkstra-gis",
    category: "GIS",
    date: "2024-12-10",
    readMin: 8,
    titleEn: "Shortest Path in GIS Networks: Dijkstra's Algorithm",
    titleSq: "Rruga Më e Shkurtër në Rrjetet GIS: Algoritmi i Dijkstra",
    excerptEn: "How Dijkstra's algorithm solves shortest-path problems in real geographic networks, from road routing to utility networks.",
    excerptSq: "Si algoritmi Dijkstra zgjidh problemet e rrugës më të shkurtër në rrjetet gjeografike reale, nga rutimi rrugor deri te rrjetet e shërbimeve.",
    formula: "d(v) = \\min_{u \\in N(v)} \\{ d(u) + w(u,v) \\}",
  },
  {
    id: "linear-programming",
    category: "Operational Research",
    date: "2024-11-22",
    readMin: 10,
    titleEn: "Introduction to Linear Programming: Simplex Method",
    titleSq: "Hyrje në Programimin Linear: Metoda Simplex",
    excerptEn: "A practical introduction to linear programming and the Simplex method for solving optimization problems with real constraints.",
    excerptSq: "Hyrje praktike në programimin linear dhe metodën Simplex për zgjidhjen e problemeve të optimizimit me kufizime reale.",
    formula: "\\min_{x} \\; c^T x \\quad \\text{s.t.} \\quad Ax \\leq b, \\; x \\geq 0",
  },
  {
    id: "spatial-interpolation",
    category: "GIS",
    date: "2024-10-15",
    readMin: 12,
    titleEn: "Spatial Interpolation: Kriging vs IDW",
    titleSq: "Interpolimi Hapësinor: Kriging kundër IDW",
    excerptEn: "Comparing two fundamental spatial interpolation methods — Kriging and Inverse Distance Weighting — with mathematical foundations.",
    excerptSq: "Krahasimi i dy metodave themelore të interpolimit hapësinor — Kriging dhe Pesha e Distancës së Anasjelltë — me bazat matematike.",
    formula: "\\hat{Z}(s_0) = \\sum_{i=1}^{n} \\lambda_i Z(s_i), \\quad \\sum_{i=1}^{n} \\lambda_i = 1",
  },
  {
    id: "vrp-heuristics",
    category: "Operational Research",
    date: "2024-09-05",
    readMin: 15,
    titleEn: "Vehicle Routing Problem: Heuristic Approaches",
    titleSq: "Problemi i Rutimit të Automjeteve: Qasje Heuristike",
    excerptEn: "Overview of heuristic and metaheuristic methods for solving the NP-hard Vehicle Routing Problem in logistics.",
    excerptSq: "Pasqyrë e metodave heuristike dhe metaheuristike për zgjidhjen e Problemit NP-të vështirë të Rutimit të Automjeteve.",
    formula: "\\min \\sum_{k=1}^{K} \\sum_{i=0}^{n} \\sum_{j=0}^{n} c_{ij} x_{ijk}",
  },
];

const categoryColors: Record<string, string> = {
  "GIS": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Operational Research": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Statistics": "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

function BlogCard({ post, locale }: { post: typeof posts[0]; locale: string }) {
  const tBlog = useTranslations("blog");
  const title = locale === "sq" ? post.titleSq : post.titleEn;
  const excerpt = locale === "sq" ? post.excerptSq : post.excerptEn;

  return (
    <article className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 overflow-hidden transition-all group">
      {/* Formula preview */}
      <div className="bg-slate-950 px-6 py-4 border-b border-slate-800">
        <BlockFormula formula={post.formula} />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category] ?? "bg-slate-700 text-slate-300"}`}>
            {post.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Calendar size={12} /> {post.date}
          </span>
          <span className="flex items-center gap-1 text-xs text-slate-500">
            <Clock size={12} /> {post.readMin} {tBlog("min_read")}
          </span>
        </div>

        <h2 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors leading-snug">
          {title}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{excerpt}</p>

        <Link
          href={`#`}
          className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
        >
          {tBlog("read_more")} →
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="flex gap-8">
          {/* Main content */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} locale={locale} />
            ))}
          </div>

          {/* Sidebar */}
          <aside className="hidden xl:block w-56 shrink-0">
            <div className="sticky top-24 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={14} className="text-blue-400" />
                <span className="text-white font-semibold text-sm">{t("categories")}</span>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${categoryColors[cat] ?? "text-slate-400"} hover:bg-slate-800`}>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
