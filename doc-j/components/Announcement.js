import Image from "next/image";
import Link from "next/link";

const Announcements = ({ announcement, alternate }) => {
  const { title, content, image, imageAlt, buttonText, buttonLink } =
    announcement;
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
    <div
      className={`${containerClasses} flex flex-col md:flex-row items-center`}
    >
      {image && (
        <div className={`image-container mb-4 md:mb-0 md:w-1/2 ${imageOrder}`}>
          <Image
            src={image}
            alt={imageAlt}
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
        {content.map((paragraph, index) => (
          <p
            key={index}
            className={`text-sm font-thin font-ibm mb-2 ${textColor}`}
          >
            {paragraph}
          </p>
        ))}
        {buttonText && buttonLink && (
          <Link href={buttonLink}>
            <button className={` rounded-lg px-4 py-2 mt-4 ${buttonColor}`}>
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Announcements;
