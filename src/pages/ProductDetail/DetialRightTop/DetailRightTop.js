import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SizeSelectModal from '../../SignUp/SizeSelectModal/SizeSelectModal';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { RxBookmark } from 'react-icons/rx';
import { BiSolidUpArrow } from 'react-icons/bi';
import './DetailRightTop.scss';

const DetailRightTop = ({
  brand,
  name,
  recentTrade,
  sellPrice,
  buyPrice,
  sizePrice,
  productId,
  checkTokenExists,
  handleTokenNotFound,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizePriceData = {};

  sizePrice.forEach(item => {
    const sizeType = item.sizeType;
    const priceData = item.priceData;

    sizePriceData[sizeType] = priceData;
  });

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectSize = size => {
    setSelectedSize(size);
    handleCloseModal();
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const SELL_BUY_BUTTON_DATA = [
    {
      title: '구매',
      num: selectedSize
        ? `${sizePriceData[selectedSize]?.buyNowPrice || '0'}`
        : sellPrice,
      won: '원',
      nowPrice: '즉시 구매가',
      className: 'redButton',
      onClickBuySell: () =>
        navigate(`/purchase-size/${productId}?type=purchase`),
    },
    {
      title: '판매',
      num: selectedSize
        ? `${sizePriceData[selectedSize]?.sellNowPrice || '0'}`
        : buyPrice,
      won: '원',
      nowPrice: '즉시 판매가',
      className: 'greenButton',
      onClickBuySell: () => {
        return navigate(`/sell-size/${productId}?type=sell`);
      },
    },
  ];

  const recentPrice = sizePriceData
    ? Object.values(sizePriceData).map(price => price.latestPrice)
    : [];

  return (
    <div className="detailRightTop">
      <div className="detailMainTitleBox">
        <div className="brand">{brand}</div>
        <div className="name">{name}</div>
      </div>
      <div className="productFigureWrap">
        <div className="detailSize">
          <div className="title">사이즈</div>
          <div className="sizeButton" onClick={handleOpenModal}>
            <div className="sizeButtonText" onClick={checkTokenExists}>
              {' '}
              {selectedSize ? selectedSize : '모든 사이즈'}
            </div>
            <IoMdArrowDropdownCircle className="dropDownIcon" />
          </div>

          {/*TODO 모달창 외부영역 클릭시 모달창 닫히기*/}
        </div>
        <SizeSelectModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSelectSize={handleSelectSize}
          latestPrice={recentPrice}
          sizes={sizePriceData ? Object.keys(sizePriceData) : []}
          sizePriceData={sizePriceData}
        />

        <div className="detailPrice">
          <div className="title">최근 거래가</div>
          <div className="price">
            <div className="recentPrice">
              <div className="num">
                {selectedSize
                  ? `${sizePriceData[selectedSize]?.latestPrice || '0'}`
                  : recentTrade}
              </div>
              <div className="won">원</div>
            </div>
            <div className="functionIncrease">
              <BiSolidUpArrow /> 51,000원 (+16.6%)
            </div>
          </div>
        </div>
      </div>
      <div className="buttonWrap">
        <div className="divisionButtonBox">
          {SELL_BUY_BUTTON_DATA.map((data, index) => (
            <SellBuyButton
              key={index}
              title={data.title}
              num={data.num}
              won={data.won}
              nowPrice={data.nowPrice}
              className={data.className}
              productId={productId}
              onClick={
                localStorage.getItem('TOKEN')
                  ? data.onClickBuySell
                  : handleTokenNotFound
              }
            />
          ))}
        </div>
        <button className="wishButton">
          <RxBookmark />
          <div className="wishButtonText">관심상품</div>
          <div className="wishCountNum">4만</div>
        </button>
      </div>
    </div>
  );
};

const SellBuyButton = ({ title, num, won, nowPrice, className, onClick }) => {
  return (
    <button className={`sellBuyButton ${className}`} onClick={onClick}>
      <div className="title">{title}</div>
      <div className="priceWrap">
        <div className="price">
          <div className="amount">
            <div className="num">{num}</div>
            <div className="won">{won}</div>
          </div>
        </div>
        <div className="line" />
        <div className="nowPrice">{nowPrice}</div>
      </div>
    </button>
  );
};

export default DetailRightTop;
