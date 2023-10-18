import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setSection, setPreviousSection } from "../redux/sectionSlice";

export default function MobileMessageButton() {
  const dispatch = useDispatch();
  const sectionInView = useSelector((state) => state.section);
  const handleOnclick = () => {
    dispatch(setSection({ section: "message" }));
    dispatch(setPreviousSection({ previousSection: sectionInView }));
  };
  if (sectionInView === "message") {
    return <></>;
  } else {
    return (
      <div
        onClick={handleOnclick}
        className="flex sm:hidden fixed bottom-24 left-3 justify-center items-center w-16 h-16 rounded-full bg-[#1D9BF0]"
      >
        <SlEnvolope className="w-7 h-7" />
      </div>
    );
  }
}
