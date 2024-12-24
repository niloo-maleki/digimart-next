"use Client";
import { Input, Typography } from "@MTailwind";
import Image from "next/image";

import React, { useState } from "react";
import DropDown from "./DropDown";

const SearchInput = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  
  return (
    <div className="flex grow relative max-w-xl">
      <Input
        type="search"
        placeholder="جستجو..."
        onChange={handleSearchChange}
        value={search}
        onClick={handleClick}
        labelProps={{
          className: "hidden",
        }}
        icon={<Image alt="search" src="/search.svg" width={24} height={24} />}
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100"
        containerProps={{ className: "min-w-[100px] " }}
      />

      <DropDown className="max-h-[80vh]" open={open} setOpen={setOpen}>
        <Typography variant="small" className=" text-gray-500">
          هیچ گزینه‌ای یافت نشد
        </Typography>
      </DropDown>
    </div>
  );
};

export default SearchInput;
