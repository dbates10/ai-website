import React from "react";
import { fetchData } from "@/constants/functions";
import { StoryblokComponent } from "@storyblok/react/rsc";
const SlugPage = async ({ params }: { params: { slug: string } }) => {
  // Extract slug from params
  const { slug } = params;
  // Fetch the data from Storyblok
  const { data } = await fetchData(slug);
  if (!data) return <div>404</div>;
  return <StoryblokComponent blok={data.story.content} />;
};

export default SlugPage;
