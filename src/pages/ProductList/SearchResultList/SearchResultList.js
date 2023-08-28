import ProductCard from '../ProductCard/ProductCard';
import './SearchResultList.scss';

const SearchResultList = ({ productDataList, setProductDataList }) => {
  return (
    <div className="searchResultList">
      {productDataList?.map(data => (
        <ProductCard
          key={data.productId}
          productId={data.productId}
          brand={data.brand}
          engName={data.engName}
          byNowPrice={data.byNowPrice}
          image={data.image}
          serialNum={data.serialNum}
          color={data.color}
          price={data.price}
          releaseData={data.releaseData}
        />
      ))}
    </div>
  );
};
export default SearchResultList;
