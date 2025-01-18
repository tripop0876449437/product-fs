import React from "react";

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-md shadow-md flex items-center">
    <img
      src={product.image}
      alt={product.name}
      className="w-20 h-20 object-cover rounded-md"
    />
    <div className="ml-4">
      <h3 className="text-sm font-bold">{product.name}</h3>
      <p className="text-gray-500">{product.price} THB</p>
    </div>
  </div>
);

export default ProductCard;
