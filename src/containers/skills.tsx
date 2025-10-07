import { getSkills } from "@/lib/skills";
import React from "react";

const SkillsSection = () => {
  const skills = getSkills();

  return <div>{skills}</div>;

  export default SkillsSection;