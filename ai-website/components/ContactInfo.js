import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import InstagramLink from "./InstagramLink";
import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";

const ContactInfo = ({ blok }) => {
  const {
    phone_number,
    phone_number_display,
    email_display,
    email,
    instagram_links,
  } = blok;

  return (
    <div className="flex flex-col md:flex-row gap-8 h-auto">
      <div className="flex flex-col md:w-1/2 m-4 order-2 md:order-1 ">
        <div className="flex flex-col rounded-xl p-4 bg-purp-dark text-white text-xl mt-4 text-center shadow-md">
          <div {...storyblokEditable(blok)}>
            <h4 className="font-thin font-clone text-center py-2">
              <span className="flex flex-row gap-2 items-center justify-center">
                <IoMdCall /> Call or Text Us:
              </span>
            </h4>
            <p className=" font-thin font-ibm text-center text-green-light  ">
              <a href={`tel:+1${phone_number}`}>{phone_number_display}</a>
            </p>
            <h4 className="font-thin font-clone text-center py-2">
              <span className="flex flex-row gap-2 items-center justify-center">
                <MdOutlineEmail /> Email Us:
              </span>
            </h4>
            <p className=" font-thin font-ibm text-center pb-2  text-green-light ">
              <a href={`mailto: ${email} `}>{email_display}</a>
            </p>
          </div>

          <h4 className="font-thin font-clone text-center py-2">
            <span className="flex flex-row gap-2 items-center justify-center">
              <FaInstagram /> Instagram:
            </span>
          </h4>
          {instagram_links.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}

          {/* <a target="_blank" href="https://www.instagram.com/docjs.laboratory/">
            <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
              @DocJs.Laboratory
            </p>
          </a>
          <a target="_blank" href="https://www.instagram.com/waterbearfarms/">
            <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
              @WaterbearFarms
            </p>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/moglee_cultivated_/"
          >
            <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
              @Moglee_Cultivated
            </p>
          </a>
          <a target="_blank" href="https://www.instagram.com/gamblesgoods/">
            <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
              @GamblesGoods
            </p>
          </a>
          <a target="_blank" href="https://www.instagram.com/gamblesgarden_/">
            <p className="text-md font-thin font-ibm text-center px-8 py-2 text-green-light ">
              @GamblesGarden_
            </p>
          </a> */}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfo;
