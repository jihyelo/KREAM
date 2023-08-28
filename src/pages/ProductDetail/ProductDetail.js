import { useState, useEffect } from 'react';
import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';
import detail from '../../API/detail';

import './ProductDetail.scss';
const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    detail().then(data => {
      setDetailData(data);
    });
  }, []);

  return (
    <div className="productDetail">
      <div className="content">
        <div className="columnBind">
          <DetailRightBox detailData={detailData} />
          <DetailLeftBox detailData={detailData} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
