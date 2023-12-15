import Image from "next/image";
import Container from "@/components/Container";
const TextWithImage = () => {
  return (
    <Container className="max-w-[1440px]">
      <div className="flex flex-col md:flex-row gap-4 my-12">
        <div className="flex flex-col w-full md:w-1/2 2xl:w-1/3">
          <h1 className="text-4xl font-bold font-ibm text-center md:text-left px-4 md:px-8 py-4">
            Bringing a High-Quality Cannabis Experience to Virginia
          </h1>
          <div className="h-1 bg-gradient-to-r from-green to-purp mx-4 md:mx-8"></div>
          <p className="text-lg font-thin font-ibm text-center md:text-left px-4 md:px-8 py-4">
            Welcome to Doc J&apos;s Laboratory. We are at the heart of
            Virginia&apos;s finest cannabis exploration, meticulously crafted
            for connoisseurs like you. I&apos;m Doc J, leading a team with a
            combined 50+ years of passion and expertise in cannabis. Our journey
            encompasses everything from cultivation to extraction, ensuring
            unparalleled quality.
          </p>
          <p className="text-lg font-thin font-ibm text-center md:text-left px-4 md:px-8 py-4">
            Collaborating with top cultivators across Virginia and beyond, we
            guarantee only the best. Every product we share is a symbol of our
            dedication—if it doesn&apos;t meet our high standards, it
            doesn&apos;t make the cut. Join us in a celebration of the finest
            cannabis, where excellence and community are our core values.
          </p>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <Image
            className="object-cover object-center w-full h-full "
            src="/doc-cultivating.jpg"
            alt="Doc J cultivating cannabis"
            height={900}
            width={600}
          />
        </div>
      </div>
    </Container>
  );
};

export default TextWithImage;
