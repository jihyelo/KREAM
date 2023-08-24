import './ProductList.scss';

const categoryItems = [
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
const ProductList = () => {
  return (
    <div className="productList">
      <div className="searchTitle">
        <div className="titleText">SHOP</div>
      </div>
      <div className="category">
        {categoryItems?.map(item => (
          <div className="categoryItem">{item}</div>
        ))}
      </div>
      <div className="trendContainer">
        <img src="/images/trendViewport.PNG" />
      </div>
      <div className="content">{/* <div className="" */}</div>
    </div>
  );
};
export default ProductList;
