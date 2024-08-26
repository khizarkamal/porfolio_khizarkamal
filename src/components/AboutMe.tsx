"use client";

import React, { useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

import DownloadResume from "./DownloadResume";

const AboutMe = () => {
  const firstParagraph = useRef<HTMLParagraphElement | null>(null);
  const secondParagraph = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    const aboutMeSection = document.getElementById("about-me") as HTMLElement;
    const options = {
      threshold: 0,
      root: null,
      rootMargin: "-100px 0px 0px 0px",
    };
    const aboutMeIntersectionObserver = new IntersectionObserver(
      (entries, aboutMeIntersectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }
          if (firstParagraph.current && secondParagraph.current) {
            firstParagraph.current.classList.add("translate-x-0");
            secondParagraph.current.classList.add("translate-x-0");
          }
        });
      },
      options
    );
    aboutMeIntersectionObserver.observe(aboutMeSection);
  }, []);

  const tailwindClasses =
    "flex items-center gap-2 bg-gradient-primary p-4 font-poppins font-bold capitalize text-primary  mt-4 rounded-3xl hover:px-6 duration-500 hover:text-white hover:bg-gradient-primary bg-opacity-30 hover:rotate-2 ";
  return (
    <div>
      <SectionHeading title="About Me" subTitle="" />
      <div
        className="font-poppins font-normal text-sm md:text-lg
      text-center"
      >
        <p
          ref={firstParagraph}
          className="mb-8 -translate-x-full transition-all duration-1000 ease-in-out"
        >
          Dynamic and dedicated React JavaScript developer with 2 years of
          hands-on experience specializing in building responsive and
          user-friendly web applications. I excel in developing robust front-end
          solutions using React JS, JavaScript (ES6+), and have a strong
          foundation in HTML/CSS. My expertise includes proficient use of Redux
          for state management and integrating with Restful APIs to deliver
          seamless user experiences.
        </p>
        <p
          ref={secondParagraph}
          className=" translate-x-full transition-all duration-1000 ease-in-out"
        >
          I take pride in creating efficient and maintainable code with a keen
          focus on User Interface and User Experience design principles.
          Actively involved in the developer community, I contribute to
          open-source projects and stay abreast of the latest industry trends
          and best practices.
        </p>
      </div>
      <DownloadResume styles={tailwindClasses} />
    </div>
  );
};

export default AboutMe;
