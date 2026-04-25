import { groq } from "next-sanity";

export const heroQuery = groq`*[_type == "hero"][0]`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc) {
  _id, title, titleSq, category, description, descriptionSq,
  tags, liveUrl, sourceUrl, "image": image.asset->url
}`;

export const postsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id, title, titleSq, slug, category, publishedAt,
  readMinutes, excerpt, excerptSq, formula,
  "coverImage": coverImage.asset->url
}`;
