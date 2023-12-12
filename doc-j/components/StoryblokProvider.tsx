/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";
import Navigation from "./Navigation";
import Footer from "./Footer";
const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  navigation: Navigation,
  footer: Footer,
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
