import React from "react";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

const PrivacyPolicy = async () => {
  const { data } = await fetchData("privacy-policy");
  const navData = await fetchData("/global/navigation");
  const footerData = await fetchData("/global/footer");
  // console.log("retrieved content", data);
  return (
    <div>
      <StoryblokComponent blok={navData.data.story.content} />
      <StoryblokComponent blok={data.story.content} />
      <StoryblokComponent blok={footerData.data.story.content} />
    </div>
  );
};

export default PrivacyPolicy;
