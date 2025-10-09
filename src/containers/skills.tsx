import SectionTitle from "@/components/section-title";
import SkillsContainer from "@/components/skills/skills-container";
import { Effect } from "@/components/ui/effects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabItems } from "@/constants/tab-items";
import { getSkills } from "@/lib/skills";
import React from "react";

const SkillsSection = async () => {
  const frontendSkills = await getSkills("frontend");
  const backendSkills = await getSkills("backend");
  const Tools = await getSkills("tools");
  return (
    <section id="skills" className="relative container space-y-6">
      {/* <Effect
        className="-right-40 md:-right-90 top-60 md:top-120"
        animateIn={false}
        opacity={0.3}
      /> */}
      <SectionTitle
        title="skills"
        description="my core technical expertise and tools."
      />
      <Tabs defaultValue="{tabItems[0].value}">
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {/* tabs list **/}
          <TabsList className="grid grid-cols-3 md:grid-cols-1 gap-2 w-full h-fit">
            {TabItems.map((item) => {
              const { value, label, icon: Icon } = item;
              return (
                <TabsTrigger key={value} value={value} className="w-full gap-2">
                  <Icon className="size-4" />
                  <span className="capitalize">{label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs list **/}

          {/* tabs content **/}
          <div className="md:col-span-2 bg-background/50">
            <TabsContent value="frontend">
              <SkillsContainer data={frontendSkills} label="frontend" />
            </TabsContent>

            <TabsContent value="backend">
              <SkillsContainer data={backendSkills} label="backend" />
            </TabsContent>

            <TabsContent value="tools">
              <SkillsContainer data={Tools} label="tools" />
            </TabsContent>
          </div>
          {/* tabs content **/}
        </div>
      </Tabs>
    </section>
  );
};

export default SkillsSection;
