import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/utils/constants";
import { Project } from "@/utils/types";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <SectionHeading title="Projects" subTitle="Things I’ve built so far" />
      <div className="grid gap-8 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project: Project, index: number) => {
          return <ProjectCard key={index} project={project} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
