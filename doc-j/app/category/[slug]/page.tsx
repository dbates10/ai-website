import React from "react";
import { categories } from "../../constants/categories";
import Link from "next/link";
import CategoryHero from "@/components/CategoryHero";
import TextWithImage from "@/components/TextWithImage";
import ProductGallery from "@/components/ProductGallery";
import Newsletter from "@/components/Newsletter";

interface Params {
  params: {
    slug: string;
  };
}

const PortfolioPage = (params: Params) => {
  // Extract slug from params
  const { slug } = params.params;
  const category = categories.find((category) => category.slug === slug);
  if (!category) {
    return <p>Category not found.</p>;
  }
  // Log the found category
  const { name, description, heroImage, heroImageAlt, products } = category;

  return (
    <>
      <CategoryHero name={name} src={heroImage} alt={heroImageAlt} />
      <TextWithImage content={category} alternate />
      <ProductGallery products={products} />
      <Newsletter />
    </>
  );
};

export default PortfolioPage;
