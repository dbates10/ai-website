import React from "react";
import Partner from "./Partner";
import { StoryblokComponent } from "@storyblok/react/rsc";
const PartnersSection = ({ blok }) => {
  return (
    <>
      <div className=" w-screen max-w-[1440px] flex flex-col justify-center">
        <h3 className="text-4xl font-bold font-clone justify-center text-center text-purp-dark px-4 md:px-8 py-4">
          Our Partners
        </h3>
        <div className="w-3/4 mx-auto flex flex-col flex-wrap md:flex-row gap-10 md:gap-20 justify-center">
          {blok.partners.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
          {/* <Partner
            src={"/logos/moglee.jpeg"}
            alt={"Moglee Cultivated Logo"}
            link={"/category/moglee"}
          />
          <Partner
            src={"/logos/waterbear.jpg"}
            alt={"Waterbear Logo"}
            link={"/category/waterbear"}
          />
          <Partner
            src={"/logos/gambles.jpg"}
            alt={"Gambles Goods Logo"}
            link={"/category/gambles"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
