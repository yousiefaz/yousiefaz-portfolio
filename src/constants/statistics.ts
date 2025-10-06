import { Staistics } from "@/types/interfaces";

export function getStatistics() {
  const staistics: Staistics[] = [
    {
      label: "Years of experience",
      value: new Date().getFullYear() - 2022,
    },
    {
      label: "Completed projects",
      value: 5,
    },
  ];
  return { staistics };
}
