import { type SchemaTypeDefinition } from "sanity";

import skills from "./skills";
import projects from "./projects";
import languages from "./languages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skills, projects, languages],
};
