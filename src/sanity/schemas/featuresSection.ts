import { defineField, defineType } from "sanity";

export const featuresSection = defineType({
  name: "featuresSection",
  title: "Veçoritë (Features)",
  type: "document",
  icon: () => "⭐",
  fields: [
    defineField({
      name: "title",
      title: "Titulli seksionit (SQ)",
      type: "string",
      initialValue: "Veçori të Fuqishme për Zgjidhje më të Zgjuara",
    }),
    defineField({
      name: "titleEn",
      title: "Titulli seksionit (EN)",
      type: "string",
      initialValue: "Powerful Features for Smarter Solutions",
    }),
    defineField({
      name: "items",
      title: "Kartat e Veçorive",
      type: "array",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "titleSq", title: "Titulli (SQ)", type: "string" }),
          defineField({ name: "titleEn", title: "Titulli (EN)", type: "string" }),
          defineField({ name: "descSq", title: "Përshkrimi (SQ)", type: "text", rows: 2 }),
          defineField({ name: "descEn", title: "Përshkrimi (EN)", type: "text", rows: 2 }),
          defineField({
            name: "icon",
            title: "Ikona",
            type: "string",
            options: { list: ["courses", "datatools", "algorithms", "casestudies"] },
          }),
        ],
        preview: { select: { title: "titleSq" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Features Section" }) },
});
