import { getSkills } from "@/lib/skills";
import React from "react";

const SkillsSection = async () => {
  const skills = await getSkills("frontend");
  return (
    <div>
      {skills.map((skill) => (
        <p>{skill.label}</p>
      ))}
    </div>
  );
};

export default SkillsSection;
