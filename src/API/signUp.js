import { useNavigate } from 'react-router';

//TODO async, await 사용하기
const signUp = (
  email,
  password,
  agreeApp,
  agreeSms,
  agreeEmail,
  onSuccessSignUp,
) => {
  fetch('https://10.58.52.172:3000/users/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      agreeApp: agreeApp,
      agreeSms: agreeSms,
      agreeEmail: agreeEmail,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => {
      if (data.message === 'success signUp') {
        onSuccessSignUp && onSuccessSignUp();
      }
    })
    .catch(alert('회원가입 실패'));
};

export default signUp;
