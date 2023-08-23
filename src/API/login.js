import { useNavigate } from 'react-router';

//TODO async, await 사용하기
const login = (email, password, onSuccessLogin) => {
  fetch('https://10.58.52.172:3000/users/signup', {
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
    })
    .then(data => {
      if (data.message === 'success login') {
        localStorage.setItem('TOKEN', data.token);
        onSuccessLogin && onSuccessLogin();
      }
    })
    .catch(alert('로그인 실패'));
};

// const login = (userDataValue, setLoged) => {
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
//         setLoged(prev => !prev);
//         navigate('/product-list');
//       } else {
//         alert('로그인 실패');
//       }
//     });
// };

export default login;
