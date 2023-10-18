import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { experienceList } from "../constants/ExperienceConstants";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

export default function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen">
      <Header title="Experience" />
      {experienceList.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </div>
  );
}
