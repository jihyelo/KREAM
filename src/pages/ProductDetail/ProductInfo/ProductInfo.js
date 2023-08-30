import './ProductInfo.scss';

const ProductInfo = ({ serialNumber, releaseDate, color, releasePrice }) => {
  return (
    <div className="productInfo">
      <div className="infoTitle">상품정보</div>

      <div className="detailProductWrap">
        <div className="detailProduct">
          <div className="detailBox modelNum">
            <div className="productTitle ">모델번호</div>
            <div className="productInfo modelNum">{serialNumber}</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">출시일</div>
            <div className="productInfo">{releaseDate}</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">컬러</div>
            <div className="productInfo">{color}</div>
          </div>
          <div className="detailBox">
            {' '}
            <div className="productTitle">발매가</div>
            <div className="productInfo">{releasePrice}원</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
