import {
  BsPerson,
  BsFillPersonFill,
  BsFileCode,
  BsFileCodeFill,
  BsPeopleFill,
  BsPeople,
  BsPuzzleFill,
  BsPuzzle,
  BsTrophy,
  BsTrophyFill,
  BsBook,
  BsBookFill,
  BsPalette,
  BsFillPaletteFill,
  BsEnvelopePaper,
  BsEnvelopePaperFill,
} from "react-icons/bs";

const iconSize = "h-6 w-6";
const marginRight = "mr-4 xl:mr-0";

const mobileNavbarItems = [
  {
    id: "profile",
    name: "Profile",
    icon: <BsPerson className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsFillPersonFill className={`${iconSize} ${marginRight}`} />,
  },
  {
    id: "experience",
    name: "Experience",
    icon: <BsFileCode className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsFileCodeFill className={`${iconSize} ${marginRight}`} />,
  },
  {
    id: "projects",
    name: "Projects",
    icon: <BsPuzzle className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsPuzzleFill className={`${iconSize} ${marginRight}`} />,
  },
  {
    id: "achievements",
    name: "Achievements",
    icon: <BsTrophy className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsTrophyFill className={`${iconSize} ${marginRight}`} />,
  },
];

export default mobileNavbarItems;
