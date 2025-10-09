import { Statistics } from "@/types/interfaces";

export function getStatistics() {
  const statistics: Statistics[] = [
    {
      label: "Years of experience",
      value: new Date().getFullYear() - 2021,
    },
    {
      label: "Completed projects",
      value: 5,
    },
  ];
  return { statistics };
}
