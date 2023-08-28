import { useState, useEffect } from 'react';
import DetailLeftBox from './DetailLeftBox/DetailLeftBox';
import DetailRightBox from './DetailRightBox/DetailRightBox';

import './ProductDetail.scss';
const ProductDetail = () => {
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = () => {
    fetch('/data/detailData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({}),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        setDetailData(data.data);
      })
      .catch(error => {
        console.error(error);
        alert('데이터 불러오기 실패');
      });
  };
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
