"use client";
import { useState } from "react";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { storyblokEditable } from "@storyblok/react/rsc";

const Product = ({ blok, alternate }) => {
  const { name, description, main_image, gallery } = blok;
  // const { id, name, mainImage, description, images } = product;
  const [activeImage, setActiveImage] = useState(main_image.filename);
  const imageVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <div
        {...storyblokEditable(blok)}
        id={blok._uid}
        className="flex flex-col md:flex-row max-w-[1440px]"
      >
        <div
          className={`flex w-full aspect-[4/3] ${
            alternate ? "order-2" : "order-1"
          }`}
        >
          <AnimatePresence>
            <motion.div
              key={activeImage}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1, duration: 2 }}
            >
              <Image
                src={activeImage}
                alt={main_image.alt}
                width={1000}
                height={600}
                className="object-contain object-center w-full h-full shadow-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <div
          className={`flex w-full md:w-1/3 my-8 md:mx-8 items-center flex-col justify-center ${
            alternate ? "order-1" : "order-2"
          }`}
        >
          <h1 className="flex mx-auto text-4xl text-center font-clone font-bold text-purp-dark">
            {name}
          </h1>
          <ReactMarkdown className="prose flex flex-col mx-auto text-sm text-center font-ibm my-4">
            {description}
          </ReactMarkdown>
        </div> */}
      </div>
      {gallery.map((nestedBlok, index) => {
        return (
          <ImageGallery
            blok={nestedBlok}
            key={nestedBlok._uid}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            alternate={index % 2 !== 0}
          />
        );
      })}
    </>
  );
};

export default Product;
