// import { getSkills } from "@/lib/skills";
import { getProjects } from "@/lib/projects"; // ⬅️ IMPORT PROJECTS
import { Statistics } from "@/types/interfaces";

export async function getStatistics() {
  // const frontendSkills = await getSkills("frontend");
  // const backendSkills = await getSkills("backend");
  // const tools = await getSkills("tools");

  // const totalSkills =
  //   frontendSkills.length + backendSkills.length + tools.length;

  const projects = await getProjects();

  const statistics: Statistics[] = [
    {
      label: "Years of experience",
      value: new Date().getFullYear() - 2023,
    },
    {
      label: "Completed projects",
      value: projects.length + 4,
    },
  ];

  return { statistics };
}
