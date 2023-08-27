import React from 'react';
import './SizeSelectModal.scss';

const SizeSelectModal = ({ isOpen, onClose, onSelectSize }) => {
  const sizes = [220, 230, 240, 250, 260, 270, 280];

  if (!isOpen) {
    return null;
  }

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
            </div>
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
