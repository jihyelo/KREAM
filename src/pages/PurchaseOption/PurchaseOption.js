import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import BidDeadline from '../../components/BidDeadline/BidDeadline';
import './PurchaseOption.scss';

const PurchaseOption = () => {
  const navigate = useNavigate();
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div className="purchaseOption">
      <div className="container">
        <div className="contentArea">
          <div className="tradeBefore">
            <div class="productInfoArea">
              <ProductInfo />
            </div>
            <div className="priceDescisionBox">
              <ul className="priceList">
                <li className="listItem">
                  <p className="title">즉시 구매가</p>
                  <p className="price">100,000</p>
                  <p className="unit">원</p>
                </li>
                <li className="listItem">
                  <p className="title">즉시 구매가</p>
                  <p className="price">100,000</p>
                  <p className="unit">원</p>
                </li>
              </ul>
              <div className="instantGroup">
                <div className="tabArea">
                  <ul className="tabList">
                    <li
                      onClick={() => {
                        setIsToggled(false);
                      }}
                      className={!isToggled ? 'on item' : 'item'}
                    >
                      <button className="itemLink">구매 입찰</button>
                    </li>

                    <li
                      onClick={() => {
                        setIsToggled(true);
                      }}
                      className={isToggled ? 'on item' : 'item'}
                    >
                      <button className="itemLink ">즉시 구매</button>
                    </li>
                  </ul>
                </div>

                {isToggled ? (
                  <div className="priceNow">
                    <dl className="priceNowBox">
                      <dt className="priceNowTitle">즉시 구매가</dt>
                      <dd className="price">
                        <span className="amount">100,000</span>
                        <span className="unit">원</span>
                      </dd>
                    </dl>
                    <div className="priceWarning" />
                  </div>
                ) : (
                  <div className="priceNow">
                    <dl className="priceNowBox">
                      <dt className="priceNowTitle">구매 희망가</dt>
                      <dd className="price">
                        <input
                          className="inputAmount"
                          type="number"
                          placeholder="희망가 입력"
                        />
                        <span className="unit">원</span>
                      </dd>
                    </dl>
                    <div className="priceWarning" />
                  </div>
                )}
                <div className="priceBlind">
                  <p className="priceBlindEmpty">
                    총 결제금액은 다음 화면에서 계산됩니다.
                  </p>
                </div>
              </div>
            </div>
            {isToggled ? '' : <BidDeadline />}
            <div className="totalConfirm">
              <div className="priceTotal">
                <dl className="priceBox">
                  <dt className="priceTitle">총 결제금액</dt>
                  <dd className="priceEmptyDesc">다음 화면에서 확인</dd>
                </dl>
                <span className="priceWarning" />
              </div>
              {isToggled ? (
                <div className="btnConfirm">
                  <button
                    className="nextBtn"
                    onClick={() => {
                      navigate('/payment');
                    }}
                  >
                    즉시 구매 계속
                  </button>
                </div>
              ) : (
                <div className="btnConfirm">
                  <button
                    className="nextBtn disabled"
                    onClick={() => {
                      navigate('/payment');
                    }}
                    disabled
                  >
                    구매 입찰 계속
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurchaseOption;
