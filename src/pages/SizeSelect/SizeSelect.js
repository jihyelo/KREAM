import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import SelectItem from '../../components/SelectItem/SelectItem';
import './SizeSelect.scss';

const SizeSelect = () => {
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
                shippingExpress={productData.shippingExpress}
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
                          bid={item.bid}
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
                    <ul className="tradeButtons">
                      <li className="tradeButton">
                        <button
                          className="tradeNow"
                          onClick={() => {
                            navigate('/trade-option');
                          }}
                        >
                          <p className="tradePrice">{selectedSizeInfo.price}</p>
                          <p className="tradeEspress fast">빠른 배송</p>
                        </button>
                      </li>
                      <li className="tradeButton">
                        <button
                          className="tradeBid"
                          onClick={() => {
                            navigate('/trade-option', { state: productData });
                          }}
                        >
                          <p className="tradePrice">100000</p>
                          <p className="tradeEspress">일반 배송</p>
                        </button>
                      </li>
                    </ul>
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
