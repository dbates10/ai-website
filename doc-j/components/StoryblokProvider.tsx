/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "./Page";
import Navigation from "./Navigation";
import Hero from "./Hero";
const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;
const components = {
  page: Page,
  navigation: Navigation,
  hero: Hero,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: token,
  apiOptions: {
    region: "us",
  },
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
