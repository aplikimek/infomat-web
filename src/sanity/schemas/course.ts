import { defineField, defineType } from "sanity";

export const course = defineType({
  name: "course",
  title: "Kurset",
  type: "document",
  icon: () => "🎓",
  fields: [
    defineField({ name: "titleSq", title: "Titulli (SQ)", type: "string", validation: r => r.required() }),
    defineField({ name: "titleEn", title: "Titulli (EN)", type: "string" }),
    defineField({ name: "descSq", title: "Përshkrimi (SQ)", type: "text", rows: 3 }),
    defineField({ name: "descEn", title: "Përshkrimi (EN)", type: "text", rows: 3 }),
    defineField({
      name: "level",
      title: "Niveli",
      type: "string",
      options: {
        list: [
          { title: "Fillues / Beginner", value: "beginner" },
          { title: "Mesatar / Intermediate", value: "intermediate" },
          { title: "Avancuar / Advanced", value: "advanced" },
        ],
      },
    }),
    defineField({ name: "durationSq", title: "Kohëzgjatja (SQ)", type: "string", initialValue: "8 javë" }),
    defineField({ name: "durationEn", title: "Kohëzgjatja (EN)", type: "string", initialValue: "8 weeks" }),
    defineField({ name: "url", title: "Linku i Kursit", type: "url" }),
    defineField({ name: "order", title: "Renditja", type: "number", initialValue: 0 }),
  ],
  orderings: [{ title: "Renditja", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "titleSq", subtitle: "level" },
  },
});
