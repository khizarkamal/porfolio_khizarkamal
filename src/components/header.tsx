import React from "react";
import Image from "next/image";
import profileImage from "@/assets/images/Khizar.jpg";

const header = () => {
  return (
    <header className="flex justify-between items-center gap-4 my-20">
      <div className="font-poppins text-center font-bold text-4xl flex flex-col gap-2 md:text-left text-primary">
        <h3>
          Hi <span>👋</span>
        </h3>
        <h3>My name is</h3>
        <h3 className="animate-in slide-in-from-left duration-1000 font-poppins font-bold leading-10 tracking-wide flex gap-4 justify-center md:justify-start ">
          <span className="text-purple inline-block">Khizar</span>
          <span className="text-lightBlue mr-4 inline-block">Kamal</span>
        </h3>
        <h3>I build things for the web and love ☕</h3>
      </div>
      <figure className="hidden rounded-full bg-gradient-primary sm:flex sm:items-center sm:justify-center sm:min-w-56 sm:min-h-56 sm:max-w-56 sm:max-h-56  md:min-w-80 md:min-h-80 md:max-w-80 md:max-h-80 animate-in slide-in-from-right duration-1000">
        <Image
          src={profileImage}
          className="w-[95%] h-[95%] object-cover grayscale rounded-full hover:grayscale-0 duration-500 cursor-pointer"
          alt="profile-image"
        />
      </figure>
    </header>
  );
};

export default header;
