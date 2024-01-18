"use client";
import Image from "next/image";
import Container from "@/components/Container";
import ReactMarkdown from "react-markdown";
import { storyblokEditable } from "@storyblok/react/rsc";

const TextWithImage = ({ blok }) => {
  // Destructure the data received from Storyblok
  const {
    headline,
    description,
    image: { filename, alt },
    alternate,
    fit_image,
  } = blok;
  // Conditional class to control the order based on 'alternate' prop
  const orderClass = alternate ? "md:order-last" : "";

  return (
    <Container className="max-w-[1440px]">
      <div
        {...storyblokEditable(blok)}
        className="flex flex-col md:flex-row gap-4 my-12"
      >
        {/* Text Section */}
        <div
          className={`flex flex-col w-full md:w-1/2 2xl:w-1/3 ${orderClass}`}
        >
          <h1 className="text-4xl text-purp-dark font-bold font-clone text-center md:text-left px-4 md:px-8 py-4">
            {headline}
          </h1>
          <div className="h-1 bg-gradient-to-r from-green to-purp mx-4 md:mx-8"></div>
          <div className="prose  text-lg font-ibm text-center md:text-left px-4 md:px-8 py-4">
            <ReactMarkdown className="markdown-content">
              {description}
            </ReactMarkdown>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <Image
            className={`${
              fit_image ? "object-contain" : "object-cover"
            } object-center w-full h-full`}
            src={filename}
            alt={alt}
            height={900}
            width={600}
          />
        </div>
      </div>
    </Container>
  );
};

export default TextWithImage;
