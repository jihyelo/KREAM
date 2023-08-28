import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import SelectItem from '../../components/SelectItem/SelectItem';
import './SizeSelect.scss';

const SizeSelect = ({ isPurchaseSize }) => {
  const [productData, setProductData] = useState({});
  const [sizeSelectList, setSizeSelectList] = useState([]);
  const [selectedSizeInfo, setSelectedSizeInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductData(data[0]);
      });
  }, []);

  useEffect(() => {
    fetch('/data/sizeSelectData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setSizeSelectList(data);
      });
  }, []);

  return (
    <div className="sizeSelect">
      <div className="container">
        <div className="contentArea">
          <div className="tradeBefore">
            <div className="tradeBeforeCheck">
              <ProductInfo
                key={productData.id}
                src={productData.src}
                code={productData.code}
                name={productData.name}
                translatedName={productData.translatedName}
                shippingExpress="빠른배송"
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
                            onClick={() => {
                              navigate(
                                isPurchaseSize
                                  ? '/purchase-option'
                                  : '/sell-option',
                              );
                            }}
                          >
                            <p className="tradePrice">
                              {isPurchaseSize
                                ? '{selectedSizeInfo.price}'
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
                            onClick={() => {
                              navigate(
                                isPurchaseSize
                                  ? '/purchase-option'
                                  : '/sell-option',
                                { state: productData },
                              );
                            }}
                          >
                            <p className="tradePrice">
                              {selectedSizeInfo.price}
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
                            onClick={() => {
                              navigate(
                                isPurchaseSize
                                  ? '/purchase-option'
                                  : '/sell-option',
                                { state: productData },
                              );
                            }}
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
