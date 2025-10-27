// import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex flex-row items-center gap-3">
      {/* <Image src="/logos/portfolio.png" alt="logo" width={40} height={40} /> */}
      <h1
        className="font-bold text-2xl hover:text-primary capitalize"
        title="Aka Yaz"
      >
        yousiefaz
      </h1>
    </Link>
  );
};

export default Logo;
