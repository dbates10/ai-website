import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import Container from "@/components/Container";
import { announcements } from "@/constants/announcements";
import Announcement from "@/components/Announcement";
import Newsletter from "@/components/Newsletter";
const AnnouncementsPage = async () => {
  const { data } = await fetchData();
  return (
    <>
      <div className="container px-8 mx-auto xl:px-0">
        <h1 className="mt-12 text-4xl md:text-7xl text-purp-dark font-clone my-4">
          Announcements
        </h1>
      </div>

      <StoryblokComponent blok={data.story.content} />
    </>
  );
};

export default AnnouncementsPage;

export async function fetchData() {
  let sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_relations: "global_reference.reference",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/announcements`, sbParams);
}
