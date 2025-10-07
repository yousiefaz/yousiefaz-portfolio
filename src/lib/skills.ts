import { client } from "@/sanity/lib/client";

export function getSkills() {
  const query = `
    *[_type == "skills"]{
        _id, label, value, category
    }`;
  const data = client.fetch(query);
}
