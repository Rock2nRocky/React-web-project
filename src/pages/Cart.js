import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultImage from '../assets/images/default.png';

const Cart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext); // Removed updateCart
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
  });

  const [showModal, setShowModal] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.offerPrice * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendOrder = () => {
    if (!userDetails.name || !userDetails.mobile || !userDetails.address || !userDetails.email) {
      toast.error('Please fill in all user details.', {
        position: 'top-center',
        autoClose: 3000,
      });
      return;
    }

    const orderDetails = cart
      .map(
        (item) =>
          `Product: ${item.name}\nColor: ${item.color}\nSize: ${item.size}\nPrice: ₹${item.offerPrice}\nQuantity: ${item.quantity}\n\n`
      )
      .join('');
    const total = `Total: ₹${calculateTotal()}`;

    const message = `
User Details:
Name: ${userDetails.name}
Mobile: ${userDetails.mobile}
Address: ${userDetails.address}
Email: ${userDetails.email}

Order Details:
${orderDetails}${total}`;

    const telegramBotToken = '7601733170:AAF4HIKNlHcAw_BYE8X75owZ-dF67gNluwI';
    const chatId = 5612838388;
    const telegramAPI = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    fetch(telegramAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          toast.success('Order sent successfully!', {
            position: 'top-center',
            autoClose: 3000,
          });
          setShowModal(false);
        } else {
          toast.error(`Failed to send order: ${data.description}`, {
            position: 'top-center',
            autoClose: 3000,
          });
        }
      })
      .catch((error) => {
        toast.error('Error sending order. Please check your internet connection.', {
          position: 'top-center',
          autoClose: 3000,
        });
        console.error(error);
      });
  };

  const handleDeleteItem = (id, color, size) => {
    removeItemFromCart(id, color, size);
    toast.info('Item removed from cart.', {
      position: 'top-center',
      autoClose: 3000,
    });
  };

  if (cart.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Your cart is empty</h2>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <ToastContainer />
      <h1>Your Cart</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '2rem' }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Color</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            const imageSrc = item.image?.[item.color] || defaultImage;

            return (
              <tr key={index} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td>
                  <img
                    src={imageSrc}
                    alt={item.name || 'Product Image'}
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.size}</td>
                <td>₹{item.offerPrice}</td>
                <td>{item.quantity}</td>
                <td>₹{item.offerPrice * item.quantity}</td>
                <td>
                  <button
                    onClick={() => handleDeleteItem(item.id, item.color, item.size)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      cursor: 'pointer',
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 style={{ textAlign: 'right', marginBottom: '2rem' }}>Total: ₹{calculateTotal()}</h2>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Send Order
        </button>
        <button
          onClick={() => navigate('/shop')}
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          View More
        </button>
      </div>

      {/* Modal for User Details */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '8px',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <h2>User Details</h2>
            <div style={{ marginBottom: '1rem' }}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                style={{ marginLeft: '1rem', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                value={userDetails.mobile}
                onChange={handleInputChange}
                style={{ marginLeft: '1rem', width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Address:</label>
              <textarea
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                style={{ marginLeft: '1rem', width: '100%' }}
              ></textarea>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                style={{ marginLeft: '1rem', width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
              <button
                onClick={handleSendOrder}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'green',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
