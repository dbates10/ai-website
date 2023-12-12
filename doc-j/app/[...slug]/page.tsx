import { getStoryblokApi, StoryblokComponent } from "@storyblok/react/rsc";
import { ISbStoriesParams } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

interface Params {
  slug: string;
}
export default async function Page({ params }: { params: Params }) {
  // Extract slug from params, default to 'home' if not available
  const slug = params.slug || "home";
  const { data } = await fetchData(slug);

  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

async function fetchData(slug: string) {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return data;
}
