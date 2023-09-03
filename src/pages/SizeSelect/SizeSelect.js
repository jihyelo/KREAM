import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import SelectItem from '../../components/SelectItem/SelectItem';
import './SizeSelect.scss';
const SizeSelect = ({ isPurchaseSize }) => {
  const [productData, setProductData] = useState([]);
  const [sizeSelectList, setSizeSelectList] = useState([]);
  const [selectedSizeInfo, setSelectedSizeInfo] = useState({});
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type');
  const params = useParams();
  const productId = params.productId;

  useEffect(() => {
    if (type === 'sell') {
      fetch(`http://10.58.52.238:3000/sell/${productId}?size=`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('TOKEN'),
        },
      })
        .then(res => res.json())
        .then(data => {
          setProductData(data.data[0]);
          setSizeSelectList(data.data);
        });
    } else {
      fetch(`http://10.58.52.238:3000/buy/${productId}?size=`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          authorization: localStorage.getItem('TOKEN'),
        },
      })
        .then(res => res.json())
        .then(data => {
          setProductData(data.data[0]);
          setSizeSelectList(data.data);
        });
    }
  }, []);

  const requestSize = selectedSizeInfo.size;
  const sizeSelectedClick = () => {
    navigate(
      isPurchaseSize
        ? `/purchase-option/${productId}/${requestSize}`
        : `/sell-option/${productId}/${requestSize}`,
    );
  };

  return (
    <div className="sizeSelect">
      <div className="container">
        <div className="contentArea">
          <div className="tradeBefore">
            <div className="tradeBeforeCheck">
              <ProductInfo
                key={productData.id}
                url={productData.url}
                serialNumber={productData.serialNumber}
                name={productData.name}
                price={productData.price}
              />
              <div className="tradeBeforeSelect">
                <div className="selectAreaMd">
                  <ul className="selectList">
                    {sizeSelectList.map(item => {
                      return (
                        <SelectItem
                          key={item.id}
                          size={item.size}
                          price={item.price}
                          isPurchaseSize={isPurchaseSize}
                          isSelected={item.size === selectedSizeInfo.size}
                          handleClick={() =>
                            setSelectedSizeInfo({
                              size: item.size,
                              price: item.price,
                            })
                          }
                        />
                      );
                    })}
                  </ul>
                </div>
                {Object.keys(selectedSizeInfo).length !== 0 && (
                  <div className="tradeBtnArea">
                    {selectedSizeInfo.price !== null ? (
                      <ul className="tradeButtons">
                        <li className="tradeButton">
                          <button
                            className={isPurchaseSize ? 'tradeNow' : 'green'}
                            onClick={sizeSelectedClick}
                          >
                            <p className="tradePrice">
                              {isPurchaseSize
                                ? Number(
                                    selectedSizeInfo.price,
                                  ).toLocaleString()
                                : '보관신청'}
                            </p>
                            <p className="tradeExpress fast">
                              {isPurchaseSize
                                ? '빠른 배송(1-2일 소요)'
                                : '선불발송'}
                            </p>
                          </button>
                        </li>
                        <li className="tradeButton">
                          <button
                            className="tradeBid"
                            onClick={sizeSelectedClick}
                          >
                            <p className="tradePrice">
                              {Number(selectedSizeInfo.price).toLocaleString()}
                            </p>
                            <p className="tradeExpress">
                              {isPurchaseSize
                                ? '일반 배송(5-7일 소요)'
                                : '선불발송'}
                            </p>
                          </button>
                        </li>
                      </ul>
                    ) : (
                      <ul className="tradeButtons">
                        <li className="tradeButton">
                          <button
                            className="tradeBid"
                            onClick={sizeSelectedClick}
                          >
                            <p className="tradePrice">
                              {isPurchaseSize ? '구매' : '판매'} 입찰
                            </p>
                            <p className="tradeExpress">
                              {isPurchaseSize
                                ? '일반 배송(5-7일 소요)'
                                : '선불발송'}
                            </p>
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SizeSelect;
