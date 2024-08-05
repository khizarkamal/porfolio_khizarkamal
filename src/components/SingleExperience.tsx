import React from "react";
import { experiences } from "@/utils/constants";
import { Experience } from "@/utils/types";
import ExperienceCard from "./ExperienceCard";

const SingleExperience = () => {
  return (
    <div>
      {experiences?.map((experience: Experience, index: number) => {
        return (
          <ExperienceCard key={index} experience={experience} index={index} />
        );
      })}
    </div>
  );
};

export default SingleExperience;
