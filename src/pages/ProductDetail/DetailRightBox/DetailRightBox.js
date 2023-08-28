import DetailRightTop from '../DetialRightTop/DetailRightTop';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductBids from '../ProductBids/ProductBids';
import './DetailRightBox.scss';

const DetailRightBox = ({ detailData, detailTrade }) => {
  return (
    <div className="detailRightBox">
      <div className="columnBox">
        <DetailRightTop
          brand={detailData.brand}
          engName={detailData.engName}
          recentTrade={detailData.recentTrade}
          sellPrice={detailData.sellPrice}
          buyPrice={detailData.buyPrice}
        />

        <ProductInfo
          serialNum={detailData.serialNum}
          releaseDate={detailData.releaseDate}
          color={detailData.color}
          releasePrice={detailData.releasePrice}
        />
        <ProductBids detailTrade={detailTrade} />
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
