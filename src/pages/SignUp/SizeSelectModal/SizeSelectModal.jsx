import React from 'react';
import './SizeSelectModal.scss';

const SizeSelectModal = ({
  isOpen,
  onClose,
  onSelectSize,
  recentPrice,
  sizes,
}) => {
  const priceToShow = recentPrice ? recentPrice : null;
  if (!isOpen) {
    return null;
  }

  // for (const [key, value] of Object.entries(object1)) {
  //   console.log(`${key}: ${value}`);
  // }

  return (
    <div className="modalLayout">
      <div className="modalHeader">
        <div className="modalTitle">사이즈 선택</div>
      </div>
      <div className="modalContent">
        <div className="sizeList">
          {sizes.map(size => (
            <div
              className="sizeButton"
              key={size}
              onClick={() => onSelectSize(size)}
            >
              {size}
              {recentPrice}
            </div>
            // <div></div>
          ))}
        </div>
        <div className="modalFooter">
          <div className="closeButton" onClick={onClose}>
            <p>닫기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeSelectModal;
