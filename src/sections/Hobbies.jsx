import React, { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { hobbieType, art, blenderVideos } from "../constants/HobbiesConstants";

export default function Hobbies() {
  const [hobbieTypeInView, setHobbieTypeInView] = useState(hobbieType[0]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [hobbieTypeInView]);

  const Posts = () => {
    let postsList = [];
    switch (hobbieTypeInView) {
      case "Art": {
        postsList = art;
        break;
      }
      case "3D Renders": {
        postsList = blenderVideos;
        break;
      }
    }

    return postsList.map((post) => <PostCard key={nanoid()} post={post} />);
  };

  return (
    <div className="min-h-screen">
      <Header title="Hobbies">
        <div className="flex items-center justify-around">
          {hobbieType.map((type) => (
            <p
              key={nanoid()}
              onClick={() => setHobbieTypeInView(type)}
              className={`basis-1/2 text-center cursor-pointer py-4 hover:bg-[#90909023] hover:backdrop-blur-sm text-base font-semibold 
              ${
                type === hobbieTypeInView
                  ? "text-white border-b-4 border-[#198CD8]"
                  : "text-[#828181]"
              }`}
            >
              {type}
            </p>
          ))}
        </div>
      </Header>
      <Posts />
    </div>
  );
}
