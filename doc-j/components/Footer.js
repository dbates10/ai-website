"use client";
import Link from "next/link";
import { IoWarning } from "react-icons/io5";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import FooterContactInfo from "@/components/FooterContactInfo";

const Footer = ({ blok }) => {
  const { footer_menu, message } = blok;
  return (
    <>
      <div
        {...storyblokEditable(blok)}
        className="w-screen mx-auto max-w-[1440px] bg-purp-dark text-white flex flex-col md:flex-row items-start"
      >
        {/* Disclaimer */}
        <div className="flex flex-col w-full md:w-1/3">
          <h4 className="text-xl font-thin font-ibm text-center md:text-left px-8 py-8 my-auto">
            <IoWarning className="inline-block mr-2 align-middle" />
            {message}
          </h4>
        </div>

        <FooterContactInfo blok={footer_menu[0]} />
      </div>
      <div className="flex flex-row bg-purp">
        <div className=" w-32"></div>
        <div className="flex justify-center py-2 text-black w-full flex-1 max-w-[1440px] text-center">
          <p>© Copyright 2024 Doc J&apos;s Laboratory All Rights Reserved</p>
        </div>
        <div className="flex justify-end py-2 w-32 flex-0 text-black mr-4 max-w-[1440px] text-right">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
