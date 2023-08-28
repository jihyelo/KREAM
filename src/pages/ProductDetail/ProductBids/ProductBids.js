import { useState } from 'react';
import DataTable from '../DataTable/DataTable';
import './ProductBids.scss';

const ProductBids = ({ detailTrade }) => {
  const [selectedTableTab, setSelectedTableTab] = useState(1);
  const [buyBidsHistory, setBuyBidsHistory] = useState();
  const [sellBidsHistory, setSellBidsHistory] = useState();

  const handlertabItem = num => {
    setSelectedTableTab(num);
    if (selectedTableTab === 2) {
      sellBidsData();
    }
    if (selectedTableTab === 3) {
      buyBidsData();
    }
  };

  const buyBidsData = () => {
    return fetch('/data/bidTableData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        return setBuyBidsHistory(data.data);
      })
      .catch(error => {
        console.error(error);
        alert('데이터 불러오기 실패');
      });
  };
  const sellBidsData = () => {
    return fetch('/data/askTableData.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터 불러오기 실패');
        }
      })
      .then(data => {
        return setSellBidsHistory(data.data);
      })
      .catch(error => {
        console.error(error);
        alert('데이터 불러오기 실패');
      });
  };

  return (
    <div className="ProductBids">
      <div className="bidsWrap">
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
