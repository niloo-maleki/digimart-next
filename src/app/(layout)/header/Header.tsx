"use client";

import Banner from "./Banner";
import Cart from "../../components/Card";
import LocationSelector from "../../components/LocationSelector";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import UserMenu from "../../components/UserMenu";
import SearchInput from "@src/app/components/SearchInput";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <Banner />
      <div className="container mx-auto flex flex-col gap-2 pt-4 px-6 w-full">
        <div className="flex items-center gap-6 justify-between relative z-5">
          <div className="flex items-center gap-6 flex-grow">
            <Logo />
            <SearchInput />
          </div>
          <div className="flex items-center gap-6">
            <UserMenu />
            <Cart />
          </div>
        </div>
        <div className="flex items-center justify-between">
        <Navigation />
        <LocationSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
