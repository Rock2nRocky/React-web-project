import React, { useEffect, useState } from 'react';
import './HeroBanner.css';

const HeroBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Define the desired end date (in local time)
    const endDate = new Date("2025-01-09T23:59:59").getTime(); // Replace with desired end date

    const updateTimer = () => {
      const now = new Date().getTime(); // Get current local time
      const difference = endDate - now;

      // If time is up, stop the timer
      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate remaining time
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Correct modulus
      const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Correct modulus

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateTimer, 1000);
    updateTimer(); // Initialize the state immediately

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, []);

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Winter Collection Sale</h1>
        <p className="hero-subtitle">
          Get up to <span className="highlight">50% Off</span> on all styles. Limited time only!
        </p>
        <div className="timer">
          {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes {timeLeft.seconds} Seconds
        </div>
        <a href="/shop" className="hero-button">Shop Now</a>
      </div>
    </div>
  );
};

export default HeroBanner;
