import React from "react";
import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

export default async function About() {
  const { data } = await fetchData("about");
  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}
