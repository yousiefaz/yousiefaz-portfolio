import { Skill } from "@/types/interfaces";
import { FC } from "react";
import SkillItem from "@/components/skills/skill-item";

interface SkillsContainerProps {
  data: Skill[];
  label: string;
}

const SkillsContainer: FC<SkillsContainerProps> = ({ data, label }) => {
  return (
    <article className="min-h-[25rem] border border-primary rounded-lg pb-3">
      <h2 className="capitalize text-primary text-2xl font-semibold py-4 px-6 border-b border-primary">
        {label}
      </h2>
      <div className="px-6 py-4 space-y-6">
        {data.map((item, index) => (
          <SkillItem key={item._id} item={item} />
        ))}
      </div>
    </article>
  );
};

export default SkillsContainer;
