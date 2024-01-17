import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

const CategoryHero = ({ blok }) => {
  const { image } = blok;
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-full h-[60vh] max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <Image
          src={image.filename}
          alt={image.alt}
          className="object-cover w-full h-full pan-zoom shadow-xl"
          fill
        />
      </div>
    </div>
  );
};

export default CategoryHero;
