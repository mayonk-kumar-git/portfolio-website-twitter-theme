import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { academics } from "../constants/AcademicsConstants";

export default function Academics() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen">
      <Header title="Academics" />
      {academics.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </div>
  );
}
