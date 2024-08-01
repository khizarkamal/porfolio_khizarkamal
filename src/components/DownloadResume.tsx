import React from "react";

import DownloadIcon from "@/assets/icons/download.svg";
import Link from "next/link";
import Image from "next/image";

const DownloadResume = ({ styles }: any) => {
  return (
    <div className="flex justify-center items-center">
      <Link
        className={styles}
        href={"/resume.pdf"}
        target="_blank"
        download={"resume.pdf"}
      >
        <span>
          <Image
            src={DownloadIcon}
            alt="Downlaod Icon"
            width={20}
            height={20}
            className="text-white"
          />
        </span>
        Download Resume
      </Link>
    </div>
  );
};

export default DownloadResume;
