import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row items-center gap-2">
      <Image src="/logos/portfolio.png" alt="logo" width={40} height={40} />
      <h1 className="font-medium text-xl hover:text-foreground">YAZ Portfolio</h1>
    </Link>
  );
};

export default Logo;
