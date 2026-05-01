import React from 'react';


const ProductCard = ({ product, removeProduct }) => {
  return (
    <div className={!product.inStock ? 'outOfStockClass' : ''}>
      {/* TODO: Apply conditional class to <div> above for out-of-stock items */}
      
      {/* TODO: Display product name */}
      {/* TODO: Display product price */}
      <p>{product.name}</p>
       <p>{product.price}
        </p>
      {/* TODO: Show if the product is in stock or out of stock */}
      {product.inStock ? <p>Product is in stock!</p> : <p>Product is out of stock!</p>}
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    
    </div>
  );
};

export default ProductCard;
