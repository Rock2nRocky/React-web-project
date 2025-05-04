import React, { useState, useContext } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import products from '../data/products';
import { CartContext } from '../contexts/CartContext';
import { ToastContainer, toast } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialColor = queryParams.get('color'); // Get color from query parameters

  // Find the product by ID
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(initialColor || product.colors[0]); // Default to query color or first color
  const [selectedSize, setSelectedSize] = useState(''); // Default size
  const { addToCart } = useContext(CartContext); // Access CartContext

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size before adding to cart.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Cart item details
    const cartItem = {
      id: product.id,
      name: product.name,
      offerPrice: product.offerPrice,
      size: selectedSize,
      color: selectedColor,
      image: product.image,
      quantity: 1,
    };

    addToCart(cartItem);

    toast.success('Product added to cart successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '2rem',
        gap: '2rem',
      }}
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Left Section: Product Image */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img
          src={product.image[selectedColor]}
          alt={product.name}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Right Section: Product Details */}
      <div style={{ flex: 2 }}>
        <h2>{product.name}</h2>
        <p
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: '10px 0',
            color: '#555',
          }}
        >
          Offer Price: ₹{product.offerPrice}{' '}
          <span style={{ textDecoration: 'line-through', color: '#999' }}>
            ₹{product.price}
          </span>
        </p>
        <p style={{ marginBottom: '20px', color: '#777' }}>{product.description}</p>

        {/* Color Selection */}
        <div style={{ marginBottom: '20px' }}>
          <h4>Select Color:</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: color,
                  border: color === selectedColor ? '3px solid #000' : '1px solid #ddd',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              ></button>
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div style={{ marginBottom: '20px' }}>
          <h4>Select Size:</h4>
          {['S', 'M', 'L', 'XL'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              style={{
                margin: '5px',
                padding: '10px',
                backgroundColor: selectedSize === size ? 'blue' : '#ddd',
                color: selectedSize === size ? 'white' : '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={handleAddToCart}
            style={{
              padding: '12px 24px',
              backgroundColor: 'green',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate('/cart')}
            style={{
              padding: '12px 24px',
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
