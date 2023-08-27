import DetailRightTop from '../DetialRightTop/DetailRightTop';

import './DetailRightBox.scss';

const DetailRightBox = () => {
  return (
    <div className="detailRightBox">
      <div className="columnBox">
        <DetailRightTop />

        <div className="productInfoWrap"></div>
        <div className="displaySections"></div>
        <div className="deliveryWayWrap"></div>
        <div className="bannerBox"></div>
        <div className="detailWrap">
          <div className="productSalesGraph">
            <div className="title"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRightBox;
