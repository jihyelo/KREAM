import React from 'react';
import './SizeSelectModal.scss';

const SizeSelectModal = ({
  isOpen,
  onClose,
  onSelectSize,
  latestPrice,
  sizes,
  sizePriceData,
}) => {
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
          {sizes.length > 0 ? (
            sizes.map(size => (
              <div
                className="sizeButton"
                key={size}
                onClick={() => onSelectSize(size)}
              >
                <div className="sizeText">{size}</div>
                {sizePriceData && sizePriceData[size] && (
                  <div className="recentPrice">
                    {sizePriceData[size].latestPrice}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>No sizes available</p>
          )}
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
