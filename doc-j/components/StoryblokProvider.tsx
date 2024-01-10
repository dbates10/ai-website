/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import Page from "@/components/Page";
import Hero from "@/components/Hero";
const token = process.env.STORYBLOK_API_TOKEN;

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: token,
  apiOptions: {
    region: "us",
    cache: { type: "none" },
  },
  use: [apiPlugin],
  // components: {
  //   page: Page,
  // },
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
