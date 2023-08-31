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
  const [detailSellPrice, setDetailSellPrice] = useState([]);
  const [detailBuyPrice, setDetailBuyPrice] = useState([]);

  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    const getData = async () => {
      const { result } = await getProductDetail(productId);

      setDetailData(result.data[0]);
      setDetailTrade(result.data[1].trade[0].allTradeData);
      setDetailSellPrice(result.data[1].trade[0].allBidSellData);
      setDetailBuyPrice(result.data[1].trade[0].allBidBuyData);
      setSizePrice(result.data[1].sizePrice);
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
            detailSellPrice={detailSellPrice}
            detailBuyPrice={detailBuyPrice}
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
