import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Announcements = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.announcement.map((nestedBlok, index) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          alternate={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Announcements;
