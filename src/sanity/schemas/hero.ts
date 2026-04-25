import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero (Faqja Kryesore)",
  type: "document",
  icon: () => "🏠",
  fields: [
    defineField({
      name: "badge",
      title: "Badge teksti (SQ)",
      type: "string",
      initialValue: "MATEMATIKË E APLIKUAR. NDIKIM REAL.",
    }),
    defineField({
      name: "badgeEn",
      title: "Badge teksti (EN)",
      type: "string",
      initialValue: "APPLIED MATH. REAL IMPACT.",
    }),
    defineField({
      name: "title",
      title: "Titulli - Rreshti 1 (SQ)",
      type: "string",
      initialValue: "Ku Matematika",
    }),
    defineField({
      name: "titleEn",
      title: "Titulli - Rreshti 1 (EN)",
      type: "string",
      initialValue: "Where Math",
    }),
    defineField({
      name: "titleHighlight",
      title: "Titulli - Rreshti 2 me ngjyrë (SQ)",
      type: "string",
      initialValue: "Takon Aplikimin",
    }),
    defineField({
      name: "titleHighlightEn",
      title: "Titulli - Rreshti 2 me ngjyrë (EN)",
      type: "string",
      initialValue: "Meets Application",
    }),
    defineField({
      name: "subtitle",
      title: "Nëntitulli (SQ)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "subtitleEn",
      title: "Nëntitulli (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "ctaPrimary",
      title: "Butoni kryesor (SQ)",
      type: "string",
      initialValue: "Fillo të Mësosh",
    }),
    defineField({
      name: "ctaPrimaryEn",
      title: "Butoni kryesor (EN)",
      type: "string",
      initialValue: "Start Learning",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Butoni dytësor (SQ)",
      type: "string",
      initialValue: "Eksploro Mjetet",
    }),
    defineField({
      name: "ctaSecondaryEn",
      title: "Butoni dytësor (EN)",
      type: "string",
      initialValue: "Explore Tools",
    }),
    defineField({
      name: "heroImage",
      title: "Imazhi Hero (djathtas)",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Hero Section" }),
  },
});
