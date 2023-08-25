import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoginSignUpButton from '../../components/LoginSignUpButton/LoginSignUpButton';
import InputBox from '../../components/InputBox/InputBox';
import CheckBox from '../../components/CheckBox/CheckBox';
import signUp from '../../API/signUp';
import SizeSelectModal from '../../components/SizeSelectModal/SizeSelectModal';
import '../../API/signUp';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const defaultTerms = {
    '이용약관 동의': { required: true, checked: false },
    '개인정보 수집 및 이용 동의': { required: true, checked: false },
    앱푸시: { required: false, checked: false },
    문자메세지: { required: false, checked: false },
    이메일: { required: false, checked: false },
  };
  const [terms, setTerms] = useState(defaultTerms);
  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
    앱푸시: false,
    문자메세지: false,
    이메일: false,
  });

  const { email, password, agreeApp, agreeSms, agreeEmail } = userDataValue;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectSize = size => {
    setSelectedSize(size);
    handleCloseModal();
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setUserDataValue({
      ...userDataValue,
      [name]: value,
    });
  };

  const handleToggleTerm = (termName, e) => {
    setTerms(prevTerms => ({
      ...prevTerms,
      [termName]: {
        ...prevTerms[termName],
        checked: !prevTerms[termName].checked,
      },
    }));
    const { checked } = e.target;
    setUserDataValue(prevUserDataValue => ({
      ...prevUserDataValue,
      [termName]: checked,
    }));
    console.log({ [termName]: checked });
  };

  const onClickSignUpButton = () => {
    signUp(email, password, agreeApp, agreeSms, agreeEmail, () => {
      navigate('/login');
    });
  };

  const isVaild =
    email.includes('@') &&
    email.endsWith('.com') &&
    8 <= password.length &&
    password.length <= 16 &&
    terms['이용약관 동의'].checked &&
    terms['개인정보 수집 및 이용 동의'].checked;

  console.log(userDataValue);

  return (
    <div className="signUp">
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
              className="input size"
              name="size"
              placeholder="선택하세요"
              inputTitle="신발 사이즈"
              value={selectedSize || ''}
              onClick={handleOpenModal}
              readOnly
            />

            <div>
              <SizeSelectModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSelectSize={handleSelectSize}
              />
            </div>

            <CheckBox
              checked={
                terms['이용약관 동의'].checked &&
                terms['개인정보 수집 및 이용 동의'].checked
              }
              onChange={e => {
                setTerms({
                  ...terms,
                  '이용약관 동의': {
                    ...terms['이용약관 동의'],
                    checked: e.target.checked,
                  },
                  '개인정보 수집 및 이용 동의': {
                    ...terms['개인정보 수집 및 이용 동의'],
                    checked: e.target.checked,
                  },
                });
              }}
            >
              (필수) 서비스 이용약관
            </CheckBox>
            <CheckBox
              checked={terms['이용약관 동의'].checked}
              onChange={e => handleToggleTerm('이용약관 동의', e)}
            >
              이용약관 동의
            </CheckBox>
            <CheckBox
              checked={terms['개인정보 수집 및 이용 동의'].checked}
              onChange={e => handleToggleTerm('개인정보 수집 및 이용 동의', e)}
            >
              개인정보 수집 및 이용 동의
            </CheckBox>

            <CheckBox
              checked={
                terms.앱푸시.checked &&
                terms['문자메세지'].checked &&
                terms['이메일'].checked
              }
              onChange={e => {
                setTerms({
                  ...terms,
                  앱푸시: {
                    ...terms['앱푸시'],
                    checked: e.target.checked,
                  },
                  문자메세지: {
                    ...terms['문자메세지'],
                    checked: e.target.checked,
                  },
                  이메일: {
                    ...terms['이메일'],
                    checked: e.target.checked,
                  },
                });
              }}
            >
              (선택) 마케팅 수신
            </CheckBox>
            <CheckBox
              name={agreeApp}
              checked={terms['앱푸시'].checked}
              onChange={e => handleToggleTerm('앱푸시', e)}
            >
              앱 푸시
            </CheckBox>
            <CheckBox
              name={agreeSms}
              checked={terms['문자메세지'].checked}
              onChange={e => handleToggleTerm('문자메세지', e)}
            >
              문자 메시지
            </CheckBox>
            <CheckBox
              name={agreeEmail}
              checked={terms['이메일'].checked}
              onChange={e => handleToggleTerm('이메일', e)}
            >
              이메일
            </CheckBox>

            <LoginSignUpButton
              className="LoginButton"
              children="회원가입"
              onClick={onClickSignUpButton}
              disabled={!isVaild}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
