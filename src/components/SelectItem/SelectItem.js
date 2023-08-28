import React from 'react';
import './SelectItem.scss';

const SelectItem = ({ size, price, bid, isSelected, handleClick }) => {
  return (
    <li className="selectItem">
      <button
        className={`sizeSelectBtn ${isSelected ? 'clicked' : ''}`}
        onClick={handleClick}
      >
        <p className="size">{size}</p>
        <p className="price small">{price}</p>
        <p className="bid small">{bid}</p>
      </button>
    </li>
  );
};

export default SelectItem;
