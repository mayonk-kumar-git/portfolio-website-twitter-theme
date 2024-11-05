import React from "react";
import mobileNavbarItems from "../constants/MobileNavBarConstants";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { setSection, setPreviousSection } from "../redux/sectionSlice";

export default function MobileNavBar() {
  const dispatch = useDispatch();
  const sectionInView = useSelector((state) => state.section);
  const handleOnclick = (section) => {
    dispatch(setSection({ section: section }));
    dispatch(setPreviousSection({ previousSection: sectionInView }));
  };
  return (
    <div className="flex sm:hidden justify-around items-center z-[998] fixed bottom-0 w-full pt-5 pb-5 bg-[#000000a2] backdrop-blur-lg">
      {mobileNavbarItems.map((item) => (
        <div
          key={nanoid()}
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={() => handleOnclick(item.id)}
        >
          {sectionInView === item.id ? item.selectedIcon : item.icon}
          <p className="text-xs mt-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
