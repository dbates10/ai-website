import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

export default async function Home() {
  const { data } = await fetchData("home");
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
}
