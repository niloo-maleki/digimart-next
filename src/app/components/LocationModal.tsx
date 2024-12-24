"use client";
import React from "react";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  IconButton,
  Input,
  Typography,
} from "../MTailwind";
import Image from "next/image";

interface LocationModalProps {
  isOpen: boolean;
  setOpen: (a: boolean) => void;
}

const LocationModal = (props: LocationModalProps) => {
  const { isOpen, setOpen } = props;

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Dialog size="sm" open={isOpen} handler={handleOpen} className="p-4">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray">
          انتخاب شهر
        </Typography>

        <IconButton
          size="sm"
          variant="text"
          className="!absolute left-3.5 top-3.5"
          onClick={handleOpen}
        >
          <Image alt="close Modal" src={"/close.svg"} width={24} height={24} />
        </IconButton>
      </DialogHeader>

      <DialogBody>
        <div className="flex flex-col space-y-4">
          <Input
            color="gray"
            size="lg"
            placeholder="جستجو در استان ها و شهرهای ایران"
            name="name"
            className="placeholder:opacity-100 focus:!border-t-gray-900"
            containerProps={{
              className: "!min-w-full",
            }}
            labelProps={{
              className: "hidden",
            }}
          />
          <Typography variant="small" color="gray" className="font-semibold">
            برای مشاهده تخفیف‌ها و کالا‌های قابل ارسال به شهرتان، آن را انتخاب
            کنید
          </Typography>
          <Typography variant="paragraph" color="gray" className="font-bold">
            شهرهای پرتکرار
          </Typography>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default LocationModal;
