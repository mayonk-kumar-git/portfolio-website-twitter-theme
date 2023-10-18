import React, { useState, useEffect } from "react";
import { BiLogoGithub, BiLinkExternal } from "react-icons/bi";
import { nanoid } from "@reduxjs/toolkit";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

import Header from "../components/Header";
import {
  contentType,
  profilePosts,
  profileResume,
  profileMedia,
} from "../constants/ProfileContentConstants";
import { opensource } from "../constants/OpensourceConstants";

import ProfileBanner from "../assets/images/profile/profile-banner.webp";
import ProfilePicture from "../assets/images/profile/profile-picture.png";
import PostCard from "../components/PostCard";
import { socialAccounts } from "../constants/SocialAccounts";

function SocialHandles() {
  return (
    <div className="flex p-4 space-x-2">
      {socialAccounts.map((account) => (
        <div key={nanoid()}>
          <a href={account.url} target="_blank" rel="noopener noreferrer">
            <div className="rounded-full border border-[#6e6e6e] p-2 hover:bg-[#fff] hover:text-[#000]">
              {account.icon}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

function ProfileHeroComponent() {
  return (
    <div className="h-72">
      <img src={ProfileBanner} alt="profile banner" />
      <div className="flex flex-row justify-between">
        <img
          src={ProfilePicture}
          alt="profile picture"
          className="h-32 w-32 rounded-full ml-5 -translate-y-[50%] border-4 border-black inline-block"
        />
        <SocialHandles />
      </div>
    </div>
  );
}

function Bio() {
  return (
    <div className="px-5">
      <p className="text-xl font-bold">Mayonk Kumar Behera</p>
      <p className="text-[#828181] text-sm mb-4">@MayonkKumar</p>
      <p>
        | Software Engineer <br />| Ex-SDE Intern'23 @Amazon <br />| ACM ICPC
        Regionalist'20
      </p>
      <div className="flex mt-4 items-center">
        <MdOutlineLocationOn />
        <p className="text-[#828181] ml-2">Odisha, India</p>
      </div>
      <div>
        <a
          href="mailto:mayonk.kumar9@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <MdOutlineMailOutline />
          <p className="text-[#1D9BF0] ml-2">mayonk.kumar9@gmail.com</p>
        </a>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1NNfgmd3jsg1714qErczf7Tf6ippcL2th/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <BiLinkExternal />
          <p className="text-[#1D9BF0] ml-2">Resume</p>
        </a>
      </div>
      <div className="flex mt-3 space-x-5">
        <a
          href="https://github.com/mayonk-kumar-git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <BiLogoGithub className="mr-2" />
          <p className="text-[#828181] text-sm">20+ Projects</p>
        </a>
        <a
          href="https://github.com/mayonk-kumar-git"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <SiLeetcode className="mr-2" />
          <p className="text-[#828181] text-sm">1700+ Rating</p>
        </a>
      </div>
    </div>
  );
}

function Content() {
  const [contentTypeInView, setContentTypeInView] = useState(contentType[0]);

  const Posts = () => {
    let postsList = [];
    switch (contentTypeInView) {
      case "Post": {
        postsList = profilePosts;
        break;
      }
      case "Resume": {
        postsList = profileResume;
        break;
      }
      case "Open-source": {
        postsList = opensource;
        break;
      }
      case "Media": {
        postsList = profileMedia;
        break;
      }
    }

    return postsList.map((post) => <PostCard key={nanoid()} post={post} />);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-evenly border-b-2 border-gray-900">
        {contentType.map((item) => (
          <p
            key={nanoid()}
            onClick={() => setContentTypeInView(item)}
            className={`basis-1/4 text-center cursor-pointer p-3 hover:bg-[#121212] font-medium 
              ${
                item === contentTypeInView
                  ? "text-white border-b-4 border-[#198CD8]"
                  : "text-[#828181]"
              }`}
          >
            {item}
          </p>
        ))}
      </div>
      <Posts />
    </div>
  );
}

export default function Profile() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen max-w-screen">
      <Header
        title="Mayonk Kumar Behera"
        subtitle={`${profilePosts.length} ${
          profilePosts.length > 1 ? "posts" : "post"
        }`}
      />
      <ProfileHeroComponent />
      <Bio />
      <Content />
    </div>
  );
}
