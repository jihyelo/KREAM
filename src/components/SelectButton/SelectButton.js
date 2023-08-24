import React, { useState } from 'react';
import './SelectButton.scss';

const SelectButton = ({ size, price, bid }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <li className="selectItem">
      <button
        className={`sizeSelectBtn ${isClicked ? 'clicked' : ''}`}
        onClick={() => handleClick()}
      >
        <p className="size">{size}</p>
        <p className="price small">{price}</p>
        <p className="bid small">{bid}</p>
      </button>
    </li>
  );
};

export default SelectButton;
