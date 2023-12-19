import Image from "next/image";

const Feature = () => {
  return (
    <>
      <div className="relative flex w-full bg-gradient-to-br from-purp to-green text-center max-w-[1440px] mx-auto">
        <h3 className="flex text-white py-10 uppercase font-clone font-bold text-4xl md:text-6xl text-center mx-auto my-auto px-2 md:px-8 w-3/4 md:w-1/2">
          Exceptionally Curated Craft Cannabis.
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
