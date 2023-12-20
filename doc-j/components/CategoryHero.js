import Image from "next/image";

const CategoryHero = (props) => {
  return (
    <div className="relative w-full h-[60vh] max-w-[1440px] mx-auto overflow-hidden">
      <div className="absolute w-full h-full flex justify-center items-center">
        <Image
          src={props.src}
          alt={props.alt}
          className="object-cover w-full h-full pan-zoom shadow-xl"
          fill
        />
      </div>
    </div>
  );
};

export default CategoryHero;
