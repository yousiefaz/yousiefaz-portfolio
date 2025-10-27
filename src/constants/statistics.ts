import { getSkills } from "@/lib/skills";
import { Statistics } from "@/types/interfaces";

export async function getStatistics() {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const tools = await getSkills("tools");

  const totalSkills: number =
    frontendSkills.length + backendSkills.length + tools.length - 13;

  const statistics: Statistics[] = [
    {
      label: "Years of experience",
      value: new Date().getFullYear() - 2021,
    },
    {
      label: "Completed projects",
      value: totalSkills,
    },
  ];
  return { statistics };
}
