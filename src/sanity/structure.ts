import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("InfoMat CMS")
    .items([
      S.listItem()
        .title("⚙️ Cilësimet e Faqes")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("🏠 Hero Section")
        .child(S.document().schemaType("hero").documentId("hero")),
      S.divider(),
      S.documentTypeListItem("project").title("📁 Projektet"),
      S.documentTypeListItem("post").title("📝 Blog Artikujt"),
    ]);
