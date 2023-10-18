import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { projects } from "../constants/ProjectsConstants";

export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen">
      <Header title="Projects" />
      {projects.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </div>
  );
}
