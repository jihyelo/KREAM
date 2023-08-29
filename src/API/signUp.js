//TODO async, await 사용하기
const signUp = (
  userDataValue,
  email,
  password,
  앱푸시,
  문자메시지,
  이메일,
  onSuccessSignUp,
) => {
  fetch('http://10.58.52.179:3000/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      agree_app: Number(앱푸시),
      agree_sms: Number(문자메시지),
      agree_email: Number(이메일),
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('회원가입 실패');
      }
    })
    .then(data => {
      // if (data.message === 'user is created') {
      //   localStorage.setItem('TOKEN', data.accessToken);
      // }
      if (onSuccessSignUp) {
        onSuccessSignUp();
      }
    })
    .catch(error => {
      console.error(error);
      alert('회원가입 실패');
    });
};

export default signUp;
