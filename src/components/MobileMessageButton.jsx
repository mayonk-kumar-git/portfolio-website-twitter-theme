import React from "react";
import { SlEnvolope } from "react-icons/sl";

export default function MobileMessageButton() {
  return (
    <div className="flex sm:hidden fixed bottom-24 right-7 justify-center items-center w-12 h-12 rounded-full bg-[#1D9BF0]">
      <SlEnvolope className="w-7 h-7" />
    </div>
  );
}
