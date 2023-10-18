import React, { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { opensource } from "../constants/OpensourceConstants";

export default function Opensource() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="min-h-screen">
      <Header title="Open-source" />
      {opensource.map((post) => (
        <PostCard key={nanoid()} post={post} />
      ))}
    </div>
  );
}
