import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
  const [ServiceItems, setServiceItems] = useState([]);
  const [requiredItems, setRequiredItems] = useState([]);

  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
    이용약관동의: false,
    개인정보동의: false,
    앱푸시: false,
    문자메시지: false,
    이메일: false,
  });

  const { email, password, 앱푸시, 문자메시지, 이메일 } = userDataValue;

  const ServiceList = [
    {
      name: '앱푸시',
    },
    {
      name: '문자메시지',
    },
    {
      name: '이메일',
    },
  ];

  const requiredList = [
    {
      name: '개인정보동의',
    },
    {
      name: '이용약관동의',
    },
  ];

  const handleInput = e => {
    const { name, value } = e.target;
    setUserDataValue({
      ...userDataValue,
      [name]: value,
    });
  };

  const checkItemHandler = (name, isChecked) => {
    if (isChecked) {
      ServiceList.find(
        item => JSON.stringify(item) === JSON.stringify({ name: name }),
      )
        ? setServiceItems(prev => [...prev, name])
        : setRequiredItems(prev => [...prev, name]);
    } else {
      ServiceList.find(
        item => JSON.stringify(item) === JSON.stringify({ name: name }),
      )
        ? setServiceItems(ServiceItems.filter(item => item !== name))
        : setRequiredItems(requiredItems.filter(item => item !== name));
    }

    setUserDataValue(prevUserDataValue => ({
      ...prevUserDataValue,
      [name]: isChecked,
    }));
  };

  //TODO 하드코딩 노노 refactor
  const allServiceCheckedHandler = e => {
    if (e.target.checked) {
      setServiceItems(ServiceList.map(item => item.name));
      setUserDataValue(prevUserDataValue => ({
        ...prevUserDataValue,
        앱푸시: true,
        문자메시지: true,
        이메일: true,
      }));
    } else {
      setServiceItems([]);
      setUserDataValue(prevUserDataValue => ({
        ...prevUserDataValue,
        앱푸시: false,
        문자메시지: false,
        이메일: false,
      }));
    }
  };

  const allRequiredCheckedHandler = e => {
    if (e.target.checked) {
      setRequiredItems(requiredList.map(item => item.name));
      setUserDataValue(prevUserDataValue => ({
        ...prevUserDataValue,
        이용약관동의: true,
        개인정보동의: true,
      }));
    } else {
      setRequiredItems([]);
      setUserDataValue(prevUserDataValue => ({
        ...prevUserDataValue,
        이용약관동의: false,
        개인정보동의: false,
      }));
    }
  };

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

  const onClickSignUpButton = () => {
    signUp(userDataValue, email, password, 앱푸시, 문자메시지, 이메일, () => {
      navigate('/login');
    });
  };

  const isVaild =
    email.includes('@') &&
    email.endsWith('.com') &&
    8 <= password.length &&
    password.length <= 16 &&
    requiredItems.length == 2;

  return (
    <div className="signUp">
      <div className="layout">
        <div className="containerLogin">
          <div className="loginAera">
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
              onChange={handleInput}
            />
            <InputBox
              type="password"
              className="input"
              name="password"
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
              errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
              inputTitle="비밀번호*"
              value={password}
              onChange={handleInput}
            />
            <InputBox
              type="text"
              className="input"
              placeholder="추천인 코드를 입력해주세요"
              errorMessage="일치하는 코드를 찾을 수 없습니다"
              inputTitle="추천인코드"
              onChange={handleInput}
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

            <label>
              <input
                type="checkbox"
                onChange={allRequiredCheckedHandler}
                checked={
                  requiredItems.length === requiredList.length ? true : false
                }
              />
              [필수] 만 14세 이상이며 모두 동의합니다.
            </label>
            <div>
              {requiredList.map(item => (
                <CheckBox
                  key={item.name}
                  name={item.name}
                  checkItemHandler={checkItemHandler}
                  checked={requiredItems.includes(item.name) ? true : false}
                />
              ))}
            </div>

            <label>
              <input
                type="checkbox"
                onChange={allServiceCheckedHandler}
                checked={
                  ServiceItems.length === ServiceList.length ? true : false
                }
              />
              [선택] 광고성 정보 수신에 모두 동의합니다.
            </label>
            <div>
              {ServiceList.map(item => (
                <CheckBox
                  key={item.name}
                  name={item.name}
                  checkItemHandler={checkItemHandler}
                  checked={ServiceItems.includes(item.name) ? true : false}
                />
              ))}
            </div>

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
