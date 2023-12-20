import Image from "next/image";
import Container from "@/components/Container";
const TextWithImage = (props) => {
  let {
    headline,
    description,
    image,
    imageAlt,
    name,
    logoImage,
    logoImageAlt,
  } = props.content;
  if (props.alternate) {
    return (
      <Container className="max-w-[1440px]">
        <div className="flex flex-col md:flex-row gap-4 my-12">
          <div className="flex flex-col w-full md:w-1/2">
            <Image
              className={`object-contain object-center w-full h-full ${props.imageClasses}`}
              src={image || logoImage}
              alt={imageAlt || logoImageAlt}
              height={900}
              width={600}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 2xl:w-1/3">
            <h1 className="text-4xl text-purp-dark font-bold font-clone text-center md:text-left px-4 md:px-8 py-4">
              {headline || name}
            </h1>
            <div className="h-1 bg-gradient-to-r from-green to-purp mx-4 md:mx-8"></div>
            {description.map((paragraph) => (
              <p
                key={paragraph}
                className="text-lg font-thin font-ibm text-center md:text-left px-4 md:px-8 py-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Container>
    );
  }
  return (
    <Container className="max-w-[1440px]">
      <div className="flex flex-col md:flex-row gap-4 my-12">
        <div className="flex flex-col w-full md:w-1/2 2xl:w-1/3">
          <h1 className="text-4xl text-purp-dark font-bold font-clone text-center md:text-left px-4 md:px-8 py-4">
            {headline || name}
          </h1>
          <div className="h-1 bg-gradient-to-r from-green to-purp mx-4 md:mx-8"></div>
          {description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-lg font-thin font-ibm text-center md:text-left px-4 md:px-8 py-4"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <Image
            className={`object-cover object-center w-full h-full ${props.imageClasses}`}
            src={image || logoImage}
            alt={imageAlt || logoImageAlt}
            height={900}
            width={600}
          />
        </div>
      </div>
    </Container>
  );
};

export default TextWithImage;
