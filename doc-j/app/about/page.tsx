import React from "react";
import TextWithImage from "@/components/TextWithImage";
import TextBlock from "@/components/TextBlock";
import ContactForm from "@/components/ContactForm";
const AboutPage = () => {
  const content = {
    headline: "About Us",
    description: [
      "Welcome to the Laboratory. I’m Doc J and I’m here to bring Virginia an exceptionally curated craft cannabis experience. I work with some of the best cultivators, breeders, and processors in Virginia as well as the rest of the country. I have been studying cannabis for 15 years and have participated in the cannabis industry for the past 10 years. This is my life and my passion and my only goal is to educate our community and share the gift of quality cannabis with the world.",
      "My team and I dabble in everything cannabis related; cultivation, extraction, the cure process, preservation, education, marketing, constructing grows, and last but not least, SMOKING. Our team has over 50 years of collective experience in the industry in different disciplines and we all stand behind every product that we create or share. If we wouldn’t consume it ourselves, we wouldn’t share it. ",
    ],
    image: "/about-image.jpg",
    imageAlt: "Doc J in his lab",
  };
  const textContent = {
    description:
      "Please reach out to us using the contact form below if you have any questions for us! Whether you are new to cannabis or an experienced connoisseur; I am confident that we can help you find what you need. Businesses, entrepreneurs, and hobbyists are welcome to contact us as well to learn more about our consultation services and wholesale programs!",
  };
  return (
    <>
      <TextWithImage content={content} />
      <ContactForm />
    </>
  );
};

export default AboutPage;
