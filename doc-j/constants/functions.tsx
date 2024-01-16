import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";

export async function fetchData(slug: String) {
  let sbParams: ISbStoriesParams = {
    version: "published",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams);
}
