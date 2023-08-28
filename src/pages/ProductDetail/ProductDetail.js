import { useState, useEffect } from 'react';
import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';
import detail from '../../API/detail';

import './ProductDetail.scss';
const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});
  const [detailTrade, setDetailTrade] = useState([]);
  const [sizePrice, setSizePrice] = useState([]);

  useEffect(() => {
    detail().then(data => {
      setDetailData(data[0]);
      setDetailTrade(data[1].trade);
      setSizePrice(data[2].sizePrice);
    });
  }, []);
  console.log('size:', sizePrice, 'trade:', detailTrade);
  return (
    <div className="productDetail">
      <div className="content">
        <div className="columnBind">
          <DetailRightBox detailData={detailData} detailTrade={detailTrade} />
          <DetailLeftBox detailData={detailData} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
