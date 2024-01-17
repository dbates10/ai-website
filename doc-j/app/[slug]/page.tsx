import React from "react";
import { fetchData } from "@/constants/functions";
import { StoryblokComponent } from "@storyblok/react/rsc";

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  // Extract slug from params
  const { slug } = params;
  // Fetch the data from Storyblok
  const { data } = await fetchData(slug);
  const navData = await fetchData("/global/navigation");
  const footerData = await fetchData("/global/footer");
  if (!data) return <div>404</div>;
  return (
    <>
      <StoryblokComponent blok={navData.data.story.content} />
      <StoryblokComponent blok={data.story.content} />
      <StoryblokComponent blok={footerData.data.story.content} />
    </>
  );
};

export default SlugPage;
