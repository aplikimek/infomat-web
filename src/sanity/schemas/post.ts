import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Artikujt (Blog)",
  type: "document",
  icon: () => "📝",
  fields: [
    defineField({
      name: "title",
      title: "Titulli (EN)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "titleSq",
      title: "Titulli (SQ)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Kategoria",
      type: "string",
      options: {
        list: [
          { title: "GIS", value: "GIS" },
          { title: "Operational Research", value: "Operational Research" },
          { title: "Statistics", value: "Statistics" },
          { title: "Algorithms", value: "Algorithms" },
        ],
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Data e Publikimit",
      type: "date",
    }),
    defineField({
      name: "readMinutes",
      title: "Kohëzgjatja (minuta lexim)",
      type: "number",
      initialValue: 5,
    }),
    defineField({
      name: "excerpt",
      title: "Përmbledhja e shkurtër (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "excerptSq",
      title: "Përmbledhja e shkurtër (SQ)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "formula",
      title: "Formula LaTeX (opsionale)",
      description: "P.sh: \\min_{x} c^T x",
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Imazhi Kryesor",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "body",
      title: "Përmbajtja (EN)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "bodySq",
      title: "Përmbajtja (SQ)",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
