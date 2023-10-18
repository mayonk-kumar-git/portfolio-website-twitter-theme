import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { BiLinkExternal } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

import { setSection } from "../redux/sectionSlice";
import { knowMe, media } from "../constants/RightSectionConstants";

export default function RightSection() {
  const dispatch = useDispatch();

  const handleOnClickMedia = () => {
    dispatch(setSection({ section: "hobbies" }));
  };

  const handleOnClickKnowMeItem = (section) => {
    dispatch(setSection({ section: section }));
  };

  return (
    <div className="h-screen overflow-y-auto sticky top-0 p-4">
      <div></div>
      {/* --------------------------------------------------------------- */}
      <div className="bg-[#16181C] p-2 lg:p-4 rounded-2xl my-3">
        <p className="text-xl lg:text-2xl font-bold mb-4">#OpenToWork</p>
        <div>
          <a
            href="https://drive.google.com/file/d/1NNfgmd3jsg1714qErczf7Tf6ippcL2th/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm"
          >
            <BiLinkExternal />
            <p className="text-[#1D9BF0] ml-2">Resume</p>
          </a>
        </div>
        <div>
          <a
            href="mailto:mayonk.kumar9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm"
          >
            <MdOutlineMailOutline />
            <p className="text-[#1D9BF0] ml-2">mayonk.kumar9@gmail.com</p>
          </a>
        </div>
      </div>
      {/* --------------------------------------------------------------- */}
      <div
        className="bg-[#16181C] rounded-2xl p-1 my-3 flex flex-wrap cursor-pointer"
        onClick={handleOnClickMedia}
      >
        {media.map((item) => (
          <div key={nanoid()} className="basis-1/3 p-[1px]">
            {item}
          </div>
        ))}
      </div>
      {/* --------------------------------------------------------------- */}
      <div className="bg-[#16181C] p-2 lg:p-4 rounded-2xl my-3">
        <p className="text-lg lg:text-2xl font-bold mb-4">Know me</p>
        {knowMe.map((item) => {
          return (
            <div
              key={nanoid()}
              className="my-1 cursor-pointer flex justify-between items-center hover:bg-[#23272d] p-2 rounded-xl"
              onClick={() => {
                handleOnClickKnowMeItem(item.section);
              }}
            >
              <div>
                <p className="text-sm lg:text-base font-bold">{item.heading}</p>
                <p className="text-xs lg:text-sm text-[#828181] ">
                  {item.subheading}
                </p>
              </div>
              <div>{item.image}</div>
            </div>
          );
        })}
      </div>
      {/* --------------------------------------------------------------- */}
    </div>
  );
}
