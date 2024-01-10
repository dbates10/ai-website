import "./globals.css";
import {
  storyblokInit,
  apiPlugin,
  StoryblokBridgeLoader,
} from "@storyblok/react/rsc";
import StoryblokProvider from "../components/StoryblokProvider";
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
export const revalidate = 0; // revalidate at most every hour
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
    // <StoryblokProvider>
    <html lang="en">
      <body>
        <AgeVerification>
          <Navigation />
          {children}
          <Footer />
        </AgeVerification>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
    // </StoryblokProvider>
  );
}
