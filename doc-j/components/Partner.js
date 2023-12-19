import React from "react";
import Image from "next/image";

const Partner = (props) => {
  return (
    <div className="flex justify-center">
      <Image
        className="h-40 rounded-full shadow-xl my-8 w-auto"
        src={props.src}
        alt={props.alt}
        height={160}
        width={160}
      />
    </div>
  );
};

export default Partner;
