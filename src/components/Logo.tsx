import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="font-playfair font-semibold text-2xl" href={"/"}>
      <span className="text-purple">Dev</span>
      <span className="text-lightBlue">Buff</span>
    </Link>
  );
};

export default Logo;
