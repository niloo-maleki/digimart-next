"use Client";

import { ChangeEventHandler, ReactNode } from "react";
import { useClickOutside } from "../hooks/useClickOutSide";

export interface DropDownProps {
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  data?: string;
  open: boolean;
  setOpen: (a: boolean) => void;
  children?: ReactNode;
}

const DropDown = (props: DropDownProps) => {
  const { className = "", children, open, setOpen } = props;

  const ref = useClickOutside(() => {
    setOpen(false);
  });

  return (
    <>
      {open && (
        <div
          ref={ref}
          className={`flex flex-col z-50 absolute top-full left-0 bg-white rounded-medium shadow w-full border border-gray-300 p-2
                transition duration-300 ease-in-out transform ${
                open ? "scale-100" : "scale-95"}
             ${className}`}
        >
          <ul className="p-small overflow-y-auto text-sm h-full">
            {children}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropDown;
