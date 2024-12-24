"use client";

import Banner from "./Banner";
import Cart from "../../components/Card";
import LocationSelector from "../../components/LocationSelector";
import Logo from "../../components/Logo";
import Navigation from "../../components/Navigation";
import UserMenu from "../../components/UserMenu";
import SearchInput from "@src/app/components/SearchInput";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useScrollHide from "@src/app/hooks/useScrollHide";

const Header = () => {

  const navRef = useRef<HTMLDivElement | null>(null);
  const hideOnScroll = useScrollHide();


  useEffect(() => {
    if (navRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 0.3, ease: "power2.out" } });

      if (hideOnScroll) {
        tl.to(navRef.current, {
          height: 0,     
          opacity: 0,    
          overflow: "hidden",
        });
      } else {
        tl.to(navRef.current, {
          height: "auto", 
          opacity: 1,    
          overflow: "visible",
        });
      }
    }
  }, [hideOnScroll]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <Banner />
      <div className="flex flex-col justify-center gap-2 pt-4 px-12 w-full">
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

        <div
          ref={navRef}
          className="flex items-center justify-between overflow-hidden transition-all duration-500"
        >
          <Navigation />
          <LocationSelector />
        </div>
      </div>
    </header>
  );
};

export default Header;
