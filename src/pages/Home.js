import React from 'react';
import HeroBanner from '../components/HeroBanner'; // Import Hero Banner
import ProductCard from '../components/ProductCard';
import products from '../data/products';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Featured Products</h2>
      <div className="products-grid">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
