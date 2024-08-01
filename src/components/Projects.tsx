import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/utils/constants";
import { Project } from "@/utils/types";
import GithubIcon from "@/assets/icons/code.svg";
import LinkIcon from "@/assets/icons/link.svg";

import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      <SectionHeading title="Projects" subTitle="Things I’ve built so far" />
      <div className="grid gap-8 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project: Project, index: number) => {
          return (
            <div
              className="overflow-hidden shadow-lg rounded-3xl bg-white max-w-80"
              key={index}
            >
              <figure className=" overflow-hidden">
                <Image
                  width={1000}
                  height={256}
                  className="w-full h-52 object-cover"
                  src={project.image}
                  alt={project.title}
                />
              </figure>
              <div className="p-4 space-y-4">
                <h4 className="text-center font-poppins text-lg font-medium">
                  {project.title}
                </h4>
                <p className="font-poppins font-light text-xs text-center text-darkContent">
                  {project?.shortDescription}
                </p>
                <div className="text-center">
                  <span className="font-poppins font-normal text-sm mr-4 text-primary">
                    Tech-Stack :
                  </span>
                  <span className="font-light font-poppins text-xs text-darkContent">
                    {project?.techStack?.map((stack: string) => {
                      return `${stack}, `;
                    })}
                  </span>
                </div>
                <div className="flex items-center  justify-center gap-8 pb-4">
                  <div className="flex gap-2 items-center">
                    <span>
                      <Image
                        width={15}
                        height={15}
                        src={LinkIcon}
                        alt="website"
                      />
                    </span>
                    <Link
                      className="underline font-poppins font-normal text-xs"
                      href={project.siteUrl}
                    >
                      Live Prview
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span>
                      <Image
                        width={15}
                        height={15}
                        src={GithubIcon}
                        alt="github"
                      />
                    </span>
                    <Link
                      className="underline font-poppins font-normal text-xs"
                      href={project.githubLink}
                    >
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;