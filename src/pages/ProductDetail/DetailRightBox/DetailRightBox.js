import DetailRightTop from '../DetialRightTop/DetailRightTop';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductBids from '../ProductBids/ProductBids';
import './DetailRightBox.scss';

const DetailRightBox = () => {
  return (
    <div className="detailRightBox">
      <div className="columnBox">
        <DetailRightTop />

        <ProductInfo />
        <ProductBids />
        <div className="displaySections"></div>
        <div className="deliveryWayWrap"></div>
        <div className="bannerBox"></div>
        <div className="detailWrap">
          <div className="productSalesGraph"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailRightBox;
