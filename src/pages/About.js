import React from 'react';
import { FaTshirt, FaSuitcase, FaShoePrints, FaTags, FaCheckCircle } from 'react-icons/fa'; // Import icons

const About = () => {
  return (
    <div className="about-container">
      <h2>About Fly High - Men's Spot</h2>
      <p>
        Welcome to <strong>Fly High - Men's Spot</strong>, your one-stop destination for the latest trends in men’s fashion.
        We offer stylish, high-quality, and affordable clothing designed to suit every man’s wardrobe needs.
      </p>

      <h3>What We Offer</h3>
      <ul className="offer-list">
        <li>
          <FaTshirt className="icon" /> <strong>Casual Wear:</strong> T-shirts, polos, and hoodies for a relaxed vibe.
        </li>
        <li>
          <FaSuitcase className="icon" /> <strong>Formal Wear:</strong> Shirts, trousers, and blazers for work or special events.
        </li>
        <li>
          <FaTags className="icon" /> <strong>Ethnic Wear:</strong> Traditional kurtas and more for cultural celebrations.
        </li>
        <li>
          <FaShoePrints className="icon" /> <strong>Footwear & Accessories:</strong> Everything to complete your look.
        </li>
      </ul>

      <h3>Why Choose Us?</h3>
      <ul className="why-choose-list">
        <li>
          <FaCheckCircle className="icon" /> Trendy collections crafted for comfort and style.
        </li>
        <li>
          <FaCheckCircle className="icon" /> High-quality products at affordable prices.
        </li>
        <li>
          <FaCheckCircle className="icon" /> Exceptional customer service to ensure your satisfaction.
        </li>
      </ul>

      <p>
        Discover your perfect look with <strong>Fly High - Men's Spot</strong>—where fashion meets individuality.
      </p>
    </div>
  );
};

export default About;
