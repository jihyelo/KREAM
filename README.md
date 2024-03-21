# 🚀 Project F-killer | SREAM
<br />
<div align="center">
  
![sream](sream.png)

</div>
<br />

## 🧑‍💻 서비스 소개
- 한정판을 좋아하는 Z세대들에게 활발한 소비 및 투자로 리셀 스니커즈 시장을 확대하는 서비스를 기획
- 리셀이라는 새로운 소비 트렌드를 캐치한 한정판 스니커즈 거래 중개 서비스
- 단순한 중개에서 벗어나 패션을 즐기는 고객들이 입찰 문화를 통해 소통할 수 있는 플랫폼
- 구매자와 판매자가 모두 플랫폼을 이용 가능
- 회원가입/로그인/로그아웃, 메인페이지, 상세페이지, 입찰과 즉시체결, 결제페이지 등의 기능을 구현
<br /><br />

## ⏰ 개발 기간

23.08.21 ~ 23.09.01
<br /><br />

## 🧑‍🤝‍🧑 멤버 구성
#### FrontEnd
이지혜
전미혜
<br />
#### BackEnd
김민수
최지준
양지은
홍지수
<br /><br />

## ⚙️ 기술 스택

<div align="center">
  
### FrontEnd

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
  
### BackEnd

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/typeform-000000?style=for-the-badge&logo=typeform&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">

### Common Tools

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white">

<br />
</div>

## 📌 구현 기능

### 1. 로그인
![SREAM-로그인](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/1fa0c3fd-92c3-46d6-8a8b-39535b323eae)

<br />

- 실시간 유효성 검사를 통해, 사용자들이 잘못 기입하여 발생할 수 있는 에러를 미연에 방지
- 인증이 완료된 사용자가 페이지 이동시 매번 로그인하는 수고를 덜 수 있도록, Local Stroage에 토큰을 저장하는 방식 적용
- DB에 유저 정보가 없으면 저장하고 JWT로 암호화하여 로딩 페이지로 이동 후 로그인하고, DB에 유저 정보가 있으면 JWT로 암호 화하여 제공하여 로그인 완료하여 메인 페이지로 이동
<br><br><br>


### 2. 회원가입
![SREAM-회원가입](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/37a5c504-64df-4387-add2-8f254bd67d81)

<br />

- 비밀번호 8~15자, 올바른 email 형식, 모든 필수 동의 항목 3가지가 모두 충족할때 회원가입 버튼 활성화
- 선택 약관 동의 체크여부를 boolean 값으로 저장하여 POST 요청하였습니다. 신발사이즈 선택 모달창 구현
<br><br><br>

### 3. 메인페이지
![SREAM-리스트 정렬](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/9df6edd3-f992-4aeb-9fa8-98c773251708)

<br />

- 쿼리스트링을 활용하여 상품 목록을 낮은 가격순과 높은 가격순으로 정렬하는 기능을 구현
- 사용자가 원하는 신발 브랜드와 종류 카테고리를 선택하면, 이를 쿼리스트링을 통해 서버로 전달하여 해당 조건에 맞는 상품 목록을 필터링하는 기능을 구현
- 페이지네이션을 통해 상품을 8개씩 보여주씩 보여지도록 기능을 구현
<br><br><br>

### 5. Product Detail
![SREAM-상세페이지](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/2656b684-bee4-4104-ac49-330dec945e00)

<br>

- 사용자가 선택한 신발 사이즈별로 최근 거래 가격과와 즉시 구매 및 판매 가격을 조회할 수 있도록 구현
- 회원들의 거래 내역을 사이즈별 구매 입찰가, 판매 입찰가, 체결 날짜, 수량 등의 정보로 정리하여 표 형태로 조회 가능
- 체결 내역표는 로그인을 한 유저만 볼 수 있도록 하여 회원 유입을 유도
<br><br><br>

### 6. Purchase & Payment
![SREAM-즉시구매](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/c5ca3bef-f4af-4ccb-97ea-be0edfaec48b)

<br>

- 해당 상품의 사이즈를 선택하면, productId를 동적라우팅으로 해당 제품의 정보를 불러오고 즉시구매와 구매입찰 컴포넌트가 토글버튼으로 각각 보여지게 구현
- 즉시구매에서는 백엔드로부터 받아온 상품데이터의 가격을 저장하여 즉시구매하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송
- 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 구현
- 만일 뒤로 가기 버튼을 눌렀을때에는 결제가 진행 되지 않게 구현
<br><br><br>

### 7. Sell & Payment
![SREAM-판매입찰](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/594b2938-1bfd-47aa-8793-679b0fe108ab)

<br>

- 해당 상품의 사이즈를 선택하면, 제품의 즉시구매와 구매입찰 컴포넌트가 토글버튼으로 각각 보여지게 구현
- 즉시구매에서는 백엔드로부터 받아온 상품데이터의 가격을 저장하여 즉시구매하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송
- 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 구현
- 만일 뒤로 가기 버튼을 눌렀을때에는 결제가 진행 되지 않게 구현
<br><br><br>
