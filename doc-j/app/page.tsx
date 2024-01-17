import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

export default async function Home() {
  const TWIcontent = {
    headline: "Bringing a High-Quality Cannabis Experience to Virginia",
    description: [
      "Welcome to Doc J's Laboratory. We are at the heart of Virginia's finest cannabis exploration, meticulously crafted for connoisseurs like you. I'm Doc J, leading a team with a combined 50+ years of passion and expertise in cannabis. Our journey encompasses everything from cultivation to extraction, ensuring unparalleled quality.",
      "Collaborating with top cultivators across Virginia and beyond, we guarantee only the best. Every product we share is a symbol of our dedication—if it doesn't meet our high standards, it doesn't make the cut. Join us in a celebration of the finest cannabis, where excellence and community are our core values.",
    ],
    image: "/doc-cultivating.jpg",
    imageAlt: "Doc J cultivating cannabis",
  };

  const { data } = await fetchData("home");
  const navData = await fetchData("/global/navigation");
  const footerData = await fetchData("/global/footer");
  const content = data.story.content;
  // console.log("retrieved content", data);
  return (
    <div>
      <StoryblokComponent blok={navData.data.story.content} />

      <StoryblokComponent blok={data.story.content} />
      <StoryblokComponent blok={footerData.data.story.content} />
    </div>
  );
}
