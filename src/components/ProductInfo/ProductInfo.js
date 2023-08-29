import React from 'react';
import './ProductInfo.scss';

const ProductInfo = ({ src, code, name, translatedName, shippingExpress }) => {
  return (
    <div className="productInfo">
      <div className="productThumb">
        <div className="product">
          <img src={src} alt="shoes" />
        </div>
      </div>
      <div className="productDetail">
        <p className="code">{code}</p>
        <p className="name">{name}</p>
        <p className="translatedName">{translatedName}</p>
        <div className="shippingExpress">{shippingExpress}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
