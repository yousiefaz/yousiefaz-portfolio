import { Project } from "@/types/interfaces";
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProjectCard from "@/components/projects/project-card";
import { urlFor } from "@/sanity/lib/image";

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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectItem;
