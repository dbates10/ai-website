import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }) => {
  const { feature_text } = blok;
  return (
    <>
      <div className="relative flex w-full bg-gradient-to-br from-purp to-green text-center max-w-[1440px] mx-auto">
        <h3
          {...storyblokEditable(blok)}
          className="flex text-white py-10 uppercase font-clone font-bold text-4xl md:text-6xl text-center mx-auto my-auto px-2 md:px-8 w-3/4 md:w-1/2"
        >
          {feature_text}
        </h3>
        <Image
          src="/doc.svg"
          alt="Doc J"
          height={100}
          width={100}
          className="absolute bottom-0 right-0 md:right-2 h-24 w-24 md:h-60 md:w-60"
        />
      </div>
    </>
  );
};

export default Feature;
