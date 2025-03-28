import React, { useState } from 'react';

const MatrixGame = () => {
  const [matrix, setMatrix] = useState(Array(3).fill().map(() => Array(3).fill(null)));
  const [clickOrder, setClickOrder] = useState([]);

  const handleBoxClick = (row, col) => {
    // If the box is already clicked, do nothing
    if (matrix[row][col]) return;

    // Update the matrix with the new color (green)
    const newMatrix = [...matrix];
    newMatrix[row][col] = 'green';
    setMatrix(newMatrix);

    // Add the clicked box to the click order
    const newClickOrder = [...clickOrder, { row, col }];
    setClickOrder(newClickOrder);

    // If all boxes are clicked, change colors to orange in sequence
    if (newClickOrder.length === 9) {
      changeColorsToOrange(newClickOrder);
    }
  };

  const changeColorsToOrange = (clickOrder) => {
    let delay = 0;
    clickOrder.forEach(({ row, col }, index) => {
      setTimeout(() => {
        const newMatrix = [...matrix];
        newMatrix[row][col] = 'orange';
        setMatrix(newMatrix);
      }, delay);
      delay += 500; // 500ms delay between each box color change
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              onClick={() => handleBoxClick(rowIndex, colIndex)}
              style={{
                width: '50px',
                height: '50px',
                border: '1px solid black',
                backgroundColor: color || 'white',
                margin: '2px',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixGame;