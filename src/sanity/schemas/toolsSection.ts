import { defineField, defineType } from "sanity";

export const toolsSection = defineType({
  name: "toolsSection",
  title: "Mjetet (Tools)",
  type: "document",
  icon: () => "🔧",
  fields: [
    defineField({ name: "subtitleSq", title: "Subtitle (SQ)", type: "string", initialValue: "MJETE INTERAKTIVE" }),
    defineField({ name: "subtitleEn", title: "Subtitle (EN)", type: "string", initialValue: "INTERACTIVE TOOLS" }),
    defineField({ name: "titleSq", title: "Titulli (SQ)", type: "string", initialValue: "Eksploro. Llogarit. Kuptoje." }),
    defineField({ name: "titleEn", title: "Titulli (EN)", type: "string", initialValue: "Explore. Calculate. Understand." }),
    defineField({ name: "descSq", title: "Përshkrimi (SQ)", type: "text", rows: 2 }),
    defineField({ name: "descEn", title: "Përshkrimi (EN)", type: "text", rows: 2 }),
    defineField({
      name: "tools",
      title: "Mjetet",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "titleSq", title: "Emri (SQ)", type: "string" }),
          defineField({ name: "titleEn", title: "Emri (EN)", type: "string" }),
          defineField({ name: "descSq", title: "Përshkrimi (SQ)", type: "text", rows: 2 }),
          defineField({ name: "descEn", title: "Përshkrimi (EN)", type: "text", rows: 2 }),
          defineField({ name: "url", title: "Linku i Mjetit", type: "url" }),
          defineField({
            name: "type",
            title: "Lloji",
            type: "string",
            options: { list: ["matrix", "plotter", "regression"] },
          }),
        ],
        preview: { select: { title: "titleSq" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Tools Section" }) },
});
