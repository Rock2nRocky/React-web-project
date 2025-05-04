import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import App from './App'; // Import main App component
import CartProvider from './contexts/CartContext'; // Import Cart Context Provider


// Ensure proper structure for footer to stay at the bottom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the entire application with the CartProvider */}
    <CartProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <App />
      </div>
    </CartProvider>
  </React.StrictMode>
);
