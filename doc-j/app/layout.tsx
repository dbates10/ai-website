import "./globals.css";
import { Suspense } from "react";
import {
  storyblokInit,
  apiPlugin,
  StoryblokBridgeLoader,
  getStoryblokApi,
  ISbStoriesParams,
  StoryblokComponent,
} from "@storyblok/react/rsc";
import StoryblokClient from "storyblok-js-client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import TextWithImage from "@/components/TextWithImage";
import PartnersSection from "@/components/PartnersSection";
import Newsletter from "@/components/Newsletter";
import ContactSection from "@/components/ContactSection";
import InstagramLink from "@/components/InstagramLink";
import ContactInfo from "@/components/ContactInfo";
import MenuFolder from "@/components/MenuFolder";
import MenuLink from "@/components/MenuLink";
import Announcements from "@/components/Announcements";
import Announcement from "@/components/Announcement";
import CategoryHero from "@/components/CategoryHero";
import Products from "@/components/Products";
import Product from "@/components/Product";
import ImageGallery from "@/components/ImageGallery";
import Markdown from "@/components/Markdown";
export const revalidate = 0;
const token = process.env.STORYBLOK_API_TOKEN;

storyblokInit({
  accessToken: "Sa2Etr4kJGs53Kh77gG2Mgtt",
  apiOptions: {
    region: "us",
  },
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    feature: Feature,
    image_with_text: TextWithImage,
    partners: PartnersSection,
    newsletter: Newsletter,
    contact: ContactSection,
    contact_info: ContactInfo,
    instagram_link: InstagramLink,
    footer: Footer,
    navigation: Navigation,
    menu_folder: MenuFolder,
    menu_link: MenuLink,
    announcements: Announcements,
    announcement: Announcement,
    category_hero: CategoryHero,
    image_gallery: ImageGallery,
    products: Products,
    product: Product,
    markdown: Markdown,
  },
});

export const metadata = {
  title: "Doc J's Laboratory",
  description:
    "Welcome to the Laboratory. I’m Doc J and I’m here to bring Virginia an exceptionally curated craft cannabis experience. ",
};
interface RootLayoutType {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutType) {
  const navData = await fetchNavData();
  const footerData = await fetchFooterData();
  return (
    // <StoryblokProvider>
    <html lang="en">
      <body>
        <AgeVerification>
          <StoryblokComponent blok={navData.data.story.content} />
          <div className="max-w-[1400px] mx-auto">{children}</div>
          <StoryblokComponent blok={footerData.data.story.content} />
        </AgeVerification>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
    // </StoryblokProvider>
  );
}
export async function fetchNavData() {
  let sbParams: ISbStoriesParams = {
    version: "draft",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/global/navigation`, sbParams, {
    cache: "no-store",
  });
}
export async function fetchFooterData() {
  let sbParams: ISbStoriesParams = {
    version: "draft",
  };

  const storyblokApi: StoryblokClient = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/global/footer`, sbParams, {
    cache: "no-store",
  });
}
