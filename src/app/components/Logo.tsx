"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="block w-48">
      <Image
        src="/logo.svg"
        alt="لوگوی دیجی‌کالا"
        className="w-full h-auto"
        width='180'
        height={38}
      />
    </Link>
  );
};

export default Logo;
