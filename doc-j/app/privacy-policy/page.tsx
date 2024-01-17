import React from "react";
import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";
interface Params {
  params: {
    slug: string;
  };
}
const PrivacyPolicy = async () => {
  const { data } = await fetchData("privacy-policy");
  return (
    <>
      <StoryblokComponent blok={data.story.content} />
    </>
  );
};

export default PrivacyPolicy;

// async function fetchData() {
//   let sbParams: ISbStoriesParams = {
//     version: "draft",
//     resolve_relations: "global_reference.reference",
//   };

//   const storyblokApi: StoryblokClient = getStoryblokApi();
//   return storyblokApi.get(`cdn/stories/privacy-policy`, sbParams);
// }
