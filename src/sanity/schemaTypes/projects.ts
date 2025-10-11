// import { UrlRegExp } from "@/lib/utils";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => [Rule.required(), Rule.min(3), Rule.max(100)],
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => [Rule.required(), Rule.min(3), Rule.max(1000)],
    }),

    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),

    defineField({
      name: "demoLink",
      title: "Demo Link",
      type: "string",
      // validation: (Rule) => Rule.regex(UrlRegExp),
    }),

    defineField({
      name: "githubLink",
      title: "Github Repository Link",
      type: "url",
    }),

    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "date",
      validation: (Rule) =>
        Rule.min(new Date("2024-04-16").toDateString()).max(
          new Date().toDateString()
        ),
    }),

    defineField({
      name: "isResponsive",
      title: "Is Responsive",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
