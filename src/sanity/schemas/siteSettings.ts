import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Cilësimet e Faqes",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "siteName",
      title: "Emri i Faqes",
      type: "string",
      initialValue: "InfoMat",
    }),
    defineField({
      name: "tagline",
      title: "Slogani",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Kontakti",
      type: "string",
    }),
    defineField({
      name: "github",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "navLinks",
      title: "Menu (Navigimi)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Teksti (SQ)", type: "string" }),
            defineField({ name: "labelEn", title: "Teksti (EN)", type: "string" }),
            defineField({ name: "href", title: "Linku (p.sh. /courses)", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Cilësimet e Faqes" }),
  },
});
