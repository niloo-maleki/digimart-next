"use client";

import { Button, Typography } from "@material-tailwind/react";
import Image from "next/image";

const UserMenu = () => {

    return (
              <Button
                className="flex items-center justify-center border-blue-gray-400 py-1 px-2"
                variant="outlined"
                size="sm"
              >
                <Image
                  src="/signIn.svg"
                  alt="signIn"
                  className="flex ml-2"
                  width={24}
                  height={24}
                  priority
                />
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal cursor-pointer"
                >
                  ورود / ثبت‌نام
                </Typography>
              </Button>
    );
  };
  
  export default UserMenu;
  