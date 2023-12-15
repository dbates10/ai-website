"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/top-down-plants.jpg",
    alt: "heroimage",
    headerText: " Virginia’s Premier Cannabis Company.",
    subHeaderText: "Welcome to Doc J’s Laboratory:",
    buttonText: "Learn More",
    buttonTarget: "/about",
    key: "image1",
  },
  {
    src: "/heroimage.jpg",
    alt: "heroimage",
    headerText: "headerText",
    subHeaderText: "",
    buttonText: "Learn More",
    buttonTarget: "/about",
    key: "image2",
  },
  {
    src: "/heroimage.jpg",
    alt: "heroimage",
    headerText: "headerText",
    subHeaderText: "",
    buttonText: "Learn More",
    buttonTarget: "/about",
    key: "image3",
  },
  {
    src: "/heroimage.jpg",
    alt: "heroimage",
    headerText: "headerText",
    subHeaderText: "",
    buttonText: "Learn More",
    buttonTarget: "/about",
    key: "image4",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-[80vh] max-w-[1440px] mx-auto overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentSlide].src}
              alt={slides[currentSlide].alt}
              className="object-cover w-full h-full pan-zoom shadow-xl"
              fill
            />
            <Container>
              <div className="absolute bottom-10 left-10 md:bottom-40 md:left-28 w-3/4 md:w-1/3">
                {slides[currentSlide].subHeaderText && (
                  <h1 className="text-2xl lg:text-3xl font-clone font-thin drop-shadow-image text-white">
                    {slides[currentSlide].subHeaderText}
                  </h1>
                )}
                <h2 className="text-3xl lg:text-5xl font-clone font-bold drop-shadow-image text-white">
                  {slides[currentSlide].headerText}
                </h2>
                <button className="px-4 py-2 mt-4 text-md font-ibm text-white bg-purp rounded">
                  {slides[currentSlide].buttonText}
                </button>
              </div>
            </Container>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Hero;
