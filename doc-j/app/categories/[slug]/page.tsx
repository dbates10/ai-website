import { StoryblokComponent } from "@storyblok/react/rsc";
import { fetchData } from "@/constants/functions";

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
  // Extract slug from params
  const { slug } = params;
  // Fetch the data from Storyblok
  const { data } = await fetchData(`categories/${slug}`);
  const navData = await fetchData("/global/navigation");
  const footerData = await fetchData("/global/footer");
  // console.log("retrieved content", data);
  return (
    <div>
      <StoryblokComponent blok={navData.data.story.content} />
      <StoryblokComponent blok={data.story.content} />
      <StoryblokComponent blok={footerData.data.story.content} />
    </div>
  );
};

export default PortfolioPage;
