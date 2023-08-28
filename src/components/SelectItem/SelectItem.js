import React from 'react';
import './SelectItem.scss';

const SelectItem = ({ size, price, isSelected, handleClick }) => {
  return (
    <li className="selectItem">
      <button
        className={`sizeSelectBtn ${isSelected ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        <p className="size">{size}</p>
        {price !== null ? (
          <p className="price small">{price}</p>
        ) : (
          <p className="bid small">구매 입찰</p>
        )}
      </button>
    </li>
  );
};

export default SelectItem;
