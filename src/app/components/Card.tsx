"use client";

import { Badge } from "@material-tailwind/react";
import Image from "next/image";

const Cart = () => {
  return (
    <a
      href="/checkout/cart"
      className="relative flex items-center text-gray-700 hover:text-blue-500"
    >
      <Badge content="5" overlap="circular" placement="bottom-end">
        <Image
          src="/header-cart.svg"
          alt="DigiMart logo"
          className="cursor-pointer"
          width={24}
          height={24}
          priority
        />
      </Badge>
    </a>
  );
};

export default Cart;
