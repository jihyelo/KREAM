import { useNavigate } from 'react-router-dom';
import './HeaderTop.scss';

const HeaderTop = ({ isLoggedIn, setisLoggedIn }) => {
  const navigate = useNavigate;

  const onClickHeaderLogin = () => {
    if (isLoggedIn) {
      localStorage.removeItem('token');
    }
    if (!isLoggedIn) {
      navigate('/login');
    }
  };
  return (
    <div className="headerTop">
      <ul className="headerTopList">
        <li className="headerTopItem">고객센터</li>
        <li className="headerTopItem">마이페이지</li>
        <li className="headerTopItem">관심상품</li>
        <li className="headerTopItem">알림</li>
        <li className="headerTopItem" onClick={onClickHeaderLogin}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </li>
      </ul>
    </div>
  );
};
export default HeaderTop;
