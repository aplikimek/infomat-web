import { groq } from "next-sanity";

export const heroQuery = groq`*[_type == "hero"][0]{ ..., "heroImageUrl": heroImage.asset->url }`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const featuresSectionQuery = groq`*[_type == "featuresSection"][0]`;

export const toolsSectionQuery = groq`*[_type == "toolsSection"][0]`;

export const aboutSectionQuery = groq`*[_type == "aboutSection"][0]`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  _id, title, titleSq, category, description, descriptionSq,
  tags, liveUrl, sourceUrl, "image": image.asset->url
}`;

export const coursesQuery = groq`*[_type == "course"] | order(order asc) {
  _id, titleSq, titleEn, descSq, descEn, level, durationSq, durationEn, url
}`;

export const useCasesQuery = groq`*[_type == "useCase"] | order(order asc) {
  _id, titleSq, titleEn, descSq, descEn, domain, icon
}`;

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, title, titleSq, slug, category, publishedAt,
  readMinutes, excerpt, excerptSq, formula,
  "coverImage": coverImage.asset->url
}`;
