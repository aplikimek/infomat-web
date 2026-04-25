"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function switchLocale() {
    const next = locale === "sq" ? "en" : "sq";
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/") || "/");
  }

  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-700/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            IM
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Info<span className="text-blue-400">Mat</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ key, href }) => {
            const isActive = pathname === localePath(href);
            return (
              <Link
                key={key}
                href={localePath(href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                )}
              >
                {t(key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={switchLocale}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors text-sm font-medium"
          >
            <span className="text-xs">{locale === "sq" ? "🇦🇱" : "🇬🇧"}</span>
            {locale === "sq" ? "EN" : "SQ"}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50 px-4 py-4 flex flex-col gap-2">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={localePath(href)}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 font-medium transition-colors"
            >
              {t(key)}
            </Link>
          ))}
          <button
            onClick={() => { switchLocale(); setMenuOpen(false); }}
            className="mt-2 px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 text-sm font-medium text-left transition-colors"
          >
            {locale === "sq" ? "Switch to English 🇬🇧" : "Kalo në Shqip 🇦🇱"}
          </button>
        </div>
      )}
    </header>
  );
}
