import React from 'react';

const ItemList = ({ addToCart }) => {
  const items = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
