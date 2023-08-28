import React from 'react';
import './BidDeadline.scss';

const BidDeadline = () => {
  return (
    <div className="deadlineInfoArea">
      <div className="sectionTitle">
        <h3 className="titleTxt">입찰 마감기한</h3>
      </div>
      <div className="sectionContent">
        <div className="bidDeadline">
          <p className="deadlindTxt">30일 (2023/09/25 마감)</p>
          <div className="deadlineTab">
            <div className="btnOutlinegrey">1일</div>
            <div className="btnOutlinegrey">3일</div>
            <div className="btnOutlinegrey">7일</div>
            <div className="btnOutlinegrey">30일</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidDeadline;
