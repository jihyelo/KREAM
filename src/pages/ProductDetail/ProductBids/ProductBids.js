import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataTable from '../DataTable/DataTable';
import buyBidsHistoryData from '../../../API/buyBidsHistoryData';
import sellBidsHistoryData from '../../../API/sellBidsHistoryData';
import './ProductBids.scss';

const ProductBids = ({ detailTrade }) => {
  const [selectedTableTab, setSelectedTableTab] = useState(1);
  const [buyBidsHistory, setBuyBidsHistory] = useState();
  const [sellBidsHistory, setSellBidsHistory] = useState();

  const handlertabItem = num => {
    setSelectedTableTab(num);
  };

  useEffect(() => {
    buyBidsHistoryData().then(data => {
      setBuyBidsHistory(data);
    });
    sellBidsHistoryData().then(data => {
      setSellBidsHistory(data);
    });
  }, []);

  return (
    <div className="ProductBids">
      <div className="bidsWrap">
        {localStorage.getItem('TOKEN') ? null : (
          <div className="layerAlertLogin">
            <div className="alertContent">
              <div className="notice">
                모든 체결 거래는 {<br />}로그인 후 확인 가능합니다
              </div>
              <Link to="/login" className="loginButton">
                로그인
              </Link>
            </div>
          </div>
        )}
        <div className="tradeTitle">시세</div>
        <div className="tabList">
          <div className="tabItem" onClick={() => handlertabItem(1)}>
            <div
              className={`${selectedTableTab === 1 ? 'on' : ''} tabItemText `}
            >
              체결 거래
            </div>
          </div>
          <div className="tabItem" onClick={() => handlertabItem(2)}>
            <div
              className={`${selectedTableTab === 2 ? 'on' : ''} tabItemText `}
            >
              판매 입찰
            </div>
          </div>
          <div className="tabItem" onClick={() => handlertabItem(3)}>
            <div
              className={` ${selectedTableTab === 3 ? 'on' : ''} tabItemText`}
            >
              구매 입찰
            </div>
          </div>
        </div>
        <div className="tabContent">
          <div className="tableWrap">
            {selectedTableTab === 1 ? (
              <TradeHistory detailTrade={detailTrade} />
            ) : null}
            {selectedTableTab === 2 ? (
              <SellBidsHistory detailTrade={sellBidsHistory} />
            ) : null}
            {selectedTableTab === 3 ? (
              <BuyBidsHistory detailTrade={buyBidsHistory} />
            ) : null}
          </div>
          <button className="moreDataButton">
            {selectedTableTab !== 1 ? '입찰 내역 더보기' : '채결 내역 더보기'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductBids;

const BuyBidsHistory = ({ detailTrade }) => {
  return <DataTable Headers={bidHeaders} items={detailTrade} />;
};

const SellBidsHistory = ({ detailTrade }) => {
  return <DataTable Headers={askHeaders} items={detailTrade} />;
};

const TradeHistory = ({ detailTrade }) => {
  return <DataTable Headers={tradeHeaders} items={detailTrade} />;
};

const askHeaders = [
  { text: '사이즈', value: 'size', className: 'tableTh' },
  { text: '판매 희망가', value: 'sellTargetPrice', className: 'tableThRight' },
  { text: '수량', value: 'amount', className: 'tableThRight' },
];

const tradeHeaders = [
  { text: '사이즈', value: 'size', className: 'tableTh' },
  { text: '거래가', value: 'tradePrice', className: 'tableThRight' },
  { text: '거래일', value: 'tradeDate', className: 'tableThRight' },
];

const bidHeaders = [
  { text: '사이즈', value: 'size', className: 'tableTh' },
  { text: '구매 희망가', value: 'buyTargetPrice', className: 'tableThRight' },
  { text: '수량', value: 'amount', className: 'tableThRight' },
];
