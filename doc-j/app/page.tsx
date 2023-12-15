import { getStoryblokApi } from "@storyblok/react/rsc";
import { ISbStoriesParams } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import TextWithImage from "@/components/TextWithImage";
import PartnersSection from "@/components/PartnersSection";
export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <Hero />
      <Feature />
      <TextWithImage />
      <PartnersSection />
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const data = storyblokApi.get(`cdn/stories/home`, sbParams);
  return data;
}
