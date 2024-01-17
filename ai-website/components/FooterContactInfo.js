import { IoChatboxSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { storyblokEditable } from "@storyblok/react";

const FooterContactInfo = ({ blok }) => {
  const {
    email,
    email_display,
    instagram_links,
    phone_number,
    phone_number_display,
  } = blok;
  return (
    <>
      {/*Contact Links*/}
      <div className="flex flex-col w-full md:w-1/4 py-8 items-start">
        <div className="flex flex-col mx-auto">
          <h4 className="text-sm md:col-span-2 font-thin font-ibm text-center md:text-left px-8 py-1">
            <span className="flex flex-row gap-2 font-extrabold items-center justify-center md:justify-start">
              <IoChatboxSharp /> Contact Us:
            </span>
          </h4>
          <p className="text-md font-thin font-clone text-center md:text-left px-8 py-2 text-white ">
            Call or Text:
          </p>
          <p className="text-md font-thin font-ibm text-center md:text-left px-8 text-green ">
            <a href={`tel:+1${phone_number.url}`}>{phone_number_display}</a>
          </p>
          <p className="text-md font-thin font-clone text-center md:text-left px-8 py-2 text-white ">
            Email:
          </p>
          <p className="text-md font-thin font-ibm text-center md:text-left px-8 text-green ">
            <a href={`mailto: ${email.url}`}>{email_display} </a>
          </p>
        </div>
      </div>

      {/*Social Media Links*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full md:w-1/3 py-8">
        <div className="lg:col-span-2">
          <h4 className="text-sm font-thin font-ibm text-center md:text-left px-8 py-1">
            <span className="flex flex-row gap-2 font-extrabold items-center justify-center md:justify-start">
              <FaInstagram /> Instagram Links:
            </span>
          </h4>
        </div>
        {instagram_links.map((link) => (
          <a
            target="_blank"
            rel="noopener noreferrer" // Important for security when using target="_blank"
            href={`https://instagram.com/${link.target}`}
            key={link._uid}
            className="px-8 "
          >
            <p className="text-md font-thin font-ibm text-center md:text-left text-green">
              {link.handle}
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default FooterContactInfo;
