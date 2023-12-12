import { getStoryblokApi } from "@storyblok/react/rsc";
import { ISbStoriesParams } from "@storyblok/react";
import StoryblokStory from "@storyblok/react/story";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  const data = storyblokApi.get(`cdn/stories/home`, sbParams);
  return data;
}
