import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import ContactSection from "@/components/ContactSection";
const ContactPage = async () => {
  const { data } = await fetchData();
  return <StoryblokComponent blok={data.story.content} />;
};

export default ContactPage;

export async function fetchData() {
  let sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_relations: "global_reference.reference",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/contact`, sbParams);
}
