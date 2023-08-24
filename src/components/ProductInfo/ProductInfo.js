import React from 'react';
import './ProductInfo.scss';

const ProductInfo = () => {
  return (
    <div className="productInfo">
      <div className="productThumb">
        <div className="product">
          <img src="../../images/shoe1.jpg" alt="shoes" />
        </div>
      </div>
      <div className="productDetail">
        <p className="code">CJ9179-200</p>
        <p className="name">Nike Air Force 1 '07 WB Flex</p>
        <p className="translatedName">나이키 에어포스 1 '07 WB 플렉스</p>
        <div className="shippingExpress">빠른배송</div>
      </div>
    </div>
  );
};

export default ProductInfo;
