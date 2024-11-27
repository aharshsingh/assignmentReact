import React from 'react';

const SecondComponent = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px', 
      padding: '30px',
      backgroundColor: '#f7f7f7',
      borderRadius: '8px', 
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
      maxWidth: '500px', 
      margin: '20px auto', 
    },
    box: {
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '8px', 
      border: '1px solid #ddd', 
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', 
      transition: 'transform 0.2s ease, box-shadow 0.2s ease', 
    },
    boxHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    },
    text: {
      fontSize: '18px', 
      fontWeight: '500', 
      color: '#333', 
    },
  };

  return (
    <div style={styles.container}>
      <div
        style={{ 
          ...styles.box, 
          '&:hover': styles.boxHover, 
        }}
      >
        <p style={styles.text}>Content 1</p>
      </div>
      <div
        style={{ 
          ...styles.box, 
          '&:hover': styles.boxHover, 
        }}
      >
        <p style={styles.text}>Content 2</p>
      </div>
    </div>
  );
};

export default SecondComponent;
