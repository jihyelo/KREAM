import React from 'react';
import './TradeOption.scss';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import Footer from '../../components/Footer/Footer';

const TradeOption = () => {
  return (
    <div className="tradeOption">
      <HeaderTop />
      <HeaderMain />
      <div className="container">
        <div className="content">
          <div className="tradeImmediate">
            {/*상품정보 컴포넌트*/}
            <section>
              <div className="sectionUnit">
                <dic className="sectionTitle">
                  <h3 className="titleTxt">배송 주소</h3>
                  <div className="addMore">+ 새 주소 추가</div>
                </dic>
                <div className="ssectionContent">
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
                    <div className="smallBtn">변경</div>
                  </div>
                  <div className="request">
                    <div className="buttonShippingMemo">
                      <button className="buttonShippingMemo">
                        <span className="upDateMemo">요청사항 없음</span>
                        {/* svg data 화살표 ico */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sectionUnit">
                <div className="sectionTitle">
                  <h3 className="titleTxt">배송 방법</h3>
                </div>
                <div className="sectionContent">
                  <div className="deliveryServiceSelected">
                    <div className="deliveryWay">
                      <div className="wayInfo">
                        <div className="wayStatusThumb">
                          <img className="wayImg" alt="3,000원" />
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
                  <div className="delivertService">
                    <div className="deliveryWay">
                      <div className="wayInfo">
                        <div className="wayStatusThumb">
                          <img className="wayImg" alt="첫 30일 무료" />
                        </div>
                        <div className="wayDesc">
                          <p className="company">
                            <span className="badgeTitle">창고보관</span>
                            <span className="title">첫 30일 무료</span>
                            <span>{/* svg 이미지*/}</span>
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
            <section>
              <div className="sectionTitle">
                <h3 className="titleTxt">포인트</h3>
              </div>
              <div className="sectionContent">
                <div className="section input">
                  <input
                    className="inputCredit"
                    disabled="disabled"
                    placeholder="0"
                  />
                  <button className="btnInputCredit disablde">모두 사용</button>
                </div>
                <div className="infoPoint">
                  <div>
                    <span className="textCurrent">보유 포인트</span>
                    <button className="btnQuestion">{/*svg ico */}</button>
                    <div className="valueCurrent">
                      <span className="point">0</span>
                      <span className="unit">p</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
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
            <section>
              <div className="sectionTitle">
                <h3 className="titleTxt">결제 방법</h3>
              </div>
              <div className="sectionContent">
                <div className="paymentSection paymentSectonFirst">
                  <h4 className="methodTitle">
                    <div className="mainTitle">
                      <p>계좌 간편결제</p>
                      <span className="subTitle"></span>
                      <span className="sectionTag">결제 시 포인트 적립</span>
                    </div>
                  </h4>
                  <div>
                    <div className="quickPayInfo">
                      <div className="paymentDetail">
                        <div className="paumentItem">
                          <div className="infoWrap">
                            <div className="registLink">계좌를 등록하세요</div>
                          </div>
                          <div className="description">
                            <span>
                              첫 등록시
                              <span className="bold">3,000P</span>
                            </span>
                            {/*svg ico */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vPortal"></div>
            </section>
            <section />
            <section />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default TradeOption;
