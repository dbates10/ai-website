import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

const AnnouncementsPage = async () => {
  const { data } = await fetchData("announcements");
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
