import "./globals.css";
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
import Partner from "@/components/Partner";
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
import { fetchData } from "@/constants/functions";
export const revalidate = 0;
storyblokInit({
  accessToken: "RjUXgWrfeSzxWXV0KARomQtt",
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
    partner: Partner,
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
  title: "Wanderlust Voyages",
  description:
    "Discover the world with Wanderlust Voyages, your premier travel and adventure agency. Specializing in curated, unforgettable journeys, we bring your dream destinations to life. From exotic tropical retreats to thrilling mountain expeditions, our expertly crafted itineraries are designed to offer unique, immersive experiences.",
};
interface RootLayoutType {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutType) {
  return (
    // <StoryblokProvider>
    <html lang="en">
      <body>
        <div className="max-w-[1400px] mx-auto">{children}</div>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
    // </StoryblokProvider>
  );
}
