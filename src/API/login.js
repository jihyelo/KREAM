//TODO async, await 사용하기
const login = (email, password, onSuccessLogin) => {
  fetch('http://10.58.52.179:3000/user/signin', {
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
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      if (data.message === 'success login') {
        localStorage.setItem('TOKEN', data.token);
        onSuccessLogin && onSuccessLogin();
      }
    })
    .catch(error => {
      console.error(error);
      alert('로그인 실패');
    });
  // }
  // else {
  //   alert('로그인 실패');
  // }
};

// const login = (userDataValue, setisLoggedIn) => {
//   const navigate = useNavigate;
//   fetch('https://10.58.52.172:3000/users/signup', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify({
//       email: userDataValue.email,
//       password: userDataValue.password,
//     }),
//   })
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then(data => {
//       if (data.message === 'sucess login') {
//         localStorage.setItem('TOKEN', data.token);
//         alert('로그인 성공');
//         setisLoggedIn(prev => !prev);
//         navigate('/product-list');
//       } else {
//         alert('로그인 실패');
//       }
//     });
// };

export default login;
