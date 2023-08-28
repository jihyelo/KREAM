//TODO async, await 사용하기
const login = (email, password, onSuccessLogin) => {
  fetch('http://10.58.52.133:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('로그인 실패');
      }
    })
    .then(data => {
      if (data.message === 'success login') {
        localStorage.setItem('TOKEN', data.token);
        if (onSuccessLogin) {
          onSuccessLogin();
        }
      }
    })
    .catch(alert('로그인 실패'));
};

export default login;
