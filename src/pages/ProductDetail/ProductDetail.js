import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';
import detail from '../../API/detail';

import './ProductDetail.scss';
const ProductDetail = () => {
  const [detailData, setDetailData] = useState({});
  const [detailTrade, setDetailTrade] = useState([]);
  const [sizePrice, setSizePrice] = useState([]);

  const params = useParams();
  const productId = params.id;
  // productList 컴포넌트, or productCard 컴포넌트
  // <Link key={productId} to={`/detail/${productId}`}>
  //</Link>
  // navigate(/product-detail/${productId})

  /* 참고예시
    <nav>
        {users.map(({ id, first_name, email, avatar }) => (
          <Link key={id} to={`/detail/${id}`}>
              <p>
                <strong>{first_name}</strong>
              </p>
              <p>{email}</p>
              <img alt="avatar" src={avatar} />
          </Link>
        ))}
      </nav>*/
  useEffect(() => {
    detail({ productId }).then(data => {
      setDetailData(data[0]);
      setDetailTrade(data[1].trade);
      setSizePrice(data[2].sizePrice);
    });
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
