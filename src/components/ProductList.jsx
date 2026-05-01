import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, removeProduct }) => {
	if (!products || products.length === 0) {
		return <p>Sorry! product(s) unavailable !</p>;
	}

	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} removeProduct={removeProduct} />
			))}
		</div>
	);
};

export default ProductList;
