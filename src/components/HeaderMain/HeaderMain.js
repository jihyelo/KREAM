import { CiSearch } from 'react-icons/ci';
import { useLocation } from 'react-router-dom';
import './HeaderMain.scss';
const right = (
  <>
    <ul className="gnbList">
      <li className="gnbItem">HOME</li>
      <li className="gnbItem">STYLE</li>
      <li className="gnbItem">
        <a gref="/product-list">SHOP</a>
      </li>
    </ul>
    <div className="searchBtnBox">
      <CiSearch className="serarchBtn" size="27" />
    </div>
  </>
);
const productInspectionButton = <button>검수기준</button>;
const HeaderMain = () => {
  const location = useLocation();

  const centerTitle = {
    '/size-selet': <div>구매하기</div>,
    '/trade-option': <div>구매 입찰하기</div>,
    '/payment': <div>배송/결제</div>,
  };

  const rightContent = {
    '/sign-up': right,
    '/login': right,
    '/': right,
    '/product-list': right,
    '/product-detail': right,
    '/size-selet': productInspectionButton,
    '/trade-option': productInspectionButton,
    '/payment': productInspectionButton,
  };
  return (
    <div className="headerMain">
      <h1 className="logo">KREAM</h1>
      <div className="center">{centerTitle[location.pathname]}</div>
      <div className="right">{rightContent[location.pathname]}</div>
    </div>
  );
};
export default HeaderMain;
