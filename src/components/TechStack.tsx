import React from "react";
import { techStackImages } from "@/utils/constants";
import Image from "next/image";
import SectionHeading from "./SectionHeading";
const TechStack = () => {
  return (
    <>
      <SectionHeading
        title=" My Tech Stack"
        subTitle="Technologies I’ve been working with recently"
      />
      <div className="grid grid-cols-2 gap-y-8 justify-items-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
        {techStackImages.map((image, index) => {
          return (
            <Image
              key={index}
              className="w-20 h-20 md:w-28 md:h-28 object-contain"
              src={image}
              alt="tect-stack-image"
            />
          );
        })}
      </div>
    </>
  );
};

export default TechStack;
