import React from "react";
import Image from "next/image";

const Partner = (props) => {
  return (
    <div className="flex justify-center">
      <Image
        className="h-20 w-auto sm:h-10 sm:hidden"
        src={props.image}
        alt="Partner Image"
        height={80}
        width={150}
      />
    </div>
  );
};

export default Partner;
