import React, { useState } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';

const colors = ['#fe0000', '#00ff01', '#0000fd', '#feff00', '#ff00fe','#00ffff','#fea500','#81007f','#fcc1cb','#008001','#fe6347','#01ced1','#8b4512','#ff8b00','#4582b4','#fed700'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#FFFFFF'); 

  const handleColorSelect = (color) => {
    setBackgroundColor(color); 
  };

  return (
    <div>
      <h1 className='title'>Color Picker</h1>
      <div className="App" style={{ backgroundColor }}>
      <ColorPicker colors={colors} backgroundColor={backgroundColor} onColorSelect={handleColorSelect} />
      </div>
    </div>
  );
}

export default App;
