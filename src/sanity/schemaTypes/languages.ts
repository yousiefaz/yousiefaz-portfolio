import { defineField, defineType } from "sanity";

export default defineType({
  name: "languages",
  type: "document",
  title: "Languages",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => [Rule.required().min(3).max(20)],
    }),
    defineField({
      name: "value",
      title: "Percentage",
      type: "number",
      validation: (Rule) => [Rule.required(), Rule.min(1), Rule.max(100)],
    }),
  ],
});
