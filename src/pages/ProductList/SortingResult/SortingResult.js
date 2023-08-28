import { useState, useRef, useEffect } from 'react';
import { LuArrowDownUp } from 'react-icons/lu';
import { AiOutlineCheck } from 'react-icons/ai';
import './SortingResult.scss';

const SortingResult = () => {
  const [countIndex, setCountIndex] = useState(0);
  const [toggleSortingList, setToggleSortingList] = useState(false);

  //TODO sortingList 외부영역 클릭시 sortingList 닫히기

  // const sortingListRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener('mousedown', clickSortingListOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', clickSortingListOutside);
  //   };
  // });

  // const clickSortingListOutside = event => {
  //   if (toggleSortingList && !sortingListRef.current.contains(event.target)) {
  //     setToggleSortingList(false);
  //     console.log('clickSortingListOutside called');
  //   }
  // };

  const handleOnclick = (e, index) => {
    setCountIndex(index);
    setToggleSortingList(prev => !prev);
  };
  const SortingButtonOnClick = () => {
    return setToggleSortingList(prev => !prev);
  };

  return (
    <div className="sortingResult">
      <button className="sortingTitleButton" onClick={SortingButtonOnClick}>
        {SORTING_ITEM_DESC[countIndex]['mainDesc']}
      </button>
      <LuArrowDownUp className="downUpIcon" />
      {toggleSortingList && (
        <ul className="sortingList">
          {SORTING_ITEM_DESC.map((item, index) => (
            <SortingItem
              key={index}
              itemOn={countIndex == index && 'itemOn'}
              isChecked={countIndex == index && true}
              handleOnclick={e => handleOnclick(e, index)}
              itemMainDesc={item['mainDesc']}
              itemSubDesc={item['subDesc']}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const SortingItem = ({
  isChecked,
  itemOn,
  handleOnclick,
  itemMainDesc,
  itemSubDesc,
}) => {
  return (
    <li className={'sortingItem'} onClick={handleOnclick}>
      <div className="sortingLink">
        <div className={`${itemOn} mainDesc`}>{itemMainDesc}</div>
        <div className="subDesc">{itemSubDesc}</div>
        {isChecked && <AiOutlineCheck className="checkIcon" />}
      </div>
    </li>
  );
};

const SORTING_ITEM_DESC = [
  { mainDesc: '낮은 구매가순', subDesc: '구매가가 낮은 순서대로 정렬합니다' },
  { mainDesc: '높은 판매가순', subDesc: '판매가가 높은 순서대로 정렬합니다.' },
  { mainDesc: '인기순', subDesc: '구매가가 낮은 순서대로 정렬합니다' },
  {
    mainDesc: '남성 인기순',
    subDesc: '남성들에게 인기있는 순서대로 정렬합니다.',
  },
  {
    mainDesc: '여성 인기순',
    subDesc: '여성들에게 인기있는 순서대로 정렬합니다.',
  },
  {
    mainDesc: '관심 많은순',
    subDesc: '관심 상품에 많이 추가된 순서대로 정렬합니다.',
  },
];
export default SortingResult;
