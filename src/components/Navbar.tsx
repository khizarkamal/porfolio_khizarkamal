"use client";

import React, { useState, useEffect } from "react";
import { navItems } from "@/utils/constants";
import { NavItem } from "@/utils/types";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import MenuIcon from "@/assets/icons/menu.svg";
import Logo from "./Logo";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openSidebar, setOpenSideBar] = useState(false);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up the effect by resetting the overflow style when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [openSidebar]);

  return (
    <nav
      className="flex items-center justify-between py-4 
       w-full"
    >
      <div className="font-poppins font-semibold text-xl">
        <Logo />
      </div>
      <div className="hidden md:flex md:items-center  md:gap-12">
        <ul className="flex gap-4 text-darkContent md:gap-11">
          {navItems.map((item: NavItem) => {
            return (
              <Link
                className="hover:text-primary font-sans font-medium text-xl block"
                key={item?.id}
                href={item?.link}
              >
                {item?.text}
              </Link>
            );
          })}
        </ul>
        <SocialLinks />
      </div>
      <div
        onClick={() => setOpenSideBar(true)}
        className="block cursor-pointer md:hidden"
      >
        <Image
          alt="Menu Icon"
          width={20}
          height={20}
          src={MenuIcon}
          className=""
        />
      </div>
      {openSidebar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className=" cursor-pointer w-screen h-screen fixed top-0 left-0 right-0 bottom-0 z-[99] bg-black opacity-60"
        ></div>
      )}
      {openSidebar && <Sidebar sideBarHandler={setOpenSideBar} />}
    </nav>
  );
};

export default Navbar;
