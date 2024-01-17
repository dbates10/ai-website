import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

export async function fetchData(slug: string) {
  const { isEnabled } = draftMode();
  let version: "draft" | "published" = isEnabled ? "draft" : "published";

  let sbParams: ISbStoriesParams = {
    version: version,
  };
  console.log(isEnabled);
  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams);
}
