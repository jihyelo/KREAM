import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';

import './ProductDetail.scss';
const ProductDetail = () => {
  return (
    <div className="productDetail">
      <div className="content">
        <div className="columnBind">
          <DetailRightBox />
          <DetailLeftBox />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
