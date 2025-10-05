import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio Content")
    .items([
      S.documentTypeListItem("skills").title("Skills"),
      S.documentTypeListItem("projects").title("Projects"),
      S.documentTypeListItem("languages").title("Languages"),

      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["skills", "projects", "languages"].includes(item.getId()!)
      ),
    ]);
