import React from 'react';

const ProductComponent = ({ color, image, onColorChange }) => {
  return (
    <div style={{ backgroundColor: color, padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
      <img src={image} alt={`${color} shoe`} style={{ width: '200px' }} />
      <h2>Jordan Proto-Lyte</h2>
      <p>Running Collection</p>
      <p>
        Featuring soft foam cushioning and lightweight, woven fabric in the upper, 
        the Jordan Proto-Lyte is made for all-day, bouncy comfort. 
        Lightweight Breathability: Lightweight woven fabric with real or synthetic 
        leather provides breathable support. Cushioned Comfort: A full-length foam 
        midsole delivers lightweight, plush cushioning. Secure Traction: Exaggerated 
        herringbone-pattern outsole offers traction on a variety of surfaces.
      </p>
      <p>Price: Rs. 12,800</p>
      <div>
        <button onClick={() => onColorChange('black')} style={{ margin: '5px' }}>Black</button>
        <button onClick={() => onColorChange('red')} style={{ margin: '5px' }}>Red</button>
        <button onClick={() => onColorChange('orange')} style={{ margin: '5px' }}>Orange</button>
      </div>
    </div>
  );
};

export default ProductComponent;

