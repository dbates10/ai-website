import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Navigation from "@/components/Navigation";

const Page = ({ blok }) => {
  // console.log(blok.body);
  return (
    <main className="" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};

export default Page;
