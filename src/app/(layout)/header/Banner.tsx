"use client";

import Image from "next/image";

const Banner = () => {
    return (
      <a
        href="/landing/deypayday"
        target="_blank"
        className="block w-full h-16"
      >
        <Image
          src="/landing.gif"
          alt="بنر تبلیغاتی"
          className="w-full h-full object-cover"
          width={0}
          height={0}
        />
      </a>
    );
  };
  
  export default Banner;
  