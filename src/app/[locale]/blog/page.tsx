"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { BlockFormula } from "@/components/MathFormula";
import { client } from "@/sanity/lib/client";
import { postsQuery } from "@/sanity/lib/queries";

type Post = {
  _id: string;
  title?: string;
  titleSq?: string;
  slug?: { current: string };
  category?: string;
  publishedAt?: string;
  readMinutes?: number;
  excerpt?: string;
  excerptSq?: string;
  formula?: string;
  coverImage?: string;
};

const staticPosts: Post[] = [
  { _id: "1", category: "GIS", publishedAt: "2024-12-10", readMinutes: 8, title: "Shortest Path in GIS Networks: Dijkstra's Algorithm", titleSq: "Rruga Më e Shkurtër në Rrjetet GIS: Algoritmi i Dijkstra", excerpt: "How Dijkstra's algorithm solves shortest-path problems in real geographic networks.", excerptSq: "Si algoritmi Dijkstra zgjidh problemet e rrugës më të shkurtër në rrjetet gjeografike.", formula: "d(v) = \\min_{u \\in N(v)} \\{ d(u) + w(u,v) \\}" },
  { _id: "2", category: "Operational Research", publishedAt: "2024-11-22", readMinutes: 10, title: "Introduction to Linear Programming: Simplex Method", titleSq: "Hyrje në Programimin Linear: Metoda Simplex", excerpt: "A practical introduction to LP and the Simplex method.", excerptSq: "Hyrje praktike në programimin linear dhe metodën Simplex.", formula: "\\min_{x} \\; c^T x \\quad \\text{s.t.} \\quad Ax \\leq b, \\; x \\geq 0" },
  { _id: "3", category: "GIS", publishedAt: "2024-10-15", readMinutes: 12, title: "Spatial Interpolation: Kriging vs IDW", titleSq: "Interpolimi Hapësinor: Kriging kundër IDW", excerpt: "Comparing two fundamental spatial interpolation methods.", excerptSq: "Krahasimi i dy metodave themelore të interpolimit hapësinor.", formula: "\\hat{Z}(s_0) = \\sum_{i=1}^{n} \\lambda_i Z(s_i)" },
  { _id: "4", category: "Operational Research", publishedAt: "2024-09-05", readMinutes: 15, title: "Vehicle Routing Problem: Heuristic Approaches", titleSq: "Problemi i Rutimit të Automjeteve: Qasje Heuristike", excerpt: "Overview of heuristic methods for the NP-hard VRP.", excerptSq: "Pasqyrë e metodave heuristike për zgjidhjen e VRP.", formula: "\\min \\sum_{k=1}^{K} \\sum_{i=0}^{n} \\sum_{j=0}^{n} c_{ij} x_{ijk}" },
];

const categoryColors: Record<string, string> = {
  "GIS": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Operational Research": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Statistics": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Algorithms": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [posts, setPosts] = useState<Post[]>(staticPosts);

  useEffect(() => {
    client.fetch<Post[]>(postsQuery)
      .then((data) => { if (data?.length) setPosts(data); })
      .catch(() => {});
  }, []);

  const categories = [...new Set(posts.map((p) => p.category).filter(Boolean))];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="flex gap-6 lg:gap-8">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {posts.map((post) => {
              const title   = locale === "sq" ? (post.titleSq ?? post.title) : post.title;
              const excerpt = locale === "sq" ? (post.excerptSq ?? post.excerpt) : post.excerpt;
              return (
                <article key={post._id} className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 overflow-hidden transition-all group">
                  {post.formula && (
                    <div className="bg-slate-950 px-6 py-4 border-b border-slate-800">
                      <BlockFormula formula={post.formula} />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      {post.category && (
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category] ?? "bg-slate-700 text-slate-300"}`}>
                          {post.category}
                        </span>
                      )}
                      {post.publishedAt && (
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Calendar size={12} /> {post.publishedAt}
                        </span>
                      )}
                      {post.readMinutes && (
                        <span className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock size={12} /> {post.readMinutes} {t("min_read")}
                        </span>
                      )}
                    </div>
                    <h2 className="text-white font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors leading-snug">{title}</h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">{excerpt}</p>
                    <Link href="#" className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      {t("read_more")} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <aside className="hidden lg:block w-48 xl:w-56 shrink-0">
            <div className="sticky top-24 rounded-2xl bg-slate-900 border border-slate-800 p-5">
              <div className="flex items-center gap-2 mb-4">
                <Tag size={14} className="text-blue-400" />
                <span className="text-white font-semibold text-sm">{t("categories")}</span>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${categoryColors[cat!] ?? "text-slate-400"} hover:bg-slate-800`}>
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
