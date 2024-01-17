import { StoryblokComponent } from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

const AnnouncementsPage = async () => {
  const { data } = await fetchData("announcements");
  const navData = await fetchData("/global/navigation");
  const footerData = await fetchData("/global/footer");
  // console.log("retrieved content", data);

  return (
    <>
      <StoryblokComponent blok={navData.data.story.content} />

      <div className="container px-8 mx-auto xl:px-0">
        <h1 className="mt-12 text-4xl md:text-7xl text-purp-dark font-clone my-4">
          Announcements
        </h1>
      </div>
      <StoryblokComponent blok={data.story.content} />
      <StoryblokComponent blok={footerData.data.story.content} />
    </>
  );
};

export default AnnouncementsPage;
