import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";
const ContactPage = async () => {
  const { data } = await fetchData("contact");
  return <StoryblokComponent blok={data.story.content} />;
};

export default ContactPage;
