const fetchProductList = () => {
  return fetch(
    '/data/data.json',

    // `http://32423:3000/product/search?shop_category_id=${
    //   '스니커즈','샌들/슬리퍼',
    // }
    // &brand_name=${{ brand: 'Adidas', brand: 'Nike' }}
    // &sort=${{ sort: 'lowest_price' }}`,

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
