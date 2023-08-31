import SortingResult from './SortingResult/SortingResult';
import FilteringCategory from './FilteringCategory/FilteringCategory';
import { useEffect, useState } from 'react';

import './ProductList.scss';
import SearchResultList from './SearchResultList/SearchResultList';

const ProductList = () => {
  const [productDataList, setProductDataList] = useState([]);
  const [categoryFilterItem, setcategoryFilterItem] = useState([]);
  const [brandFilterItem, setBrandFilterItem] = useState([]);
  const [moreButtonClickCount, setMoreButtonClickCount] = useState(1);

  const [sortingItem, setSortingItem] = useState();

  const categoryQuery =
    categoryFilterItem.length !== 0
      ? `&category=${categoryFilterItem.map(x => `"${x}"`).join(',')}`
      : '';
  const brandQuery =
    brandFilterItem.length !== 0
      ? `&brand=${brandFilterItem.map(x => `"${x}"`).join(',')}`
      : '';
  const countIndexQuery = sortingItem !== 0 ? `&sortBy=${sortingItem}` : '';

  useEffect(() => {
    fetch(
      `http://10.58.52.69:3000/product/list?limit=8&offset=${moreButtonClickCount}${categoryQuery}${brandQuery}${countIndexQuery}`,
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
        setProductDataList([...productDataList, ...data.data]);
      })
      .catch(error => {
        alert('데이터를 불러오는 데 실패했습니다');
      });
  }, [moreButtonClickCount]);

  useEffect(() => {
    fetch(
      `http://10.58.52.69:3000/product/list?limit=8&offset=1${categoryQuery}${brandQuery}${countIndexQuery}`,
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
        setProductDataList(data.data);
        setMoreButtonClickCount(1);
      })
      .catch(error => {
        alert('데이터를 불러오는 데 실패했습니다');
      });
  }, [categoryFilterItem, brandFilterItem, countIndexQuery]);

  const onCliktMoreProduct = () => setMoreButtonClickCount(prev => prev + 1);
  const MoreButton = () => {
    return <button onClick={onCliktMoreProduct}>더보기</button>;
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
            categoryFilterItem={categoryFilterItem}
            setcategoryFilterItem={setcategoryFilterItem}
            brandFilterItem={brandFilterItem}
            setBrandFilterItem={setBrandFilterItem}
          />
        </div>

        <div className="searchContent scroll">
          <div className="shopCount">
            <div className="filterResult">상품{productDataList.length}</div>
            <SortingResult
              sortingItem={sortingItem}
              setSortingItem={setSortingItem}
            />
          </div>

          <SearchResultList
            productDataList={productDataList}
            setProductDataList={setProductDataList}
          />
          <MoreButton />
          {/* {loading == true ? <LoadingText /> : null} */}
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
