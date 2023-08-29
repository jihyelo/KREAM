const fetchProductList = () => {
  return fetch(
    '/data/data.json',

    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    },
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('데이터를 불러오는 데 실패했습니다.');
      }
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      alert('데이터를 불러오는 데 실패했습니다');
    });
};

export default fetchProductList;
