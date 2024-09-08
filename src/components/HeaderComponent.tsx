import React from "react";
import Image from "next/image";
import profileImage from "@/assets/images/Khizar.jpg";

const HeaderComponent = () => {
  return (
    <header className="flex justify-between items-center gap-4 my-20">
      <div className="font-poppins text-center font-bold text-4xl flex flex-col gap-2 md:text-left text-primary">
        <h3>
          Hi{" "}
          <span className="inline-block cursor-pointer transition-all hover:rotate-12 duration-500 ease-in-out">
            👋
          </span>
        </h3>
        <h3>My name is</h3>
        <h3 className="animate-in slide-in-from-left duration-1000 font-poppins font-bold leading-10 tracking-wide flex gap-4 justify-center md:justify-start">
          <span className="text-purple inline-block underline decoration-wavy underline-offset-4 decoration-purple decoration-4">
            Khizar
          </span>
          <span className="text-lightBlue mr-4 inline-block underline underline-offset-4 decoration-wavy decoration-lightBlue decoration-4">
            Kamal
          </span>
        </h3>
        <h3>I build things for the web and love ☕</h3>
      </div>
      <figure className="hidden rounded-full bg-gradient-primary sm:flex sm:items-center sm:justify-center sm:min-w-56 sm:min-h-56 sm:max-w-56 sm:max-h-56  md:min-w-80 md:min-h-80 md:max-w-80 md:max-h-80 animate-in slide-in-from-right duration-1000 ">
        <Image
          src={profileImage}
          className="w-[95%] h-[95%] custom-radius hover:hover-custome-radius transition-all duration-700 object-cover grayscale  hover:grayscale-0 cursor-pointer"
          alt="profile-image"
        />
      </figure>
    </header>
  );
};

export default HeaderComponent;
