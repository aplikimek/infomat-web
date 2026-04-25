import { defineField, defineType } from "sanity";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "Rreth Nesh (About)",
  type: "document",
  icon: () => "ℹ️",
  fields: [
    defineField({ name: "titleSq", title: "Titulli (SQ)", type: "string", initialValue: "Rreth InfoMat" }),
    defineField({ name: "titleEn", title: "Titulli (EN)", type: "string", initialValue: "About InfoMat" }),
    defineField({ name: "subtitleSq", title: "Nëntitulli (SQ)", type: "string", initialValue: "Kush jemi ne" }),
    defineField({ name: "subtitleEn", title: "Nëntitulli (EN)", type: "string", initialValue: "Who we are" }),
    defineField({ name: "desc1Sq", title: "Paragrafi 1 (SQ)", type: "text", rows: 4 }),
    defineField({ name: "desc1En", title: "Paragrafi 1 (EN)", type: "text", rows: 4 }),
    defineField({ name: "desc2Sq", title: "Paragrafi 2 (SQ)", type: "text", rows: 4 }),
    defineField({ name: "desc2En", title: "Paragrafi 2 (EN)", type: "text", rows: 4 }),
    defineField({ name: "photo", title: "Foto / Imazh", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "About Section" }) },
});
