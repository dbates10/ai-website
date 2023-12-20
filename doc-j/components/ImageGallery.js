"use client";
import React from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};
const ImageGallery = ({ images, activeImage, setActiveImage }) => {
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => changeImage(1),
    onSwipedRight: () => changeImage(-1),
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  const changeImage = (direction) => {
    if (images.length > 0) {
      let currentIndex = images.indexOf(activeImage);
      let nextIndex =
        (currentIndex + direction + images.length) % images.length;
      setActiveImage(images[nextIndex].url);
    }
  };

  const handleImageClick = (image) => {
    setActiveImage(image.url);
  };

  const handleImageHover = (image) => {
    console.log("Hovering over image:", image.url);
    setActiveImage(image.url);
  };

  return (
    <div
      {...(isTouchDevice() ? swipeHandlers : {})}
      className="my-8 h-32 w-auto overflow-scroll overflow-x-auto overflow-y-hidden flex whitespace-nowrap"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className="w-40 h-28 shrink-0 cursor-pointer mr-2 overflow-hidden relative"
          onClick={() => handleImageClick(image)}
        >
          <Image
            src={image.url}
            alt={image.alt}
            width={160}
            height={128}
            className=" object-cover object-center shadow-md"
            onMouseOver={() => handleImageHover(image)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
