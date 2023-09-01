import React from 'react';
import './ModalPayment.scss';

const ModalPayment = ({
  open,
  close,
  url,
  serialNumber,
  name,
  size,
  price,
  orderPrice,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modalPayment">
      <div className="modalContent">
        <h1>결제주문확인서</h1>
        <div className="productInfo">
          <div className="productThumb">
            <div className="product">
              <img src={url} alt="shoes" />
            </div>
          </div>
          <div className="productDetail">
            <p className="code">{serialNumber}</p>
            <p className="name">{name}</p>
            <p className="size">{size}</p>
            <p className="price">{price}</p>
          </div>
        </div>
        <div className="finalPrice">
          <p className="final">최종 결제 금액</p>
          <p className="orderPrice">{orderPrice}원</p>
        </div>
        <button className="closeButton" onClick={close}>
          확인
        </button>
      </div>
    </div>
  );
};

export default ModalPayment;
