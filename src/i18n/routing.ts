import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sq"],
  defaultLocale: "sq",
  pathnames: {
    "/": "/",
    "/projects": { en: "/projects", sq: "/projektet" },
    "/blog": { en: "/blog", sq: "/blog" },
    "/contact": { en: "/contact", sq: "/kontakt" },
  },
});
