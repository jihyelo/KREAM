import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import InputBox from '../../components/InputBox/InputBox';
import postLogin from '../../API/postLogin';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = userDataValue;

  const onClickLoginButton = () => {
    postLogin(email, password, () => {
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
              <p className="loginTitleLogo">SREAM</p>
              <p className="logoTitleContent">
                SHOES RULE EVERYTHING AROUND ME
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
              isVaild={
                email.length === 0
                  ? true
                  : email.includes('@') && email.endsWith('.com')
              }
            />
            <InputBox
              type="password"
              className="input"
              name="password"
              placeholder="8자 이상 16자 이하"
              errorMessage="8자 이상 16자 이하로 입력해주세요."
              inputTitle="비밀번호"
              password={password}
              isVaild={
                password.length === 0
                  ? true
                  : 8 <= password.length && password.length <= 16
              }
            />

            <LoginSignUpButton
              className="LoginButton"
              children="로그인"
              onClick={onClickLoginButton}
              disabled={!isVaild}
            />

            <div className="accountActionsBox">
              <Link to="/sign-up" className="accountAction">
                <div>이메일 가입</div>
              </Link>
              <div className="line" />
              <div className="accountAction">이메일 찾기</div>
              <div className="line" />
              <div className="accountAction">비밀번호 찾기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
