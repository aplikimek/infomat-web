import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const localePath = (href: string) => `/${locale}${href}`;

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                IM
              </div>
              <span className="font-bold text-white text-lg">
                Info<span className="text-blue-400">Mat</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{t("tagline")}</p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors">
                <GithubIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-400 transition-colors">
                <LinkedinIcon size={18} />
              </a>
              <a href="mailto:info@infomat.app"
                className="text-slate-500 hover:text-blue-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t("links")}</h4>
            <ul className="space-y-2">
              {[
                { key: "home", href: "/" },
                { key: "projects", href: "/projects" },
                { key: "blog", href: "/blog" },
                { key: "contact", href: "/contact" },
              ].map(({ key, href }) => (
                <li key={key}>
                  <Link href={localePath(href)}
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              {t("social")}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="mailto:info@infomat.app" className="hover:text-blue-400 transition-colors">
                  info@infomat.app
                </a>
              </li>
              <li>
                <a href="https://github.com/infomat" target="_blank" rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors">
                  github.com/infomat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} InfoMat. {t("rights")}</p>
          <p>infomat.app</p>
        </div>
      </div>
    </footer>
  );
}
