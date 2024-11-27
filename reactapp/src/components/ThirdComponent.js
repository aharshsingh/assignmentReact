import React from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { updateTile } from '../store/tileSlice';

const ThirdComponent = () => {
  const dispatch = useDispatch();
  const selectedTile = useSelector((state) => state.tile.selectedTile); 

  const handleTileClick = (tileName) => {
    dispatch(updateTile(tileName)); 
  };

  const [hovered, setHovered] = React.useState(false); 

  const styles = {
    tile: {
      border: '1px solid #ccc',
      padding: '20px',
      margin: '15px',
      cursor: 'pointer',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: hovered
        ? '0 6px 15px rgba(0, 0, 0, 0.2)'
        : '0 4px 10px rgba(0, 0, 0, 0.1)', 
      transform: hovered ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      maxWidth: '600px',
      margin: '30px auto', 
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)', 
    },
    heading: {
      textAlign: 'center',
      color: '#333',
      fontSize: '24px',
      fontWeight: '600',
      marginBottom: '20px',
    },
    selectedTileText: {
      marginTop: '20px',
      fontSize: '18px',
      color: '#333',
      fontWeight: '500',
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Third Component</h2>

     
      {['Tile 1', 'Tile 2', 'Tile 3'].map((tileName) => (
        <div
          key={tileName}
          style={styles.tile}
          onClick={() => handleTileClick(tileName)}
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)} 
        >
          <h3>{tileName}</h3>
        </div>
      ))}

     
      {selectedTile && <h3 style={styles.selectedTileText}>Selected Tile: {selectedTile}</h3>}
    </div>
  );
};

export default ThirdComponent;
