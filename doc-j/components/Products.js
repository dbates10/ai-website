import { StoryblokComponent } from "@storyblok/react";

const Products = ({ blok }) => {
  return (
    <>
      {blok.products.map((nestedBlok, index) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          alternate={index % 2 !== 0}
        />
      ))}
      ;
    </>
  );
};

export default Products;
