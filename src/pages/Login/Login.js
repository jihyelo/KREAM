import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import InputBox from '../../components/InputBox/InputBox';
import login from '../../API/login';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userDataValue;

  const onClickLoginButton = () => {
    login(email, password, () => {
      localStorage.setItem('token', 'asdfasdfasdf');
      navigate('/product-list');
    });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setUserDataValue({ ...userDataValue, [name]: value });
  };
  const isVaild =
    email.includes('@') &&
    email.endsWith('.com') &&
    8 <= password.length &&
    password.length <= 16;

  return (
    <div className="login">
      <div className="layout">
        <div className="containerLogin">
          <div className="loginAera" onChange={handleInput}>
            <div className="loginTitle">
              <p className="loginTitleLogo">KREAM</p>
              <p className="logoTitleContent">
                KICKS RULE EVERYTHING AROUND ME
              </p>
            </div>
            <InputBox
              type="email"
              className="input"
              name="email"
              placeholder="예) kream@kream.com"
              errorMessage="이메일 주소를 정확히 입력해주세요"
              inputTitle="이메일 주소"
              value={email}
            />
            <InputBox
              type="password"
              className="input"
              name="password"
              errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
              inputTitle="비밀번호"
              value={password}
            />
            <LoginSignUpButton
              className="LoginButton"
              children="로그인"
              onClick={onClickLoginButton}
              disabled={!isVaild}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
