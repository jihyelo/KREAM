import React from 'react';
import './ProductInfo.scss';

const ProductInfo = ({ url, serial_number, name }) => {
  return (
    <div className="productInfo">
      <div className="productThumb">
        <div className="product">
          <img src={url} alt="shoes" />
        </div>
      </div>
      <div className="productDetail">
        <p className="code">{serial_number}</p>
        <p className="name">{name}</p>
        <p className="translatedName">나이키 에어포스 1 '07 WB 플렉스</p>
        <div className="shippingExpress">빠른 배송</div>
      </div>
    </div>
  );
};

export default ProductInfo;
