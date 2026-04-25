import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projektet",
  type: "document",
  icon: () => "📁",
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
      name: "category",
      title: "Kategoria",
      type: "string",
      options: {
        list: [
          { title: "GIS", value: "gis" },
          { title: "Operational Research", value: "or" },
          { title: "Statistics", value: "stats" },
          { title: "Visualization", value: "viz" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Përshkrimi (EN)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "descriptionSq",
      title: "Përshkrimi (SQ)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "tags",
      title: "Etiketat",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "image",
      title: "Imazhi",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "liveUrl",
      title: "Linku Live",
      type: "url",
    }),
    defineField({
      name: "sourceUrl",
      title: "Kodi Burimor (GitHub)",
      type: "url",
    }),
    defineField({
      name: "order",
      title: "Renditja",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Renditja", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "image" },
  },
});
