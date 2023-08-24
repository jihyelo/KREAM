import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './HeaderTop.scss';

const HeaderTop = () => {
  const navigate = useNavigate();
  // const { pathname } = useLocation();
  // const [loged, setLoged] = useState(false);

  // useEffect(() => {
  //   localStorage.getItem('token') ? setLoged(true) : setLoged(false);
  // }, [pathname]);

  const onClickHeaderLogin = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      // setLoged(false);
      alert('로그아웃 되었습니다');
    }
    if (!localStorage.getItem('token')) {
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
          {localStorage.getItem('token') ? '로그아웃' : '로그인'}
        </li>
      </ul>
    </div>
  );
};

export default HeaderTop;
