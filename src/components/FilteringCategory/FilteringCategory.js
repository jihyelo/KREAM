import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import './FilteringCategory.scss';

const FilteringCategory = () => {
  const [checkedCategoryList, setCheckedCategoryList] = useState(false);
  return (
    <div className="filteringCategory scroll">
      <div className="filterStatus">
        <div className="statusBox">
          <div className="statusText">필터</div>
          <div className="statusNum">2</div>
        </div>
        <div className="deleteFilterButton">초기화</div>
      </div>

      <div className="filterExpress">
        <img src="/images/expressThunder.PNG" />
        <div className="filterExpressText">빠른배송</div>
      </div>
      <div className="filterTitle">
        <div className="titleBox">
          <div className="mainTitle">카테고리</div>
          <div className="placeholder">모든 카테고리</div>
        </div>
        <div className="plusBox">
          {checkedCategoryList ? <BiMinus /> : <BsPlusLg />}
        </div>
      </div>
      <div className="filterMenu">
        <div className="filterMenuList">
          {Object.entries(FILTERING_CATEGORY_MENU).map(([key, value]) => (
            <>
              <div className="menu">{key}</div>
              <div className="childMenu">
                <div className="menu">{value.map(childMenu => childMenu)}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const FILTERING_CATEGORY_MENU = {
  신발: ['스니커즈', '샌들/슬리퍼'],
  아우터: ['자켓', '아노락', '코트', '패딩', '기타 아우터'],
  상의: [
    '반팔 티셔츠',
    '긴팔 티셔츠',
    '가디건',
    '셔츠',
    '후드',
    '후드 집업',
    '스웨트셔츠',
    '원피스',
    '니트',
  ],
  하의: ['바지', '반바지', '스커트'],
  가방: ['프리미엄 가방', '백팩', '숄더백', '크로스백', '에코백', '캐리어'],
  지갑: ['반지갑', '장지갑', '카드 지갑'],
  시계: ['프리미엄 시계', '전자 시계', '가죽 시계'],
  패션잡화: [
    '귀걸이',
    '목걸이',
    '팔찌',
    '반지',
    '볼캡',
    '벨트',
    '스카프',
    '키링',
    '양말',
    '넥타이',
  ],
  컬렉터블: ['레고', '베어브릭', '트레이딩 카드'],
  뷰티: ['니치 향수', '립 메이크업', '스킨케어', '바디 케어', '기타 뷰티'],
  테크: [
    '스마트폰',
    '테블릿',
    '노트북',
    '헤어',
    '스피커',
    '헤드폰/이어폰',
    '키보드',
    '게임기',
  ],
  캠핑: ['텐트', '체어', '테이블', '식기', '컵/보틀', '기타 캠핑'],
  '가구/리빙': ['테이블', '조명', '식기', '의자', '쿠션', '러그'],
};
export default FilteringCategory;
