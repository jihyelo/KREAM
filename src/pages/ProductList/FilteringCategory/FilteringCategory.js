import { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BsPlusLg } from 'react-icons/bs';
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import './FilteringCategory.scss';

const FilteringCategory = ({
  categoryFilterItem,
  setcategoryFilterItem,
  brandFilterItem,
  setBrandFilterItem,
}) => {
  const [openCategoryList, setOpenCategoryList] = useState([]);

  const handlerFilterTitle = index => {
    setOpenCategoryList(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const onClickMenu = filterItem => {
    if (categoryFilterItem.includes(filterItem)) {
      setcategoryFilterItem(prevcategoryFilterItem =>
        prevcategoryFilterItem.filter(item => filterItem !== item),
      );
    } else {
      setcategoryFilterItem(prevcategoryFilterItem => [
        ...prevcategoryFilterItem,
        filterItem,
      ]);
    }
  };

  const onClickBrand = filterItem => {
    if (brandFilterItem.includes(filterItem)) {
      setBrandFilterItem(prevBrandFilterItem =>
        prevBrandFilterItem.filter(item => filterItem !== item),
      );
    } else {
      setBrandFilterItem(prevBrandFilterItem => [
        ...prevBrandFilterItem,
        filterItem,
      ]);
    }
  };
  const deleteFilter = () => {
    setcategoryFilterItem([]);
    setBrandFilterItem([]);
  };

  return (
    <div className="filteringCategory scroll">
      <div className="filterStatus">
        <div className="statusBox">
          <div className="statusText">필터</div>
          {categoryFilterItem.length || brandFilterItem.length ? (
            <div className="statusNum">
              {categoryFilterItem.length + brandFilterItem.length}
            </div>
          ) : null}
        </div>
        <div className="deleteFilterButton" onClick={deleteFilter}>
          초기화
        </div>
      </div>
      <div className="filterExpress">
        <img src="/images/expressThunder.PNG" />
        <div className="filterExpressText">빠른배송</div>
      </div>

      {filterListData.map((data, index) => (
        <FilterList
          key={index}
          mainTitle={data['mainTitle']}
          placeholder={data['placeholder']}
          filterItems={data['filterItems']}
          openCategoryList={openCategoryList.includes(index)}
          handlerFilterTitle={() => handlerFilterTitle(index)}
          brandFilterItem={brandFilterItem}
          categoryFilterItem={categoryFilterItem}
          onClickMenu={onClickMenu}
          onClickBrand={onClickBrand}
        />
      ))}
    </div>
  );
};

export default FilteringCategory;

const FilterList = ({
  mainTitle,
  placeholder,
  filterItems,
  openCategoryList,
  handlerFilterTitle,
  categoryFilterItem,
  brandFilterItem,
  onClickMenu,
  onClickBrand,
}) => {
  return (
    <div className="filterList">
      <div className="filterTitle" onClick={handlerFilterTitle}>
        <div className="titleBox">
          <div className="mainTitle">{mainTitle}</div>
          {!openCategoryList && (
            <div className="placeholder">{placeholder}</div>
          )}
        </div>
        <div className="plusBox">
          {openCategoryList ? <BiMinus /> : <BsPlusLg />}
        </div>
      </div>
      {openCategoryList && (
        <div className="filterMenu">
          {filterItems.map((item, index) => (
            <div
              key={index}
              className="menu"
              onClick={() => {
                if (mainTitle === '신발') {
                  onClickMenu(item);
                } else {
                  onClickBrand(item);
                }
              }}
            >
              {mainTitle === '신발' ? (
                categoryFilterItem.includes(item) ? (
                  <MdCheckBox className="CheckedTrue" />
                ) : (
                  <MdCheckBoxOutlineBlank className="CheckedFalse" />
                )
              ) : brandFilterItem.includes(item) ? (
                <MdCheckBox className="CheckedTrue" />
              ) : (
                <MdCheckBoxOutlineBlank className="CheckedFalse" />
              )}
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const filterListData = [
  {
    mainTitle: '신발',
    placeholder: '모든 신발',
    filterItems: ['스니커즈', '샌들/슬리퍼'],
  },
  {
    mainTitle: '브랜드',
    placeholder: '모든 브랜드',
    filterItems: ['아디다스', '나이키', '뉴발란스'],
  },
  {
    mainTitle: '성별',
    placeholder: '모든 성별',
    filterItems: ['남성', '여성', '키즈'],
  },
  {
    mainTitle: '컬렉션',
    placeholder: '모든 컬렉션',
    filterItems: [
      'Luxury',
      'Contemporary',
      'Jordan 1',
      'Jordan 3',
      'Jordan 4',
      'Jordan 5',
      'Jordan 6',
      'Jordan 11',
      'Nike Dunk',
      'Nike Air Force',
      'Nike Air Max 1',
      'Nike Air Max 95',
    ],
  },
];
