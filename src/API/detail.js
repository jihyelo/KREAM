const detail = () => {
  return fetch('/data/detailData.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('데이터 불러오기 실패');
      }
    })
    .then(data => {
      return data.data;
    })
    .catch(error => {
      console.error(error);
      alert('데이터 불러오기 실패');
    });
};

export default detail;
