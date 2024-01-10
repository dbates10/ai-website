import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";

const InstagramLink = ({ blok }) => {
  return (
    <a
      {...storyblokEditable(blok)}
      target="_blank"
      href={`https://www.instagram.com/${blok.target}`}
    >
      <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
        {blok.handle}
      </p>
    </a>
  );
};

export default InstagramLink;
