//TODO async, await 사용하기
const postLogin = (email, password, onSuccessLogin) => {
  fetch('http://10.58.52.142:3000/user/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      localStorage.setItem('TOKEN', data.accessToken);
      if (onSuccessLogin) {
        onSuccessLogin();
      }
    })
    .catch(error => {
      console.error(error);
      alert('로그인 실패');
    });
};

export default postLogin;
