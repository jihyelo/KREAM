import './ProductInfo.scss';

const ProductInfo = () => {
  return (
    <div className="productInfo">
      <div className="infoTitle">상품정보</div>

      <div className="detailProductWrap">
        <div className="detailProduct">
          <div className="detailBox modelNum">
            <div className="productTitle ">모델번호</div>
            <div className="productInfo modelNum">MR993GL</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">출시일</div>
            <div className="productInfo">18/08/21</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">컬러</div>
            <div className="productInfo">GREY/WHITE</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">발매가</div>
            <div className="productInfo">259,000원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
