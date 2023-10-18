import React, { useState, useEffect } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

export default function Carousel({
  mediaList,
  autoSlide = false,
  slideDuration = 3000,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const autoSlideToNext = setInterval(nextMedia, slideDuration);
    return () => clearInterval(autoSlideToNext);
  }, []);

  const nextMedia = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === mediaList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMedia = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? mediaList.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="relative rounded-2xl overflow-hidden border-2 border-gray-900 mt-4">
        {mediaList[currentImageIndex]}
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#00000042] backdrop-blur-sm p-2 rounded-full cursor-pointer"
          onClick={prevMedia}
        >
          <MdNavigateBefore className="text-white text-2xl font-bold" />
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#00000042] backdrop-blur-sm p-2 rounded-full cursor-pointer"
          onClick={nextMedia}
        >
          <MdNavigateNext className="text-white text-2xl font-bold" />
        </div>
      </div>
      <div className="flex justify-center mt-2 space-x-2 px-3 py-1 rounded-full">
        {mediaList.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full cursor-pointer ${
              index === currentImageIndex
                ? "bg-white w-4"
                : "bg-[#ffffff99] w-2"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
