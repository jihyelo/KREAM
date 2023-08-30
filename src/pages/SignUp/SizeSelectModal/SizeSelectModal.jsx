import React from 'react';
import './SizeSelectModal.scss';

const SizeSelectModal = ({
  isOpen,
  onClose,
  onSelectSize,
  recentPrice,
  sizes,
  sizePriceObject,
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
                {sizePriceObject && sizePriceObject[size] && (
                  <div className="recentPrice">
                    {sizePriceObject[size].최근거래가}
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
