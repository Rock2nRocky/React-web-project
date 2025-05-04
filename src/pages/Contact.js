import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const handleViewOnMaps = () => {
    window.open('https://www.google.com/maps/place/Fly+high+mens+spot/@12.5898262,78.5084235,17z', '_blank');
  };

  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <FaUser className="icon" />
          <div>
            <strong>Owner:</strong> Murali Raj
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <div>
            <strong>Email:</strong>{' '}
            <a href="mailto:support@flyhigh.com">support@flyhigh.com</a>
          </div>
        </div>
        <div className="contact-item">
          <FaPhone className="icon" />
          <div>
            <strong>Phone:</strong>{' '}
            <a href="tel:+919626564903">+91 9626564903</a>
          </div>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <div>
            <strong>Address:</strong>
            <p>
              Post Office Upstairs,
              <br />
              Govt. Hospital Road,
              <br />
              Yerkodi, Natrampalli,
              <br />
              Tirupattur, DT 635 852.
            </p>
          </div>
        </div>
      </div>
      <hr className="divider" />
      <h2 className="contact-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        Our Location
        <button 
          onClick={handleViewOnMaps}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '14px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease, transform 0.2s ease',
            textTransform: 'uppercase',
            marginLeft: 'auto'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#218838'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#28a745'}
          onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'}
          onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
        >
          View on Maps
        </button>
      </h2>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8521191209073!2d78.50842349999999!3d12.5898262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badad9991a835ff%3A0xc2faeac88faa500b!2sFly%20high%20mens%20spot!5e0!3m2!1sen!2sin!4v1673575729430!5m2!1sen!2sin"
          title="Fly High Men's Spot Location"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
