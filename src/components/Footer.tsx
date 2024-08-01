import React from "react";
import SocialLinks from "./SocialLinks";
import { navItems } from "@/utils/constants";
import { NavItem } from "@/utils/types";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="my-8">
      <div className="flex py-4 border-b border-b-lightBorder gap-4 flex-col md:flex-row items-center justify-between">
        <div>
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            target="_blank"
            className="font-sans font-normal text-base hover:text-primary hover:text-pretty"
            href={"mailto:khizarkamal0321@gmail.com"}
          >
            khizarkamal0321@gmail.com
          </Link>
          <SocialLinks />
        </div>
      </div>
      <div className="mt-4">
        <ul className="flex py-4 flex-col items-center md:flex-row gap-4 text-darkContent md:gap-11">
          {navItems.map((item: NavItem) => {
            return (
              <Link
                className="hover:text-primary font-sans font-medium text-base block"
                key={item?.id}
                href={item?.link}
              >
                {item?.text}
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
