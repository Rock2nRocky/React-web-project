import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Shop = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Shop All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
