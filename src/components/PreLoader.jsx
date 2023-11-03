import React from "react";
import "../App.css";

export default function PreLoader() {
  return (
    <div className="z-[999] w-screen h-screen bg-black fixed left-0 top-0 flex justify-center items-center">
      <svg
        id="preloader-logo"
        width="166"
        height="148"
        viewBox="0 0 166 148"
        fillRule="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M108.6 2H107.012L106.652 3.54614L84.5002 98.6151L59.9365 3.4999L59.5491 2H58H4H2V4V7.8V9.8H4H13V138.2H4H2V140.2V144V146H4H31.2H33.2V144V140.2V138.2H31.2H22.2V26.6308L54.2701 144.525L54.6714 146H56.2H81.2H82.7877L83.1479 144.454L110 29.1686V138.2H101H99V140.2V144V146H101H162H164V144V140.2V138.2H162H153V9.8H162H164V7.8V4V2H162H108.6Z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
