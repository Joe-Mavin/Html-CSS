import React, { useState } from 'react';
import ProductComponent from './product.component';
import blackShoe from '../assets/black-shoe.jpg';
import redShoe from '../assets/red-shoe.jpg';
import orangeShoe from '../assets/orange-shoe.jpg';

const DisplayProductComponent = () => {
  const [color, setColor] = useState('orange');
  const [image, setImage] = useState(orangeShoe);

  const handleColorChange = (newColor) => {
    setColor(newColor);
    switch (newColor) {
      case 'black':
        setImage(blackShoe);
        break;
      case 'red':
        setImage(redShoe);
        break;
      case 'orange':
        setImage(orangeShoe);
        break;
      default:
        setImage(orangeShoe);
    }
  };

  return (
    <ProductComponent color={color} image={image} onColorChange={handleColorChange} />
  );
};

export default DisplayProductComponent;
