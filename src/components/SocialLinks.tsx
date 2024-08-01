import React from "react";
import Image from "next/image";
import { socialLinks } from "@/utils/constants";
import { SocialLink } from "@/utils/types";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-5">
      {socialLinks.map((link: SocialLink) => {
        return (
          <Link
            className="hover:text-primary w-[30px] h-[30px]"
            href={link.link}
            key={link?.id}
          >
            <Image
              width={30}
              height={30}
              src={link.icon}
              alt="social-icon"
              className=" object-cover w-full h-full"
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
