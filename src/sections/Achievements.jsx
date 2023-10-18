import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { achievements } from "../constants/AchievementsConstants";

export default function Achievements() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen">
      <Header title="Achievments" />
      {achievements.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </div>
  );
}
