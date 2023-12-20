"use client";
import { useState } from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";

const Product = (props) => {
  const { product } = props;
  const { name, mainImage, description, images } = product;
  const [activeImage, setActiveImage] = useState(mainImage.url);
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-[1440px]">
        <div
          className={`flex w-full md:w-2/3 ${
            props.alternate ? "order-2" : "order-1"
          }`}
        >
          <Image
            src={activeImage}
            alt={mainImage.alt}
            width={1000}
            height={600}
            className="object-contain object-center w-full h-full shadow-lg"
          />
        </div>
        <div
          className={`flex w-full md:w-1/3 items-center flex-col justify-center my-8 ${
            props.alternate ? "order-1" : "order-2"
          }`}
        >
          <h1 className="flex mx-auto text-4xl text-center font-clone font-bold text-purp-dark">
            {name}
          </h1>
          <p className="flex mx-auto text-sm text-center font-ibm my-4">
            {description}
          </p>
        </div>
      </div>
      <ImageGallery
        images={images}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
      />
    </>
  );
};

export default Product;
