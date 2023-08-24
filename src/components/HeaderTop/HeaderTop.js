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
      <div className="headerTopList">
        <div className="headerTopItem">고객센터</div>
        <div className="headerTopItem">마이페이지</div>
        <div className="headerTopItem">관심상품</div>
        <div className="headerTopItem">알림</div>
        <div className="headerTopItem" onClick={onClickHeaderLogin}>
          {isLoggedIn ? '로그아웃' : '로그인'}
        </div>
      </div>
    </div>
  );
};
export default HeaderTop;
