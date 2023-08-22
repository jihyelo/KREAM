import './HeaderTop.scss';
const HeaderTop = ({ loged }) => {
  return (
    <div className="headerTop">
      <ul className="headerTopList">
        <li className="headerTopItem">고객센터</li>
        <li className="headerTopItem">마이페이지</li>
        <li className="headerTopItem">관심상품</li>
        <li className="headerTopItem">알림</li>
        <li className="headerTopItem">{loged}</li>
      </ul>
    </div>
  );
};
export default HeaderTop;
