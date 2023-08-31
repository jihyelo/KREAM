import React, { useState, useEffect } from 'react';
import './ModalPayment.scss';

const ModalPayment = ({ open, close, name, price, orderPrice, point }) => {
  const [modallData, setModalData] = useState({});

  useEffect(() => {
    fetch('http://10:58:52:69:3000/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset-utf8',
      },
      body: JSON.stringify({
        productId: modallData.postId,
        size: modallData.size,
        price: price,
        orderPrice: orderPrice,
        point: point,
      }),
    })
      .then(res => res.json())
      .then(data => {
        setModalData(data.data);
      });
  });

  if (!open) {
    return null;
  }

  return (
    <div className="modalPayment">
      <div className="modalContent">
        <h1>결제주문확인서</h1>
        <div className="productThumb">
          <div className="product">
            <img src={modallData.url} alt="shoes" />
          </div>
        </div>
        <div className="productDetail">
          <p className="code">{modallData.serialNumber}</p>
          <p className="name">{name}</p>
          <p className="size">{modallData.size}</p>
          <p className="price">{price}</p>
          <p className="orderPrice">{orderPrice}</p>
        </div>
        <button className="closeButton" onClick={close}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default ModalPayment;
