import React from "react";
import navbarItems from "../constants/NavBarConstants";
import Logo from "../assets/images/logo.svg";
import { RiFilePaper2Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { setSection, setPreviousSection } from "../redux/sectionSlice";

function NavItem({ item }) {
  const dispatch = useDispatch();
  const sectionInView = useSelector((state) => state.section);

  const handleClick = () => {
    dispatch(setPreviousSection({ previousSection: sectionInView }));
    dispatch(setSection({ section: item.id }));
  };
  return (
    <div
      className="flex flex-auto my-7 items-center cursor-pointer rounded-full hover:bg-[#121212] pt-3 pr-4 pb-3 pl-3"
      onClick={handleClick}
    >
      {item.id === sectionInView ? item.selectedIcon : item.icon}
      <p
        className={`hidden xl:block ml-3 text-xl ${
          item.id === sectionInView ? "font-bold" : ""
        }`}
      >
        {item.name}
      </p>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="sticky top-0 flex flex-col space-y-2 items-end xl:items-start pt-7 px-5 overflow-y-auto max-h-screen">
      <div className="flex flex-auto items-center pl-3 mb-4">
        <img
          src={Logo}
          alt="M"
          className="h-10 w-10 mr-4 xl:mr-0 xl:border-r-2 pr-2"
        />
        <p className="hidden xl:block m-2 text-xl font-bold">Mayonk</p>
      </div>
      {navbarItems.map((item) => (
        <NavItem key={item.id} item={item} />
      ))}
      <a
        href="https://drive.google.com/file/d/1NNfgmd3jsg1714qErczf7Tf6ippcL2th/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center bg-[#1D9BF0] w-fit xl:w-full xl:py-3 rounded-full cursor-pointer mr-5 xl:m-0"
      >
        <p className="hidden xl:block text-lg font-bold">Resume</p>
        <RiFilePaper2Line className="block xl:hidden w-10 h-10 p-2" />
      </a>
    </nav>
  );
}
