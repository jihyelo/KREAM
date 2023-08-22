import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import HeaderMain from '../../components/HeaderMain/HeaderMain';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import InputBox from '../../components/InputBox/InputBox';
import { CiSearch } from 'react-icons/ci';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    // fetch('https://10.58.52.172:3000/users/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json;charset=utf-8',
    //   },
    //   body: JSON.stringify({
    //     email: userDataValue.email,
    //     password: userDataValue.password,
    //   }),
    // })
    //   .then(res => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //   })
    //   .then(data => {
    //     if (data.message === 'sucess login') {
    //       localStorage.setItem('TOKEN', data.token);
    //       alert('로그인 성공');
    //       navigate('/product-list');
    //     } else {
    //       alert('로그인 실패');
    //     }
    //   });
    navigate('/product-list');
  };
  const handleInput = e => {
    const { type, value } = e.target;
    console.log(e.target.value);
    setUserDataValue({ ...userDataValue, [type]: value });
    console.log(userDataValue);
  };

  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
  });

  let isVaild = () => {
    return userDataValue.email.includes('@') &&
      userDataValue.password.length >= 5
      ? false
      : true;
  };

  return (
    <div className="login">
      <div className="gnbHeader">
        <HeaderTop />
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
              value={userDataValue.inputId}
            />
            <InputBox
              type="password"
              className="input"
              errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
              inputTitle="비밀번호"
              onChange={handleInput}
              value={userDataValue.inputPassword}
            />
            <LoginSignUpButton
              className="LoginButton"
              buttonText="로그인"
              onClick={goToMain}
              disabled={isVaild()}
            ></LoginSignUpButton>
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
