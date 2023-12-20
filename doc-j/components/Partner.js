import React from "react";
import Image from "next/image";
import Link from "next/link";
const Partner = (props) => {
  return (
    <div className="flex justify-center">
      <Link href={props.link}>
        <Image
          className="h-40 rounded-full shadow-xl my-8 w-auto"
          src={props.src}
          alt={props.alt}
          height={160}
          width={160}
        />
      </Link>
    </div>
  );
};

export default Partner;
