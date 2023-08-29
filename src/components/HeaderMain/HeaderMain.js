import { CiSearch } from 'react-icons/ci';
import { useLocation, Link } from 'react-router-dom';
import './HeaderMain.scss';

const HeaderMain = () => {
  const { pathname } = useLocation();

  const isTradePath = TRADE_PATH.includes(pathname);

  return (
    <div className="headerMain">
      <h1 className="logo">KREAM</h1>
      <div className="center">{centerTitle[pathname]}</div>
      <div className="right">
        {isTradePath ? (
          <button>검수기준</button>
        ) : (
          <>
            <ul className="gnbList">
              <li className="gnbItem">HOME</li>
              <li className="gnbItem">STYLE</li>
              <li className="gnbItem">
                <Link to="/product-list" className="shopText">
                  SHOP
                </Link>
              </li>
            </ul>
            <div className="searchBtnBox">
              <CiSearch className="serarchBtn" size="27" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HeaderMain;

const TRADE_PATH = ['/size-select', '/trade-option', '/payment'];

const centerTitle = {
  '/size-select': <div className="centerTitle">구매하기</div>,
  '/trade-option': <div className="centerTitle">구매 입찰하기</div>,
  '/payment': <div className="centerTitle">배송/결제</div>,
};
