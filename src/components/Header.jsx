import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";

import { setSection, setPreviousSection } from "../redux/sectionSlice";

export default function Header({
  title,
  subtitle,
  children,
  showBackArrow = false,
}) {
  const dispatch = useDispatch();
  const sectionInView = useSelector((state) => state.section);
  const previousSection = useSelector((state) => state.previousSection);

  const handleOnclickBack = () => {
    dispatch(setPreviousSection({ previousSection: sectionInView }));
    dispatch(setSection({ section: previousSection }));
  };

  return (
    <header className="z-50 sticky top-0 font-extrabold text-xl bg-[#0000007a] backdrop-blur-sm border-b border-gray-900">
      <div className="flex space-x-4 p-7 items-center">
        {showBackArrow && (
          <BiArrowBack
            className="cursor-pointer hover:text-[#1D9BF0]"
            onClick={handleOnclickBack}
          />
        )}
        <div>
          <p>{title}</p>
          <p className="text-[#828181] text-sm font-normal">{subtitle}</p>
        </div>
      </div>
      {children}
    </header>
  );
}
