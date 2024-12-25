import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton() {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scroll and show/hide the button
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
  <button
    onClick={scrollToTop}
    style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      backgroundColor: '#FF6200',
      color: '#FFF',
      border: '1px solid #FFF',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 1000,
    }}
    title="Scroll to top"
    className='!rounded-button flex-1 py-3 font-semibold'
  >
    <FaArrowUp />
  </button>
)}
    </>
  );
}

export default ScrollToTopButton;
