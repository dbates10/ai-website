import Product from "@/components/Product";

const ProductGallery = (props) => {
  const { products } = props;

  return (
    <>
      {products.map((product, index) => (
        <Product
          key={product.id}
          product={product}
          alternate={index % 2 !== 0}
        />
      ))}
    </>
  );
};

export default ProductGallery;
