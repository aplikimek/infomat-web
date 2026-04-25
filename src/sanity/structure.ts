import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("InfoMat CMS")
    .items([
      S.listItem()
        .title("⚙️  Cilësimet & Menu")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

      S.divider(),

      S.listItem()
        .title("🏠  Hero (Faqja Kryesore)")
        .child(S.document().schemaType("hero").documentId("hero")),

      S.listItem()
        .title("⭐  Veçoritë (Features)")
        .child(S.document().schemaType("featuresSection").documentId("featuresSection")),

      S.listItem()
        .title("🔧  Mjetet (Tools)")
        .child(S.document().schemaType("toolsSection").documentId("toolsSection")),

      S.listItem()
        .title("ℹ️  Rreth Nesh (About)")
        .child(S.document().schemaType("aboutSection").documentId("aboutSection")),

      S.divider(),

      S.documentTypeListItem("course").title("🎓  Kurset"),
      S.documentTypeListItem("useCase").title("💡  Raste Përdorimi"),
      S.documentTypeListItem("project").title("📁  Projektet"),
      S.documentTypeListItem("post").title("📝  Blog Artikujt"),
    ]);
