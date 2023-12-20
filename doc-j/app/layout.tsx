import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgeVerification from "@/components/AgeVerification";
const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;

storyblokInit({
  accessToken: token,
  use: [apiPlugin],
  apiOptions: {
    region: "us",
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

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <AgeVerification>
            <Navigation />
            {children}
            <Footer />
          </AgeVerification>
        </body>
      </html>
    </StoryblokProvider>
  );
}
