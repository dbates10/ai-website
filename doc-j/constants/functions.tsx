import React from "react";
import {
  getStoryblokApi,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";

export async function fetchData(slug: String) {
  let sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_relations: "global_reference.reference",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/${slug}`, sbParams);
}
