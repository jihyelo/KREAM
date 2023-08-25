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
  const [checkItems, setCheckItems] = useState([]);

  const [userDataValue, setUserDataValue] = useState({
    email: '',
    password: '',
    앱푸시: false,
    문자메시지: false,
    이메일: false,
  });

  const { email, password, 앱푸시, 문자메시지, 이메일 } = userDataValue;

  const checkList = [
    {
      id: '앱푸시',
    },
    {
      id: '문자메시지',
    },
    {
      id: '이메일',
    },
  ];

  const handleInput = e => {
    const { name, value } = e.target;
    setUserDataValue({
      ...userDataValue,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(userDataValue);
  }, []);

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(item => item !== id));
    }

    setUserDataValue(prevUserDataValue => ({
      ...prevUserDataValue,
      [id]: isChecked,
    }));

    console.log({ [id]: isChecked });
  };

  const allCheckedHandler = e => {
    if (e.target.checked) {
      setCheckItems(checkList.map(item => item.id));
    } else {
      setCheckItems([]);
    }

    console.log(`allCheck = `, e.target.checked);
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
    signUp(email, password, 앱푸시, 문자메시지, 이메일, () => {
      navigate('/login');
    });
  };

  const isVaild =
    email.includes('@') &&
    email.endsWith('.com') &&
    8 <= password.length &&
    password.length <= 16;
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

            <label>
              <input
                type="checkbox"
                onChange={allCheckedHandler}
                checked={checkItems.length === checkList.length ? true : false}
              />
              [선택] 광고성 정보 수신에 모두 동의합니다.
            </label>
            <div>
              {checkList.map(item => (
                <CheckBox
                  key={item.id}
                  id={item.id}
                  checkItemHandler={checkItemHandler}
                  checked={checkItems.includes(item.id) ? true : false}
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
