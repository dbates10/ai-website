import {
  getStoryblokApi,
  StoryblokComponent,
  StoryblokClient,
  ISbStoriesParams,
} from "@storyblok/react/rsc";
import { categories } from "../../../constants/categories";
import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import TextWithImage from "@/components/TextWithImage";
import ProductGallery from "@/components/ProductGallery";
import Newsletter from "@/components/Newsletter";

interface Params {
  params: {
    slug: string;
  };
}

const PortfolioPage = async (params: Params) => {
  // Extract slug from params
  const { slug } = params.params;

  // Fetch the data from Storyblok
  const { data } = await fetchData(slug);
  return (
    <>
      <StoryblokComponent blok={data.story.content} />
      {/* <CategoryHero name={name} src={heroImage} alt={heroImageAlt} />
        <TextWithImage content={category} alternate />
        <ProductGallery products={products} />
        <Newsletter /> */}
    </>
  );
};

export default PortfolioPage;

async function fetchData(slug: String) {
  let sbParams: ISbStoriesParams = {
    version: "draft",
    resolve_relations: "global_reference.reference",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/categories/${slug}`, sbParams);
}
