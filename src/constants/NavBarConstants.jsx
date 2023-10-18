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

const navbarItems = [
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
    id: "academics",
    name: "Academics",
    icon: <BsBook className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsBookFill className={`${iconSize} ${marginRight}`} />,
  },
  {
    id: "opensource",
    name: "Open-source",
    icon: <BsPeople className={`${iconSize} ${marginRight}`} />,
    selectedIcon: <BsPeopleFill className={`${iconSize} ${marginRight}`} />,
  },
  {
    id: "hobbies",
    name: "Hobbies",
    icon: <BsPalette className={`${iconSize} ${marginRight}`} />,
    selectedIcon: (
      <BsFillPaletteFill className={`${iconSize} ${marginRight}`} />
    ),
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

export default navbarItems;
