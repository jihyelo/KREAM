import SortingResult from './SortingResult/SortingResult';
import FilteringCategory from './FilteringCategory/FilteringCategory';
import getProductList from '../../API/getProductList';
import { useEffect, useState } from 'react';

import './ProductList.scss';
import SearchResultList from './SearchResultList/SearchResultList';

const ProductList = () => {
  const [productDataList, setProductDataList] = useState();
  const [checkedFilterItem, setCheckedFilterItem] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState();

  useEffect(() => {
    getProductList().then(data => {
      setProductDataList(data.data);
      setTotalProductCount(data.totalProductCount);
    });
  }, []);

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
        <div className="searchFilterBox">
          <FilteringCategory
            checkedFilterItem={checkedFilterItem}
            setCheckedFilterItem={setCheckedFilterItem}
          />
        </div>

        <div className="searchContent scroll">
          <div className="shopCount">
            <div className="filterResult">상품{totalProductCount}</div>
            <SortingResult />
          </div>

          <SearchResultList
            productDataList={productDataList}
            setProductDataList={setProductDataList}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

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
