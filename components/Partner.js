import React from "react";
import Image from "next/image";
import Link from "next/link";
const Partner = ({ blok }) => {
  return (
    <div className="flex justify-center">
      <Link href={blok.link.cached_url} className="flex flex-col text-center">
        <Image
          className="h-40 w-40 rounded-full mx-auto shadow-xl my-8" // Set width to 40 to match the height
          src={blok.image.filename}
          alt={blok.image.alt}
          height={160}
          width={160}
        />
        <p className="text-2xl font-clone">{blok.name}</p>
      </Link>
    </div>
  );
};

export default Partner;
