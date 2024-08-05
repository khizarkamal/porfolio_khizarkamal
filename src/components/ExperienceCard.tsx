import { Experience } from "@/utils/types";
import React from "react";

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  return (
    <div className="flex flex-col gap-2 py-4 border-b border-b-lightBorder">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-poppins font-normal text-base md:text-xl text-darkContent">
          {experience?.designation}
        </h3>
        <span className=" inline-block text-green bg-lightGreen px-5 py-2 rounded-3xl font-poppins font-semibold text-xs">
          {experience?.jobType}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="font-poppins font-medium text-sm text-lightContent">
            {experience?.company}
          </h6>
        </div>
        <div>
          <span className="font-poppins font-medium text-sm text-lightContent">
            {experience?.startDate}-{experience?.endDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
