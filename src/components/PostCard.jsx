import React, { useState } from "react";
import { RiChat1Line } from "react-icons/ri";
import { TbRepeat } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiBarChart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import Carousel from "./Carousel";
import { nanoid } from "@reduxjs/toolkit";

function PostInteractionButtons() {
  const [liked, setLiked] = useState(false);
  const iconStyle = "p-2 h-9 w-9 rounded-full cursor-pointer";
  return (
    <div className="flex justify-between mt-4 text-[#828181] px-4">
      <RiChat1Line
        className={`${iconStyle} hover:bg-[#83ccfc28] hover:text-[#198CD8]`}
      />
      <TbRepeat
        className={`${iconStyle} hover:bg-[#83fcd028] hover:text-[#19d892]`}
      />
      {liked ? (
        <AiFillHeart
          onClick={() => setLiked(false)}
          className={`${iconStyle} hover:bg-[#fc838328] hover:text-[#d8196c] text-[#d8196c]`}
        />
      ) : (
        <AiOutlineHeart
          onClick={() => setLiked(true)}
          className={`${iconStyle} hover:bg-[#fc838328] hover:text-[#d8196c]`}
        />
      )}
      <BiBarChart
        className={`${iconStyle} hover:bg-[#83ccfc28] hover:text-[#198CD8]`}
      />
      <FiShare
        className={`${iconStyle} hover:bg-[#83ccfc28] hover:text-[#198CD8]`}
      />
    </div>
  );
}

export default function PostCard({ post }) {
  return (
    <div className="flex space-x-3 p-4 border-b-2 border-gray-900 w-full">
      {/* Profile photo start */}
      {post.profilPic}
      {/* Profile photo end */}
      <div className="flex flex-col w-full">
        {/* Bio details start */}
        <div className="flex items-center space-x-1">
          {post.typeIcon}
          <p className="text-[#828181] text-sm">{post.type}</p>
        </div>
        <div className="flex space-x-3 items-center">
          <p className="font-bold">{post.name}</p>
          <p className="text-[#828181] text-sm">{post.userName}</p>
          <p>·</p>
          <p className="text-[#828181] text-sm">{post.date}</p>
        </div>
        {/* Post written content start */}
        {post.description && <div className="text-sm">{post.description}</div>}
        {/* Post written content end */}
        {/* Hash Tags start */}
        <p className="text-sm text-[#1D9BF0] mt-3">{post.hashTags}</p>
        {/* Hash Tags end */}
        {/* Links start */}
        {post.links && (
          <div className="mt-4 flex flex-wrap">
            {post.links.map((link) => (
              <a
                key={nanoid()}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1D9BF0] border-2 border-gray-900 py-2 px-4 mr-3 mb-3 inline-flex justify-center items-center rounded-xl space-x-2"
              >
                <BsLink45Deg />
                <p className="text-sm">{link.hyperlinkText}</p>
              </a>
            ))}
          </div>
        )}
        {/* Links end */}
        {/* Images and video content start */}
        {post.imageList &&
          (post.imageList.length === 1 ? (
            <div className="rounded-2xl overflow-hidden border-2 border-gray-900 mt-4">
              {post.imageList[0]}
            </div>
          ) : (
            <Carousel mediaList={post.imageList} autoSlide={true} />
          ))}
        {post.videoList &&
          (post.videoList.length === 1 ? (
            <div className="rounded-2xl overflow-hidden border-2 border-gray-900 mt-4">
              {post.videoList[0]}
            </div>
          ) : (
            <div className="w-full aspect-w-16 aspect-h-9">
              <Carousel mediaList={post.videoList} autoSlide={false} />
            </div>
          ))}
        {/* Images and video content start */}
        <PostInteractionButtons />
      </div>
    </div>
  );
}
