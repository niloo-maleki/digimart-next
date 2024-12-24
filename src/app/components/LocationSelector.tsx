"use client";

import { Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import LocationModal from "./LocationModal";

const LocationSelector = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <Button
          variant="text"
          className="px-3 py-1 flex items-center justify-between gap-2 rounded-full bg-orange-50 hover:bg-orange-100 focus:outline-none"
          onClick={() => setOpenModal(true)}
        >
          <Typography className="text-orange-500 font-medium" variant="small">
            شهر خود را انتخاب کنید
          </Typography>
        </Button>

        {isTooltipVisible && (
          <div className="absolute -bottom-4 translate-y-full mt-2 left-1/2 transform -translate-x-1/2 bg-indigo-900 text-white text-sm rounded-lg shadow-md p-3 w-60 transition-opacity duration-200 opacity-100">
            برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال، شهر را انتخاب کنید.
          </div>
        )}
      </div>
      {openModal && (
        <LocationModal isOpen={openModal} setOpen={() => setOpenModal(false)} />
      )}
    </>
  );
};

export default LocationSelector;
