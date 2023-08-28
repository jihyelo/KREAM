import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="content">
          <div className="tradeImmediate">
            {/*상품정보 컴포넌트*/}
            <section className="address">
              <div className="sectionUnit">
                <dic className="sectionTitle">
                  <h3 className="titleTxt">배송 주소</h3>
                  <div className="addMore">+ 새 주소 추가</div>
                </dic>
                <div className="sectionContent">
                  <div className="deliveryInfo">
                    <div className="addressInfo">
                      <div className="infoList">
                        <div className="infoBox">
                          <dt className="title">받는 분</dt>
                          <dd className="desc">이**</dd>
                        </div>
                        <div className="infoBox">
                          <dt className="title">연락처</dt>
                          <dd className="desc">010-3***-*352</dd>
                        </div>
                        <div className="infoBox">
                          <dt className="title">배송주소</dt>
                          <dd className="desc">
                            경기도 서울특별시 서초구 삼성동 위코드
                          </dd>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sectionUnit">
                <div className="sectionTitle">
                  <h3 className="titleTxt">배송 방법</h3>
                </div>
                <div className="sectionContent">
                  <div
                    className="deliveryService Selected"
                    style={{ border: '1px solid #222' }}
                  >
                    <div className="deliveryWay">
                      <div className="wayInfo">
                        <div className="wayStatusThumb">
                          <img
                            className="wayImg"
                            src="../images/express.png"
                            alt="3,000원"
                          />
                        </div>
                        <div className="wayDesc">
                          <p className="company">
                            <span className="badgeTitle">일반배송</span>
                            <span className="title">3,000원</span>
                          </p>
                          <p className="subText">
                            검수 후 배송 . 5-7일 내 도착 예정
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="deliveryService">
                    <div className="deliveryWay">
                      <div className="wayInfo">
                        <div className="wayStatusThumb">
                          <img
                            className="wayImg"
                            src="../images/noexpress.png"
                            alt="첫 30일 무료"
                          />
                        </div>
                        <div className="wayDesc">
                          <p className="company">
                            <span className="badgeTitle">창고보관</span>
                            <span className="title">첫 30일 무료</span>
                          </p>
                          <p className="subText">
                            배송 없이 창고에 보관. 빠르게 판매 가능
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="point">
              <div className="sectionTitle">
                <h3 className="titleTxt">포인트</h3>
              </div>
              <div className="sectionContent">
                <div className="sectionInput">
                  <input className="inputCredit" placeholder="0" />
                  <button className="btnInputCredit" disabled="disablde">
                    모두 사용
                  </button>
                </div>
                <div className="infoPoint">
                  <div>
                    <span className="textCurrent">보유 포인트</span>
                    <div className="valueCurrent">
                      <span className="point">0</span>
                      <span className="unit">p</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="final">
              <div className="sectionTitle">
                <h3 className="titleTxt">최종 주문 정보</h3>
              </div>
              <div className="sectionContent">
                <div className="instantGroup">
                  <div className="priceTotal">
                    <dl className="priceBox">
                      <dt className="priceTitle">총 결제금액</dt>
                      <dd className="price">
                        <span className="amount">198,700</span>
                        <span className="unit">원</span>
                      </dd>
                    </dl>
                    <span className="priceWarning" />
                  </div>
                  <div className="priceBind">
                    <dl className="priceAddition dark">
                      <dt className="priceTitle">
                        <span>즉시 구매가</span>
                      </dt>
                      <dd className="priceText">100,000원</dd>
                    </dl>
                    <dl className="priceAddition">
                      <dt className="priceTitle">
                        <span>포인트</span>
                      </dt>
                      <dd className="priceText">-</dd>
                    </dl>
                    <dl className="priceAddition">
                      <dt className="priceTitle">
                        <span>검수비</span>
                      </dt>
                      <dd className="priceText">무료</dd>
                    </dl>
                    <dl className="priceAddition">
                      <dt className="priceTitle">
                        <span>수수료</span>
                      </dt>
                      <dd className="priceText">5,700원</dd>
                    </dl>
                    <dl className="priceAddition">
                      <dt className="priceTitle">
                        <span>배송비</span>
                      </dt>
                      <dd className="priceText">3000원</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            <div className="tradeTotal">
              <div className="priceTotal">
                <dl className="priceBox">
                  <dt className="priceTitle">총 결제금액</dt>
                  <dd className="price">
                    <span className="amount">100,000</span>
                    <span className="unit">원</span>
                  </dd>
                </dl>
                <span className="priceWarning" />
              </div>
              <div className="btnConfirm">
                <button className="btnTotal" disabled="disabled">
                  결제하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
