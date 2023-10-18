import React from "react";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import Experience from "./Experience";
import Projects from "./Projects";
import Opensource from "./Opensource";
import Academics from "./Academics";
import Achievements from "./Achievements";
import Hobbies from "./Hobbies";
import Message from "./Message";

export default function MainSection() {
  const sectionInView = useSelector((state) => state.section);
  switch (sectionInView) {
    case "profile": {
      return <Profile />;
    }
    case "experience": {
      return <Experience />;
    }
    case "projects": {
      return <Projects />;
    }
    case "opensource": {
      return <Opensource />;
    }
    case "academics": {
      return <Academics />;
    }
    case "achievements": {
      return <Achievements />;
    }
    case "hobbies": {
      return <Hobbies />;
    }
    case "message": {
      return <Message />;
    }
    default: {
      return <Profile />;
    }
  }
}
