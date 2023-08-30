const getProductDetail = async productId => {
  try {
    const response = await fetch(
      '/data/detailData.json',
      //'http://10.58.52.179:3000/product-list/${productId}'
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      },
    );

    const result = await response.json();

    return result;
  } catch (err) {
    console.error(err);
    alert('데이터 불러오기 실패');
  }
};

export default getProductDetail;
