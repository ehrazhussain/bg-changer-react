import React, { useState } from 'react';

const BdChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleClick = () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: backgroundColor,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <h1>Click me to change background color!</h1>
      <h2>you can also change a single colour</h2>
    </div>
  );
};

export default BdChanger;