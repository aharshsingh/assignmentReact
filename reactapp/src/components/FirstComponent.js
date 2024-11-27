import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButtonClicked } from '../store/buttonSlice';

const FirstComponent = () => {
  const dispatch = useDispatch();
  const buttonClicked = useSelector((state) => state.button.buttonClicked);

  const handleButtonClick = () => {
    dispatch(toggleButtonClicked());
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px',
    },
    label: {
      fontSize: '18px',
      marginBottom: '20px',
      color: '#333',
      fontWeight: '500',
    },
    button: {
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      fontWeight: '600',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
      transform: 'scale(1.05)',
    },
    buttonClicked: {
      backgroundColor: '#28a745',
      color: '#fff',
    },
    message: {
      marginTop: '20px',
      fontSize: '20px',
      fontWeight: '500',
      color: '#28a745',
      transition: 'opacity 0.3s ease',
    },
  };

  return (
    <div style={styles.container}>
      <label style={styles.label}>Click on the Button: </label>
      <button
        style={{
          ...styles.button,
          ...(buttonClicked ? styles.buttonClicked : {}),
        }}
        onClick={handleButtonClick}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
      >
        Get Started
      </button>
      {buttonClicked && <p style={styles.message}>Button Clicked!</p>}
    </div>
  );
};

export default FirstComponent;
