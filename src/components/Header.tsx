"use client";

import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { key: "home", href: "/" },
  { key: "features", href: "/features" },
  { key: "tools", href: "/tools" },
  { key: "courses", href: "/courses" },
  { key: "usecases", href: "/usecases" },
  { key: "blog", href: "/blog" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href={localePath("/")} className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
            IM
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Info<span className="text-blue-400">Mat</span>
            <span className="text-slate-500 font-normal text-sm">.app</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(({ key, href }) => {
            const isActive = pathname === localePath(href);
            return (
              <Link
                key={key}
                href={localePath(href)}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                )}
              >
                {t(key as "home" | "features" | "tools" | "courses" | "usecases" | "projects" | "blog" | "about" | "contact" | "getstarted")}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          {/* Language Toggle */}
          <button
            onClick={switchLocale}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors text-sm font-medium"
          >
            <span className="text-xs">{locale === "sq" ? "🇦🇱" : "🇬🇧"}</span>
            {locale === "sq" ? "EN" : "SQ"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
            className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Get Started button */}
          <Link
            href={localePath("/contact")}
            className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-colors"
          >
            {t("getstarted")}
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-700/50 px-4 py-4 flex flex-col gap-1">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={localePath(href)}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 font-medium transition-colors"
            >
              {t(key as "home" | "features" | "tools" | "courses" | "usecases" | "projects" | "blog" | "about" | "contact" | "getstarted")}
            </Link>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-slate-700">
            <button
              onClick={() => { switchLocale(); setMenuOpen(false); }}
              className="flex-1 px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 text-sm font-medium text-center transition-colors hover:border-blue-400 hover:text-blue-400"
            >
              {locale === "sq" ? "🇬🇧 EN" : "🇦🇱 SQ"}
            </button>
            <button
              onClick={() => { toggleTheme(); }}
              className="px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center justify-center"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href={localePath("/contact")}
              onClick={() => setMenuOpen(false)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold text-center"
            >
              {t("getstarted")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
