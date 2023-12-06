/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "ANjNPI0Ij0P0fw7Z9REYyQtt",
  use: [apiPlugin],
});

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
