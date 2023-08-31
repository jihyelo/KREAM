import React, { useState } from 'react';
import './BidDeadline.scss';

const BidDeadline = () => {
  const [selectedDays, setSelectedDays] = useState(30);

  const handleClick = days => {
    setSelectedDays(days);
  };
  const formatDate = days => {
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + days);
    return deadlineDate.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="deadlineInfoArea">
      <div className="sectionTitle">
        <h1 className="titleTxt">입찰 마감기한</h1>
      </div>
      <div className="sectionContent">
        <div className="bidDeadline">
          <p className="deadlineTxt">
            {`${selectedDays}일 (${formatDate(selectedDays)} 마감)`}
          </p>
          <div className="deadlineTab">
            {[1, 3, 7, 10, 30].map(days => (
              <div
                key={days}
                className={`btnOutline ${
                  selectedDays === days ? 'black' : 'grey'
                }`}
                onClick={() => handleClick(days)}
              >
                {days}일
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidDeadline;
