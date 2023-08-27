import { LiaBookmarkSolid } from 'react-icons/lia';
import { VscPreview } from 'react-icons/vsc';
import './ProductCard.scss';

const ProductCard = ({ image, brand, engName, byNowPrice }) => {
  return (
    <div className="productCard">
      <div className="itemInner">
        <div className="productImage">
          <img src={`${image}`} />
        </div>
        <div className="productInfoArea">
          <div className="brand">{brand}</div>
          <div className="engName">{engName}</div>
          <div className="priceArea">
            <div className="byNowPrice">{byNowPrice}</div>
            <div className="byNowPriceText">즉시구매가</div>
          </div>
        </div>
      </div>

      <div className="actionWishReview">
        <div className="wishFigure">
          <LiaBookmarkSolid />
          <div className="wishCount">1368</div>
        </div>
        <div clssName="reviewFigure">
          <VscPreview />
          <div className="riviewCount">18</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
