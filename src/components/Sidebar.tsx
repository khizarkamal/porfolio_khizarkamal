import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cancel from "@/assets/icons/cancel.svg";
import DownloadResume from "./DownloadResume";
import { navItems } from "@/utils/constants";
import { NavItem } from "@/utils/types";
import SocialLinks from "./SocialLinks";
import Logo from "./Logo";

const Sidebar = ({ sideBarHandler }: any) => {
  const buttonClasses =
    "flex items-center gap-2 bg-gradient-primary p-4 font-poppins text-sm font-bold capitalize text-primary  mt-4 rounded-3xl hover:px-4 duration-500 hover:text-white hover:bg-gradient-primary bg-opacity-30 hover:-rotate-2 ";
  return (
    <div className="block fixed right-0 top-0 bottom-0 bg-white md:hidden shadow-xl w-72 min-h-screen z-[999]">
      <div className="p-8">
        <div
          onClick={() => sideBarHandler(false)}
          className="flex justify-end cursor-pointer my-4"
          title="Close Sidebar"
        >
          <Image src={Cancel} alt="Cancel Icon" width={30} height={30} />
        </div>
        <div className="text-center">
          <Logo />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-8">
          {navItems.map((item: NavItem) => {
            return (
              <Link
                onClick={() => sideBarHandler(false)}
                className="hover:text-primary font-sans font-medium text-xl block"
                key={item?.id}
                href={item?.link}
              >
                {item?.text}
              </Link>
            );
          })}
        </ul>
        <div className="flex items-center my-8 justify-center">
          <SocialLinks />
        </div>
        <div>
          <DownloadResume styles={buttonClasses} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
