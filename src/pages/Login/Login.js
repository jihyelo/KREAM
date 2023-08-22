import { useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import InputBox from '../../components/InputBox/InputBox';
import login from '../../API/login';
import './Login.scss';

const Login = () => {
  const [loged, setLoged] = useState(false);
  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userDataValue;

  const navigate = useNavigate();

  const onClickLoginButton = () => {
    login(email, password, () => {
      navigate('/product-list');
      setLoged(prev => !prev);
    });
  };

  const handleInput = e => {
    const { type, value } = e.target;
    setUserDataValue({ ...userDataValue, [type]: value });
  };

  const isVaild =
    email.includes('@') &&
    email.endsWith('.com') &&
    8 <= password.length &&
    password.length <= 16;

  return (
    <div className="login">
      <div className="gnbHeader">
        <HeaderTop loged={loged} setLoged={setLoged} />
        <HeaderMain right={right} />
      </div>
      <div className="layout">
        <div className="containerLogin">
          <div className="loginAera">
            <div className="loginTitle">
              <p className="loginTitleLogo">KREAM</p>
              <p className="logoTitleContent">
                KICKS RULE EVERYTHING AROUND ME
              </p>
            </div>
            <InputBox
              type="email"
              className="input"
              placeholder="예) kream@kream.com"
              errorMessage="이메일 주소를 정확히 입력해주세요"
              inputTitle="이메일 주소"
              onChange={handleInput}
              value={email}
            />
            <InputBox
              type="password"
              className="input"
              errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
              inputTitle="비밀번호"
              onChange={handleInput}
              value={password}
            />
            <LoginSignUpButton
              className="LoginButton"
              buttonText="로그인"
              onClick={onClickLoginButton}
              disabled={!isVaild}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const right = (
  <>
    <ul className="gnbList">
      <li className="gnbItem">HOME</li>
      <li className="gnbItem">STYLE</li>
      <li className="gnbItem">
        <a gref="/product-list">SHOP</a>
      </li>
    </ul>
    <div className="searchBtnBox">
      <CiSearch className="serarchBtn" size="27" />
    </div>
  </>
);

export default Login;
