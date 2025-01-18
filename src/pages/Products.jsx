import React from "react";
import products from "../data/dataProduct.json";
import ProductCard from "../components/ProductCard";

const Products = () => (
  <div className="container mx-auto py-8">
    <h1 className="text-2xl font-bold mb-4">สินค้าแนะนำ</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  </div>
);

export default Products;
