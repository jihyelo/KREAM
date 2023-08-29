import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import './SearchResultList.scss';

const SearchResultList = ({ productDataList, setProductDataList }) => {
  return (
    <div className="searchResultList">
      {productDataList?.map(data => (
        <Link
          key={data.productId}
          to={`/propduct-detail/${data.productId}`}
          className="linkTag"
        >
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
        </Link>
      ))}
    </div>
  );
};
export default SearchResultList;
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
