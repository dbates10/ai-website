import Link from "next/link";
import Container from "./Container";
import { FaInstagram } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { IoChatboxSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="w-screen mx-auto max-w-[1440px] bg-purp-dark text-white flex flex-col md:flex-row">
        {/* Disclaimer */}
        <div className="flex flex-col w-full md:w-1/3">
          <h4 className="text-xl font-thin font-ibm text-center md:text-left px-8 py-8 my-auto">
            <IoWarning className="inline-block mr-2 align-middle" /> Doc
            J&apos;s is a legal, licensed hemp company. Nothing is for sale or
            trade.
          </h4>
        </div>

        {/*Contact Links*/}
        <div className="flex flex-col w-full md:w-1/3 py-8 items-start self-center">
          <div classname="flex ">
            <h4 className="text-sm md:col-span-2 font-thin font-ibm text-center md:text-left px-8 py-1">
              <span className="flex flex-row gap-2 font-extrabold items-center">
                <IoChatboxSharp /> Contact Us:
              </span>
            </h4>
            <p className="text-md font-thin font-clone text-center md:text-left px-8 py-2 text-white ">
              Call or Text:
            </p>
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 text-green-light ">
              <a href="tel:+15404801205">(540)-480-1205</a>
            </p>
            <p className="text-md font-thin font-clone text-center md:text-left px-8 py-2 text-white ">
              Email:
            </p>
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 text-green-light ">
              <a href="mailto: docjslaboratory@gmail.com">
                Docjslaboratory@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/*Social Media Links*/}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-1/3 py-8">
          <h4 className="text-sm md:col-span-2 font-thin font-ibm text-center md:text-left px-8 py-1">
            <span className="flex flex-row gap-2 font-extrabold items-center justify-center md:justify-start">
              <FaInstagram /> Instagram Links:
            </span>
          </h4>
          <Link href="https://www.instagram.com/docjs.laboratory/">
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 py-2 text-green-light ">
              Doc J&apos;s Lab
            </p>
          </Link>
          <Link href="https://www.instagram.com/waterbearfarms/">
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 py-2 text-green-light ">
              Waterbear Farms
            </p>
          </Link>
          <Link href="https://www.instagram.com/moglee_cultivated_/">
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 py-2 text-green-light ">
              Moglee Cultivated
            </p>
          </Link>
          <Link href="https://www.instagram.com/gamblesgoods/">
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 py-2 text-green-light ">
              Gamble&apos;s Goods
            </p>
          </Link>
          <Link href="https://www.instagram.com/gamblesgarden_/">
            <p className="text-md font-thin font-ibm text-center md:text-left px-8 py-2 text-green-light ">
              Gamble&apos;s Garden
            </p>
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-2 bg-purp-dark text-white mx-auto max-w-[1440px] text-center">
        <p>
          © Copyright 2024 Doc J&apos;s Laboratory <br /> All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
