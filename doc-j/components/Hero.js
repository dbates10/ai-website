"use client";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { storyblokEditable } from "@storyblok/react/rsc";
// const slides = [
//   {
//     src: "/doc-hero.jpg",
//     alt: "Doc J's Lab Hero Image",
//     headerText: " Virginia’s Premier Cannabis Company.",
//     subHeaderText: "Welcome to Doc J’s Laboratory:",
//     buttonText: "About Us",
//     buttonTarget: "/about",
//     key: "doc",
//   },
//   // {
//   //   src: "/heroimage.jpg",
//   //   alt: "heroimage",
//   //   headerText: "Tropical Tittiez",
//   //   subHeaderText: "Check Out Our Latest Drop:",
//   //   buttonText: "See the Gallery",
//   //   buttonTarget: "/category/docj/#tropical",
//   //   key: "tropical",
//   // },
//   {
//     src: "/moglee-hero.jpg",
//     alt: "Moglee Cultivated Hero Image",
//     headerText: "Moglee Cultivated",
//     subHeaderText: "Meet Our Partner and Homie",
//     buttonText: "Learn More",
//     buttonTarget: "/category/moglee",
//     key: "moglee",
//   },
//   {
//     src: "/gambles-hero.jpg",
//     alt: "Gamble's Goods Hero Image",
//     headerText: " Gamble's Goods",
//     subHeaderText: "It's Never a Gamble With",
//     buttonText: "Check Out the Goods",
//     buttonTarget: "/category/gambles",
//     key: "gambles",
//   },
// ];

const Hero = ({ blok }) => {
  const slides = blok.slide;
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
  //   }, 5000);
  //   console.log("currentSlide", currentSlide);
  //   return () => clearInterval(interval);
  // }, []);

  const changeSlide = (index, stopAutoCycle = false) => {
    setCurrentSlide(index);
    if (stopAutoCycle) {
      clearInterval(autoCycleRef.current);
    }
  };
  const autoCycleRef = useRef(null);

  useEffect(() => {
    autoCycleRef.current = setInterval(() => {
      setCurrentSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(autoCycleRef.current);
  }, []);

  return (
    <>
      <div
        {...storyblokEditable(blok)}
        className="relative w-full h-[80vh] max-w-[1440px] mx-auto overflow-hidden"
      >
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
              src={slides[currentSlide].image.filename}
              alt={slides[currentSlide].image.alt}
              className="object-cover w-full h-full pan-zoom shadow-xl"
              fill
            />
            <Container>
              <div className="absolute bottom-10 left-10 md:bottom-40 md:left-28 w-3/4 md:w-1/3">
                {slides[currentSlide].top_header_text && (
                  <h1 className="text-2xl lg:text-3xl font-clone font-thin drop-shadow-image text-white text-left">
                    {slides[currentSlide].top_header_text}
                  </h1>
                )}
                <h2 className="text-3xl lg:text-5xl font-clone font-bold drop-shadow-image text-white text-left">
                  {slides[currentSlide].header_text}
                </h2>
                <Link href={slides[currentSlide].button_target.url || "/"}>
                  <button className="px-8 py-4 mt-4 text-md font-ibm font-bold uppercase text-white bg-purp rounded flex justify-start">
                    {slides[currentSlide].button_text}
                  </button>
                </Link>
              </div>
            </Container>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`mx-1 h-2 w-16 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-green" : "bg-purp-light"
              }`}
              onMouseOver={() => changeSlide(index)}
              onClick={() => changeSlide(index, true)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
