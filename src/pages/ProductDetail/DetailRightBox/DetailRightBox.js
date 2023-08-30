import { useNavigate } from 'react-router-dom';
import DetailRightTop from '../DetialRightTop/DetailRightTop';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductBids from '../ProductBids/ProductBids';
import './DetailRightBox.scss';

const DetailRightBox = ({ detailData, detailTrade, sizePrice, productId }) => {
  const navigate = useNavigate();
  const handleTokenNotFound = () => {
    alert('로그인을 해주세요');
    navigate('/login');
  };
  const checkTokenExists = () => {
    return !localStorage.getItem('TOKEN') ? handleTokenNotFound() : null;
  };

  return (
    <div className="detailRightBox">
      <div className="columnBox">
        <DetailRightTop
          brand={detailData.brand}
          name={detailData.name}
          recentTrade={detailData.recentTrade}
          sellPrice={detailData.sellPrice}
          buyPrice={detailData.buyPrice}
          sizePrice={sizePrice}
          productId={productId}
          handleTokenNotFound={handleTokenNotFound}
          checkTokenExists={checkTokenExists}
        />

        <ProductInfo
          serialNumber={detailData.serialNumber}
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
