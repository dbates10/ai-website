import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Container from "./Container";
import { storyblokEditable } from "@storyblok/react";
const Announcement = ({ blok, alternate }) => {
  const { title, content, image, button_text, button_target } = blok;
  // Conditional class names based on 'alternate' prop
  const containerClasses = `announcement-container p-6 rounded-lg shadow-lg ${
    alternate ? "bg-purp-dark text-white" : "bg-white text-gray-600"
  }`;
  const contentOrder = alternate ? "order-2" : "order-1";
  const imageOrder = alternate ? "order-1" : "order-2";
  const textColor = alternate ? "text-white" : "text-gray-600";
  const buttonColor = alternate
    ? "bg-white text-purp-dark"
    : "bg-purp-dark text-white";

  return (
    <Container>
      <div
        {...storyblokEditable(blok)}
        className={`${containerClasses} flex flex-col md:flex-row items-center`}
      >
        {image && (
          <div
            className={`image-container mb-4 md:mb-0 md:w-1/2 ${imageOrder}`}
          >
            <Image
              src={image.filename}
              alt={image.alt}
              width={500}
              height={500}
              className="mx-auto p-8"
            />
          </div>
        )}
        <div className={`text-content md:w-1/2 ${contentOrder}`}>
          <h2
            className={`text-xl font-clone font-extrabold text-purp-dark mb-3 ${textColor}`}
          >
            {title}
          </h2>
          <ReactMarkdown>{content}</ReactMarkdown>
          {button_text && button_target && (
            <Link href={button_target.cached_url}>
              <button className={` rounded-lg px-4 py-2 mt-4 ${buttonColor}`}>
                {button_text}
              </button>
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Announcement;
