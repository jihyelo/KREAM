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
  const productId = params.productId;

  useEffect(() => {
    const getData = async () => {
      const { result } = await getProductDetail(productId);
      console.log('>>>>>>>>>', result);
      setDetailData(result.data[0]);
      setDetailTrade(result.data[1].trade.allBidBuyData);
      setSizePrice(result.data[1].sizePrice);
    };

    getData();
  }, [productId]);
  console.log(
    '디테일데이터',
    detailData,
    '디테일트레이드',
    detailTrade,
    '디테일사이즈',
    sizePrice,
  );
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

// "sizePrice": [
//   {
//     "sizeType": "220",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "230",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "240",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "250",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "260",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "270",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   },
//   {
//     "sizeType": "280",
//     "priceData": {
//       "latestPrice": 241000,
//       "buyNowPrice": 210000,
//       "sellNowPrice": 236000
//     }
//   }

// ]
