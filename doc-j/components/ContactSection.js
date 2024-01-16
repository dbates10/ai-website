import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ReactMarkdown from "react-markdown";
import { storyblokEditable } from "@storyblok/react/rsc";
import { StoryblokComponent } from "@storyblok/react";
const ContactSection = ({ blok }) => {
  const { headline, main_text } = blok;
  return (
    <div className="flex flex-col py-20 bg-[url(/swirl.svg)] bg-cover bg-no-repeat items-center justify-center">
      <div className="p-10 lg:w-3/4 bg-white bg-opacity-80 rounded-lg shadow-lg justify-center mx-2">
        <div {...storyblokEditable(blok)}>
          <h3 className="text-5xl md:text-7xl uppercase font-clone font-extrabold text-purp-dark text-left md:text-center">
            {headline}
          </h3>
          <div className="prose text-md md:text-xl my-4 font-ibm font-bold text-purp-dark text-left md:text-center">
            <ReactMarkdown className="markdown-content">
              {main_text}
            </ReactMarkdown>
          </div>
        </div>
        {blok.contact_info.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
