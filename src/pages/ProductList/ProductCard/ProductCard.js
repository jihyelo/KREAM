import { LiaBookmarkSolid } from 'react-icons/lia';
import { VscPreview } from 'react-icons/vsc';
import './ProductCard.scss';

const ProductCard = ({ image, brand, engName, price }) => {
  return (
    <div className="productCard">
      <div className="itemInner">
        <div className="productImage">
          <img src={image} alt={engName} />
        </div>
        <div className="productInfoArea">
          <div className="brand">{brand}</div>
          <div className="engName">{engName}</div>
          <div className="priceArea">
            <div className="byNowPrice">{parseInt(price)}원</div>
            <div className="byNowPriceText">즉시 구매가</div>
          </div>
        </div>
      </div>

      <div className="actionWishReview">
        <div className="wishFigure">
          <LiaBookmarkSolid className="wishIcon" />
          <div className="wishCount">1368</div>
        </div>
        <div className="reviewFigure">
          <VscPreview className="riviewIcon" />
          <div className="reviewCount">22</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
