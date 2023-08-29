import SortingResult from './SortingResult/SortingResult';
import FilteringCategory from './FilteringCategory/FilteringCategory';
import fetchProductList from '../../API/fetchProductList';
import { useEffect, useState } from 'react';

import './ProductList.scss';
import SearchResultList from './SearchResultList/SearchResultList';

const ProductList = () => {
  const [productDataList, setProductDataList] = useState();
  const [checkedFilterItem, setCheckedFilterItem] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState();

  useEffect(() => {
    fetchProductList().then(data => {
      setProductDataList(data.data);
      setTotalProductCount(data.totalProductCount);
    });
  }, []);

  const postProduct = () => {
    return fetch(
      // `http://32423:3000/product/search?shop_category_id=${
      //   '스니커즈','샌들/슬리퍼',
      // }
      // &brand_name=${{ brand: 'Adidas', brand: 'Nike' }}
      // &sort=${{ sort: 'lowest_price' }}`,

      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        alert('데이터를 불러오는 데 실패했습니다');
      });
  };

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
