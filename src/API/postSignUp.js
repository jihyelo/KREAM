//TODO async, await 사용하기
const postSignUp = (
  userDataValue,
  email,
  password,
  앱푸시,
  문자메시지,
  이메일,
  onSuccessSignUp,
) => {
  fetch('http://10.58.52.142:3000/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      agreeApp: Number(앱푸시),
      agreeSms: Number(문자메시지),
      agreeEmail: Number(이메일),
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
      if (onSuccessSignUp) {
        onSuccessSignUp();
      }
    })
    .catch(error => {
      console.error(error);
      alert('회원가입 실패');
    });
};

export default postSignUp;
