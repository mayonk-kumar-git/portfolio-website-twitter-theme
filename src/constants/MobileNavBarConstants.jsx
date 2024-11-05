import {
  BsPerson,
  BsFillPersonFill,
  BsFileCode,
  BsFileCodeFill,
  BsPuzzleFill,
  BsPuzzle,
  BsTrophy,
  BsTrophyFill,
  BsEnvelopePaper,
  BsEnvelopePaperFill,
} from "react-icons/bs";

const iconSize = "h-6 w-6";
const marginRight = "mr-0";

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
  {
    id: "message",
    name: "Message",
    icon: <BsEnvelopePaper className={`${iconSize} ${marginRight}`} />,
    selectedIcon: (
      <BsEnvelopePaperFill className={`${iconSize} ${marginRight}`} />
    ),
  },
];

export default mobileNavbarItems;
