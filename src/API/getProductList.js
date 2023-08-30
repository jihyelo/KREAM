const getProductList = () => {
  return fetch(
    // `http://10.58.52.69:3000/product/list?offset=0&limit=10&shop_category_id=${
    //   ('스니커즈', '샌들/슬리퍼')
    // }&brand_name=${('Adidas', 'Nike')}&sort=${'lowest_price'}`,
    'http://10.58.52.69:3000/product/list?limit=23&offset=1',
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
        // setLoding(false);
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

export default getProductList;
