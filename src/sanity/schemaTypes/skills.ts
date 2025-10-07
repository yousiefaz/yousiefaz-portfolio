import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  type: "document",
  title: "Skills",
  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
      validation: (Rule) => [Rule.required().min(3).max(50)],
    }),
    defineField({
      name: "value",
      type: "number",
      title: "Percentage",
      validation: (Rule) => [
        Rule.required(),
        Rule.min(1).error("ur adding a skill with 0%, really?!!"),
        Rule.max(100).error("ur not homelander XD"),
      ],
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Category",
      initialValue: "Frontend",
      options: {
        list: [
          { title: "Frontend", value: "frontend" },
          { title: "Backend", value: "backend" },
          { title: "Tools", value: "tools" },
        ],
      },
      validation: (Rule) => [Rule.required()],
    }),
  ],
});
