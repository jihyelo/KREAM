import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import SelectItem from '../../components/SelectItem/SelectItem';
import './SizeSelect.scss';

const SizeSelect = () => {
  const [isProduct, setIsProduct] = useState([]);
  const [isSizeSelect, setIsSizeSelect] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/productData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setIsProduct(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/sizeSelectData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setIsSizeSelect(data);
      });
  }, []);

  return (
    <div className="sizeSelect">
      <HeaderTop />
      <HeaderMain />
      <div className="container">
        <div className="contentArea">
          <div className="tradeBefore">
            <div className="tradeBeforeCheck">
              {isProduct.map(info => {
                return (
                  <ProductInfo
                    key={info.key}
                    code={info.code}
                    name={info.name}
                    translatedName={info.translatedName}
                    shippingExpress={info.shippingExpress}
                  />
                );
              })}

              <div className="tradeBeforeSelect">
                <div className="selectAreaMd">
                  <ul className="selectList">
                    {isSizeSelect.map(item => {
                      return (
                        <SelectItem
                          key={item.key}
                          size={item.size}
                          price={item.price}
                          bid={item.bid}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="tradeBtnArea">
                  <ul className="tradeButtons">
                    <li className="tradeButton">
                      <button
                        className="tradeNow"
                        onClick={() => {
                          navigate('/trade-option');
                        }}
                      >
                        <p className="tradePrice">100000</p>
                        <p className="tradeEspress fast">빠른 배송</p>
                      </button>
                    </li>
                    <li className="tradeButton">
                      <button
                        className="tradeBid"
                        onClick={() => {
                          navigate('/trade-option');
                        }}
                      >
                        <p className="tradePrice">100000</p>
                        <p className="tradeEspress">일반 배송</p>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SizeSelect;
