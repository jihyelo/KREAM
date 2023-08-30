import SortingResult from './SortingResult/SortingResult';
import FilteringCategory from './FilteringCategory/FilteringCategory';
import getProductList from '../../API/getProductList';
import { useEffect, useState } from 'react';

import './ProductList.scss';
import SearchResultList from './SearchResultList/SearchResultList';

const ProductList = () => {
  const [productDataList, setProductDataList] = useState([]);
  const [checkedFilterItem, setCheckedFilterItem] = useState([]);
  const [brandFilterItem, setBrandFilterItem] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);
  const [moreButtonClickCount, setMoreButtonClickCount] = useState(1);
  // const [loading, setLoding] = useState(false);

  useEffect(() => {
    // const categoryQuery = `&category=${checkedFilterItem.join(',')}`;
    getProductList().then(data => {
      setProductDataList(data.data);
      setTotalProductCount(data.length);
    });
  }, []);

  useEffect(() => {
    const categoryQuery = checkedFilterItem.map(x => `"${x}"`).join(',');
    // const brandQuery = checkedFilterItem.map(x => `"${x}"`).join(',');

    console.log(categoryQuery);
    fetch(
      `http://10.58.52.69:3000/product/list?limit=8&offset=1&category=${categoryQuery}`,
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

          // setLoding(false);
        } else {
          throw new Error('데이터를 불러오는 데 실패했습니다.');
        }
      })
      .then(data => {
        setProductDataList(data.data);
        setTotalProductCount(data.length);
      })
      .catch(error => {
        alert('데이터를 불러오는 데 실패했습니다');
      });
  }, [moreButtonClickCount, checkedFilterItem]);

  // const onClickMoreButton = () => setLoding(true);
  const onCliktMoreProduct = () => setMoreButtonClickCount(prev => (prev += 1));
  const MoreButton = () => {
    return <button onClick={onCliktMoreProduct}>더보기</button>;
  };
  // const LoadingText = () => {
  //   return <div>로딩중입니다..!!</div>;
  // };
  // const categoryQuery = checkedFilterItem.join(',');
  // console.log(categoryQuery);
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
            brandFilterItem={brandFilterItem}
            setBrandFilterItem={setBrandFilterItem}
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
