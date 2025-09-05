import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}