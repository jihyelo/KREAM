import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';
import getProductDetail from '../../API/getProductDetail';

import './ProductDetail.scss';
const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});
  const [detailTrade, setDetailTrade] = useState([]);
  const [sizePrice, setSizePrice] = useState([]);

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    const getData = async () => {
      const { data } = await getProductDetail(productId);

      setDetailData(data[0]);
      setDetailTrade(data[1].trade);
      setSizePrice(data[2].sizePrice);
    };

    getData();
  }, [productId]);

  return (
    <div className="productDetail">
      <div className="content">
        <div className="columnBind">
          <DetailRightBox
            detailData={detailData}
            detailTrade={detailTrade}
            sizePrice={sizePrice}
            productId={productId}
          />
          <DetailLeftBox
            productImage={detailData.productImage}
            name={detailData.name}
          />
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
