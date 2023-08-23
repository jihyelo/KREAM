import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import HeaderTop from '../../components/HeaderTop/HeaderTop';
import InputBox from '../../components/InputBox/InputBox';
import CheckBox from '../../components/CheckBox/CheckBox';
import signUp from '../../API/signUp';
import './SignUp.scss';

const SignUp = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
    size: '',
    serviceTerms: '',
  });
  const data = [
    { id: 0, title: '이용약관 동의' },
    { id: 1, title: '개인정보 수집 및 이용 동의' },
  ];
  const { email, password, size } = userDataValue;

  const navigate = useNavigate();

  const onClickLoginButton = () => {
    signUp(email, password, size, () => {
      navigate('/login');
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
    <div className="signUp">
      <div className="gnbHeader">
        <HeaderTop isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
      </div>
      <div className="layout">
        <div className="containerLogin">
          <div className="loginAera" onChange={handleInput}>
            <div className="loginTitle">
              <p className="signUpTitle">회원가입</p>
            </div>
            <InputBox
              type="email"
              className="input"
              name="email"
              placeholder="예) kream@kream.com"
              errorMessage="이메일 주소를 정확히 입력해주세요"
              inputTitle="이메일 주소*"
              value={email}
            />
            <InputBox
              type="password"
              className="input"
              name="password"
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
              errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
              inputTitle="비밀번호*"
              value={password}
            />
            <InputBox
              type="text"
              className="input"
              placeholder="추천인 코드를 입력해주세요"
              errorMessage="일치하는 코드를 찾을 수 없습니다"
              inputTitle="추천인코드"
            />
            <InputBox
              type="text"
              className="input"
              name="size"
              placeholder="선택하세요"
              inputTitle="신발 사이즈"
              value={size}
            />

            {/* <CheckBox type="checkbox">(필수) 서비스 이용약관</CheckBox>
            <CheckBox>이용약관 동의</CheckBox>
            <CheckBox>개인정보 수집 및 이용 동의</CheckBox>
            <CheckBox>(선택) 마케팅 수신</CheckBox>
            <CheckBox>앱 푸시</CheckBox>
            <CheckBox>문자 메시지</CheckBox>
            <CheckBox>이메일</CheckBox> */}

            <LoginSignUpButton
              className="LoginButton"
              children="회원가입"
              onClick={onClickLoginButton}
              disabled={!isVaild}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
