import { defineField, defineType } from "sanity";

export const useCase = defineType({
  name: "useCase",
  title: "Raste Përdorimi (Use Cases)",
  type: "document",
  icon: () => "💡",
  fields: [
    defineField({ name: "titleSq", title: "Titulli (SQ)", type: "string", validation: r => r.required() }),
    defineField({ name: "titleEn", title: "Titulli (EN)", type: "string" }),
    defineField({ name: "descSq", title: "Përshkrimi (SQ)", type: "text", rows: 3 }),
    defineField({ name: "descEn", title: "Përshkrimi (EN)", type: "text", rows: 3 }),
    defineField({
      name: "domain",
      title: "Sektori",
      type: "string",
      options: {
        list: ["Government", "Logistics", "Environment", "Finance", "Healthcare", "Real Estate", "Education", "Other"],
      },
    }),
    defineField({
      name: "icon",
      title: "Ikona",
      type: "string",
      options: { list: ["map", "truck", "leaf", "chart", "building", "trending"] },
    }),
    defineField({ name: "order", title: "Renditja", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "titleSq", subtitle: "domain" },
  },
});
