import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App(){
  // TODO: Define initial product data
  const listedProducts = [
  { id: 1, name: 'Laptop', price: '$999', inStock: true },
  { id: 2, name: 'Phone', price: '$699', inStock: false },
  { id: 3, name: 'Tablet', price: '$499', inStock: true },
];
  // TODO: Implement state to manage filtering
 const [products, setProducts] = useState(listedProducts);
 const [filter, setFilter] = useState("all")
  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter((product) => {
    if (filter === "instock") return product.inStock;
    if (filter === "outofstock") return !product.inStock;
    //if none of the filters match, return true which shows all
    return true;
  })
  const removeProduct = ((id) => {
    setProducts(products.filter(product => product.id !== id))
  })
  
  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("instock")}>In Stock</button>
      <button onClick={() => setFilter("outofstock")}>Out of Stock</button>
      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} removeProduct={removeProduct}/>
    </div>
  );
};

export default App;
