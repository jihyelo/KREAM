import './Footer.scss';

const INSTRUCTIONS = [
  '검수기준',
  '이용정책',
  '패널티 정책',
  '커뮤니티 가이드라인',
];

const CUSTOMER_INFO = [
  '공지사항',
  '서비스 소개',
  '스토어 안내',
  '판매자 방문접수',
];
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerInner">
        <div className="serviceArea">
          <div className="customerService">
            <div className="serviceTitle">
              고객센터
              <span className="serviceTel">1588-7813</span>
            </div>
            <div className="serviceTime">
              <dl className="timeBox">
                <dt className="timeTerm">
                  운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무)
                  <br />
                  점심시간 평일 13:00 - 14:00
                </dt>
              </dl>
            </div>
            <p className="serviceNoti">1:1 문의하기는 앱에서만 가능합니다.</p>
            <div className="serviceBtnBox">
              <span className="small">자주 묻는 질문</span>
            </div>
          </div>
          <div className="footerMenu">
            <div className="menuBox">
              <div className="menuTitle">
                이용안내
                <ul className="menuList">
                  {INSTRUCTIONS.map(instruction => {
                    return (
                      <li className="menuItem" key={instruction}>
                        <span className="menuLink">{instruction}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="menuBox">
              <div className="menuTitle">
                고객지원
                <ul className="menuList">
                  {CUSTOMER_INFO.map(customer => (
                    <li className="menuItem" key={customer}>
                      <span className="menuLink">{customer}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="corporationArea">
          <ul className="termList">
            <li className="termItem">
              <span className="termLink">회사소개</span>
            </li>
            <li className="termItem">
              <span className="termLink">인재채용</span>
            </li>
            <li className="termItem">
              <span className="termLink">제휴제안</span>
            </li>
            <li className="termItem">
              <span className="termLink">이용약관</span>
            </li>
            <li className="termItem privacy">
              <span className="termLink bold">개인정보처리방침</span>
            </li>
          </ul>
          <div className="footerSns">
            <div className="snsBox">
              <span className="sns"> 인스타그램 </span>
              <span className="sns"> 페이스북 </span>
              <span className="sns"> 카카오톡 </span>
            </div>
            <div className="btnBusiness" />
          </div>
          <div className="businessInfo">
            <div className="infoList">
              <dl className="infoItem">
                <dt className="businessTitle">
                  크림 주식회사 · 대표 김창욱
                  <span className="blank" />
                  사업자등록번호 : 570-88-01618
                  <span className="blank" />
                  <span className="linkGuarantee">사업자정보확인</span>
                  <span className="blank" />
                  통신판매업 : 제 2021-성남분당C-0093호
                  <span className="blank" />
                  사업장소재지 : 경기도 성남시 분당구 분당내곡로 131 판교테크원
                  타워1, 8층
                  <span className="blank" />
                  호스팅 서비스 : 네이버 클라우드 ㈜
                </dt>
              </dl>
            </div>
          </div>
        </div>
        <div className="noticeGuarantee">
          <p className="title">신한은행 채무지급보증 안내</p>
          <p className="description">
            당사는 고객님의 현금 결제 금액에 대해 신한은행과 채무지급보증 계약을
            체결하여 안전거래를 보장하고 있습니다.
            <span>서비스가입 사실 확인</span>
          </p>
        </div>
        <div className="noticeArea">
          <p className="notice">
            크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본
            상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한
            의무와 책임은 각 판매자에게 있습니다. 단, 이용약관 및 정책, 기타
            거래 체결 과정에서 고지하는 내용 등에 따라 검수하고 보증하는 내용에
            대한 책임은 크림(주)에 있습니다.
          </p>
          <p className="copyright">ⓒKREAM Corp.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
