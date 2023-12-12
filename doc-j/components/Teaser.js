import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }) => {
  return (
    <h2 className="text-6xl mb-0" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
