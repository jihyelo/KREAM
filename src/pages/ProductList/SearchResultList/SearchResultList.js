import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './SearchResultList.scss';

const SearchResultList = ({ productDataList }) => {
  return (
    <div className="searchResultList">
      {productDataList.map(data => {
        return (
          <Link
            key={data.productId}
            to={`/product-detail/${data.productId}`}
            className="linkTag"
          >
            <ProductCard
              productId={data.productId}
              brand={data.brand}
              engName={data.name}
              image={data.url}
              price={data.price}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default SearchResultList;
