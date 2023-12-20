import { getStoryblokApi } from "@storyblok/react/rsc";
import { ISbStoriesParams } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import TextWithImage from "@/components/TextWithImage";
import PartnersSection from "@/components/PartnersSection";
import Newsletter from "@/components/Newsletter";
export default async function Home() {
  const { data } = await fetchData();
  const content = {
    headline: "Bringing a High-Quality Cannabis Experience to Virginia",
    description: [
      "Welcome to Doc J's Laboratory. We are at the heart of Virginia's finest cannabis exploration, meticulously crafted for connoisseurs like you. I'm Doc J, leading a team with a combined 50+ years of passion and expertise in cannabis. Our journey encompasses everything from cultivation to extraction, ensuring unparalleled quality.",
      "Collaborating with top cultivators across Virginia and beyond, we guarantee only the best. Every product we share is a symbol of our dedication—if it doesn't meet our high standards, it doesn't make the cut. Join us in a celebration of the finest cannabis, where excellence and community are our core values.",
    ],
    image: "/doc-cultivating.jpg",
    imageAlt: "Doc J cultivating cannabis",
  };
  return (
    <div>
      <Hero />
      <Feature />
      <TextWithImage content={content} />
      <PartnersSection />
      <Newsletter />
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const data = storyblokApi.get(`cdn/stories/home`, sbParams);
  return data;
}
