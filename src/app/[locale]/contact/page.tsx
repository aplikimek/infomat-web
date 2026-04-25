"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Mail, Send, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

type SiteSettings = {
  email?: string;
  github?: string;
  linkedin?: string;
};

const staticSettings: SiteSettings = {
  email: "info@infomat.app",
  github: "https://github.com/infomat",
  linkedin: "https://linkedin.com/in/infomat",
};

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(staticSettings);

  useEffect(() => {
    client.fetch<SiteSettings>(siteSettingsQuery)
      .then((d) => { if (d?.email || d?.github || d?.linkedin) setSettings(d); })
      .catch(() => {});
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3">InfoMat</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                <CheckCircle size={48} className="text-green-400" />
                <p className="text-white text-xl font-semibold">{t("success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">{t("name")}</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-2">{t("email")}</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">{t("subject")}</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="GIS collaboration..."
                  />
                </div>

                <div>
                  <label className="block text-sm text-slate-400 mb-2">{t("message")}</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold transition-colors"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {loading ? t("sending") : t("send")}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 h-fit sticky top-24">
              <h3 className="text-white font-semibold text-lg mb-6">{t("info_title")}</h3>
              <ul className="space-y-5">
                {settings.email && (
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Email</p>
                      <a href={`mailto:${settings.email}`} className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                        {settings.email}
                      </a>
                    </div>
                  </li>
                )}
                {settings.github && (
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-700/50 flex items-center justify-center text-slate-400">
                      <GithubIcon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">GitHub</p>
                      <a href={settings.github} target="_blank" rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                        {settings.github.replace("https://", "")}
                      </a>
                    </div>
                  </li>
                )}
                {settings.linkedin && (
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-700/20 flex items-center justify-center text-blue-400">
                      <LinkedinIcon size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">LinkedIn</p>
                      <a href={settings.linkedin} target="_blank" rel="noopener noreferrer"
                        className="text-slate-300 hover:text-blue-400 transition-colors text-sm">
                        {settings.linkedin.replace("https://", "")}
                      </a>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
