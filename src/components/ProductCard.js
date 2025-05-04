import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]); // Default color

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}?color=${selectedColor}`} // Pass selected color as query parameter
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        {/* Product Image */}
        <img
          src={product.image[selectedColor]}
          alt={product.name}
          className="product-image"
        />

        {/* Product Name */}
        <h3>{product.name}</h3>

        {/* Price and Offer */}
        <p>
          <span className="price">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(product.offerPrice)}
          </span>
          <span className="original-price">
            {new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
            }).format(product.price)}
          </span>
        </p>
        <p className="discount">
          {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
        </p>
      </Link>

      {/* Color Selection */}
      <div className="color-options">
        {product.colors.map((color) => (
          <span
            key={color}
            className={`color-circle ${color}`}
            style={{
              backgroundColor: color,
              border: color === selectedColor ? '2px solid #000' : '1px solid #ddd',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.preventDefault(); // Prevent `Link` click when selecting color
              setSelectedColor(color);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
