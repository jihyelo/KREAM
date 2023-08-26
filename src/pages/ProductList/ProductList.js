import SortingResult from '../../components/SortingResult/SortingResult';
import FilteringCategory from '../../components/FilteringCategory/FilteringCategory';
import { useState } from 'react';

import './ProductList.scss';
const ProductList = () => {
  const [checkedFilterItem, setCheckedFilterItem] = useState([]);
  return (
    <div className="productList">
      <div className="searchTitle">
        <div className="titleText">SHOP</div>
      </div>
      <div className="category">
        {CATEGORY_ITEMS.map((item, index) => (
          <div className="categoryItem" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="trendContainer">
        <img src="/images/trendViewport.PNG" />
      </div>

      <div className="content">
        {/*TODO 초기화, 필터된 카테고리 수 표시*/}

        <div className="searchFilterBox">
          <FilteringCategory />
        </div>

        <div className="searchContent scroll">
          <div className="shopCount">
            <div className="filterResult">상품 142,290</div>
            <SortingResult />
          </div>

          <img src="/images/sampleImg.PNG" />
          <img src="/images/sampleImg.PNG" />
          <img src="/images/sampleImg.PNG" />
          <img src="/images/sampleImg.PNG" />
          <img src="/images/sampleImg.PNG" />
          <img src="/images/sampleImg.PNG" />
        </div>
      </div>
    </div>
  );
};

const CATEGORY_ITEMS = [
  '전체',
  '럭셔리',
  '신발',
  '가방',
  '아우터',
  '상의',
  '하의',
  '지갑',
  '시계',
  '패션잡화',
  '걸렉터블',
  '뷰티',
  '테크',
  '캠핑',
  '가구/리빙',
];

export default ProductList;
