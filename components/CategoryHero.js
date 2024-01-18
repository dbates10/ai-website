import Image from "next/image";
import { storyblokEditable } from "@storyblok/react/rsc";

const CategoryHero = ({ blok }) => {
  const { image } = blok;
  console.log(blok);
  return (
    <div
      {...storyblokEditable(blok)}
      className="relative w-full h-[60vh] max-w-[1440px] mx-auto overflow-hidden"
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={image.filename}
          alt={image.alt}
          className="object-cover w-full h-full pan-zoom shadow-xl"
          fill
        />
        <h1 className="absolute z-50 text-white text-6xl font-clone font-bold text-center drop-shadow-image">
          {blok.title}
        </h1>
      </div>
    </div>
  );
};

export default CategoryHero;
