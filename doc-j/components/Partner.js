import React from "react";
import Image from "next/image";
import Link from "next/link";
const Partner = ({ blok }) => {
  return (
    <div className="flex justify-center">
      <Link href={blok.link.cached_url}>
        <Image
          className="h-40 rounded-full shadow-xl my-8 w-auto"
          src={blok.image.filename}
          alt={blok.image.alt}
          height={160}
          width={160}
        />
      </Link>
    </div>
  );
};

export default Partner;
