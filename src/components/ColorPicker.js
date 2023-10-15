import React, { useState } from 'react';

const ColorPicker = ({ colors, backgroundColor, onColorSelect }) => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [isColorListVisible, setColorListVisibility] = useState(false);

  const toggleColorList = () => {
    setColorListVisibility(!isColorListVisible);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setColorListVisibility(false);
    onColorSelect(color); // Notify the parent component of the selected color
  };

  return (
    <div className="color-picker" style={{ backgroundColor }}>
      <button onClick={toggleColorList}>Pick a color</button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color }}
              onClick={() => selectColor(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && (
        <div className="selected-color" style={{ backgroundColor: selectedColor }}>
         
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
