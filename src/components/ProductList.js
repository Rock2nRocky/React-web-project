import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image.black} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.offerPrice}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
