import { useState } from 'react';
import DataTable from '../DataTable/DataTable';
import './ProductBids.scss';

const ProductBids = ({ detailTrade }) => {
  const [selectedTableTab, setSelectedTableTab] = useState();
  const tradeOnClick = () => {
    return {};
  };
  const sellBidsOnClick = () => {
    return {};
  };
  const buyBidsOnClick = () => {
    return {};
  };
  return (
    <div className="ProductBids">
      <div className="bidsWrap">
        <div className="tabList">
          <div className="tabItem">
            <div className="tabItemText" onClick={tradeOnClick}>
              체결 거래
            </div>
          </div>
          <div className="tabItem" onClick={sellBidsOnClick}>
            <div className="tabItemText">판매 입찰</div>
          </div>
          <div className="tabItem" onClick={buyBidsOnClick}>
            <div className="tabItemText">구매 입찰</div>
          </div>
        </div>
        <div className="tabContent">
          <div className="tableWrap">
            <DataTable tradeHeaders={tradeHeaders} items={detailTrade} />
          </div>
          <button className="moreDataButton">체결 내역 더보기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductBids;

const askHeaders = [
  { text: '사이즈', value: 'size' },
  { text: '판매 희망가', value: 'sellTargetPrice' },
  { text: '수량', value: 'amount' },
];

const tradeHeaders = [
  { text: '사이즈', value: 'size', className: 'tableTh' },
  { text: '거래가', value: 'tradePrice', className: 'tableThRight' },
  { text: '거래일', value: 'tradeDate', className: 'tableThRight' },
];

const bidHeaders = [
  { text: '사이즈', value: 'size' },
  { text: '구매 희망가', value: 'buyTargetPrice' },
  { text: '수량', value: 'amount' },
];
