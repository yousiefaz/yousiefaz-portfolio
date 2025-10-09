import { FC } from "react";
import { Calendar, Eye, Github, LayoutDashboard, Tags } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";

import Carousel from "./carousel";
import ProjectCard from "./project-card";
import InfoItem from "./info-item";

import { urlFor } from "@/sanity/lib/image";

import { Project } from "@/types/interfaces";

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: FC<ProjectItemProps> = ({ project }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <ProjectCard
            imageUrl={urlFor(project.images[0]).url()}
            title={project.title}
          />
        </DialogTrigger>
        <DialogContent className="p-0 sm:max-w-4xl lg:max-w-7xl">
          <DialogHeader className="bg-muted p-4 md:p-6 rounded-md">
            <DialogTitle className="text-foreground capitalize text-xl font-semibold truncate">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          <div className="grid lg:grid-cols-2 gap-4 p-4 max-h-[85vh] overflow-x-hidden overflow-y-auto">
            <Carousel images={project.images} className="size-6" />
            <div className="space-y-4 lg:space-y-6 lg:p-4 size-full">
              <p className="text-sm">{project.description}</p>
              <Separator />
              <article className="space-y-2 lg:space-y-3">
                <InfoItem icon={Calendar} label="published">
                  <p className="font-semibold">
                    {project.publishedAt.toLocaleString()}
                  </p>
                </InfoItem>
                <InfoItem icon={LayoutDashboard} label="layout">
                  <p className="font-semibold">
                    {project.isResponsive ? "responsive" : "static"}
                  </p>
                </InfoItem>
                <InfoItem icon={Tags} label="tags">
                  <div className="flex items-center flex-wrap">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border rounded-sm px-2 py-1 m-0.5 hover:bg-muted cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </InfoItem>
              </article>
              <Separator />
              <div className="flex items-center gap-2">
                <a
                  href={project.demoLink}
                  className={buttonVariants()}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Eye className="size-4" />
                  <span>live demo</span>
                </a>
                <a
                  href={project.githubLink}
                  title="dont forget to give a star :)"
                  className={buttonVariants({ variant: "outline" })}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Github className="size-4" />
                  <span>source code</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectItem;
