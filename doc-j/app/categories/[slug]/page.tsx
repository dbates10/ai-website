import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  // Extract slug from params
  const { slug } = params;
  // Fetch the data from Storyblok
  const { data } = await fetchData(`categories/${slug}`);
  return (
    <>
      <StoryblokComponent blok={data.story.content} />
    </>
  );
};

export default PortfolioPage;
