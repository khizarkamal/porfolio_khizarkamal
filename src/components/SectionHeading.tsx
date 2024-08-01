import React from "react";
import { SectionHeadingProps } from "@/utils/types";

const SectionHeading = ({ title, subTitle }: SectionHeadingProps) => {
  return (
    <div className="mb-16 mt-16">
      <h1 className=" font-poppins font-bold text-3xl text-center text-primary mb-4">
        {title}
      </h1>
      <p className="font-poppins font-normal text-darkContent text-lg text-center">
        {" "}
        {subTitle}
      </p>
    </div>
  );
};

export default SectionHeading;
