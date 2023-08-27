import { HiArrowRight } from 'react-icons/hi';
import './DetailLeftBox.scss';

const DetailLeftBox = () => {
  return (
    <div className="detailLeftBox">
      <div className="columnBox">
        <img src="/images/samba.PNG" />
        <div className="bannerAlert">
          <div className="alertWrap">
            <div className="bannerAlertContent">
              <div className="alertTitle">
                <div className="careMark">주의</div>
                <div className="alertText">판매 거래 주의사항</div>
              </div>
              <div className="alertSubtext">
                반드시 보유한 상품만 판매하세요.
              </div>
            </div>
            <div className="arrowIcon">
              <HiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailLeftBox;
