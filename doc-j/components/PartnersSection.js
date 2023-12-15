import React from "react";
import Partner from "./Partner";
const PartnersSection = () => {
  return (
    <>
      <div className=" w-screen max-w-[1440px] flex flex-col justify-center">
        <h3 className="text-4xl font-bold font-clone justify-center text-center text-purp-dark px-4 md:px-8 py-4">
          Our Partners
        </h3>
        <div className="w-full grid grid-cols-2 md:grid-cols-3">
          <Partner image={"/logo.svg"} />
          <Partner image={"/logo.svg"} />
          <Partner image={"/logo.svg"} />
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
