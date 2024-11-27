import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: { display: 'flex', gap: '10px', padding: '10px', background: '#f4f4f4' },
    link: { textDecoration: 'none', color: 'blue' },
  };

  return (
    <div style={styles.header}>
      <Link style={styles.link} to="/">Home</Link>
      <Link style={styles.link} to="/first">First Component</Link>
      <Link style={styles.link} to="/second">Second Component</Link>
      <Link style={styles.link} to="/third">Third Component</Link>
      <Link style={styles.link} to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
