/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
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
const token = process.env.STORYBLOK_API_TOKEN;

storyblokInit({
  accessToken: token,
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

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
