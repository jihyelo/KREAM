import { useNavigate } from 'react-router-dom';
import './HeaderTop.scss';
import { useLocation } from 'react-router-dom';

const HeaderTop = ({ loged, setLoged }) => {
  const navigate = useNavigate;

  const location = useLocation();
  const onClickHeaderLogin = () => {
    if (loged == true) {
      fetch('https://10.58.52.172:3000/users/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          //api연동후 구현
        }),
      })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          if (!res.ok) {
            throw new Error('Error');
          }
        })
        .then(data => {
          if (data.message === 'success logout') {
            alert('로그아웃 되었습니다.');
            setLoged(prev => !prev);
          }
        });
    }
    if (loged == false) {
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
          {loged ? '로그아웃' : '로그인'}
        </li>
      </ul>
    </div>
  );
};
export default HeaderTop;
