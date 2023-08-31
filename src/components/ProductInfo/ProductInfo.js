import React from 'react';
import './ProductInfo.scss';

const ProductInfo = ({ url, serialNumber, name, size }) => {
  return (
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
        <div className="shippingExpress">빠른 배송</div>
      </div>
    </div>
  );
};

export default ProductInfo;
