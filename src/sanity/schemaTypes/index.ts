import { type SchemaTypeDefinition } from "sanity";

import skills from "./skills";
import projects from "./projects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, projects],
};
