# KREAM
<br />

## 💻 개발 기간

23.08.21 ~ 23.09.01
<br /><br />

## 🧑‍🤝‍🧑 멤버 구성

이지혜 : 사이즈선택, 즉시구매/즉시판매, 구매입찰/판매입찰, 결제페이지 UI와 기능 구현 및 API 연동<br />
전미혜 : 로그인/회원가입, 메인페이지, 상세페이지 UI와 기능 구현 및 API 연동<br />
김민수 : ERD모델링, 메인페이지 리스트, 각 신발의 사이즈별 가격 구현<br />
최지준 : ERD모델링, 경매 체결 API, 주문 페이지 구현<br />
양지은 : 초기설정,PET분석, 회원가입 API, 상세정보 API<br />
홍지수 : 데이터 수집 및 추가, 로그인 API, 상세정보 API
<br /><br />

## 🚀서비스 소개

### 기획 의도
한정판을 좋아하는 Z세대들에게 활발한 소비 및 투자로 리셀 스니커즈 시장을 확대하는 서비스를 기획
<br /><br />

### 서비스 개요
KREAM은 리셀이라는 새로운 소비 트렌드를 캐치한 한정판 스니커즈 거래 중개 서비스로, 단순한 중개에서 벗어나 패션을 즐기는 고객들이 입찰 문화를 통해 소통할 수 있는 플랫폼
<br /><br />

### 핵심 기능
회원가입
- 비밀번호 암호화
- 정규표현식
  
로그인
- 이메일 중복여부 확인
- 토큰 발급

메인페이지
- 쿼리 빌더 사용
- 정렬, 필터링, 페이징 구현

상세페이지
- 상품 정보 및 체결거래, 판매입찰, 구매입찰 데이터 전달
체결

입찰과 즉시체결
- transaction으로 rollback 처리
- 경매 방식 구현
<br />

## ⚙️ 기술 스택
### Frontend
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1693791891735?alt=media&token=f38ca43a-35de-42fa-8e02-e0b4b0e5efa4)](https://github.com/msdio/stackticon)
### Backend
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1693791755671?alt=media&token=2c2c08b5-ef79-4a5a-aa73-582b6c581acf)](https://github.com/msdio/stackticon)
### common
* common : <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
* 협업툴 : <img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"> <img src="https://img.shields.io/badge/trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"> <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
<br />

## 📌 구현 기능

### Login
![SREAM-로그인](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/1fa0c3fd-92c3-46d6-8a8b-39535b323eae)

[FE] :
<br>
[BE] : email,password 값이 일치하는 회원정보 제공, 로그인시 JWT(Json Web Token) 발급




### Sign Up
![SREAM-회원가입](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/37a5c504-64df-4387-add2-8f254bd67d81)
[FE] :
<br>
[BE] : email 형식이 올바르고, 비밀번호 길이가 8~15 일때 회원가입 가능, 비밀번호 암호화




### Sorting
![SREAM-리스트 정렬](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/9df6edd3-f992-4aeb-9fa8-98c773251708)

[FE] :
<br>
[BE] : 페이지 들어올시 가격이 오름차순으로 정렬, 높은 가격순 선택시 내림차순 정렬





### Filtering

[FE] :
<br>
[BE] : queyry builder 이용하여 브랜드와 신발 카테고리로 필터 기능, 8개씩 보여주는 paging 설정




### Product Detail
![SREAM-상세페이지](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/2656b684-bee4-4104-ac49-330dec945e00)

[FE] :
<br>
[BE] : 각 제품의 모든 사이즈 구매가와 판매가중 낮은 가격 보이게 설정,
체결 거래, 판매 입찰 수량, 구매 입찰 수량 제공 함





### Purchase & Payment
![SREAM-즉시구매](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/c5ca3bef-f4af-4ccb-97ea-be0edfaec48b)

[FE] : 제품의 즉시구매와 구매입찰 컴포넌트가 토글버튼으로 각각 보여지며, 즉시구매에서는 백엔드로부터 받아온 상품데이터의 가격을 저장하여 즉시구매하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송하였습니다. 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 하였습니다.
<br>
[BE] : 제품의 판매,구매 버튼의 각 사이즈 별 가격을 나타내고 클릭 하엿을때 즉시 구매와 구매 입찰을 하면, 포인트를 사용하여

결제를 하게 만들었습니다. 만일 뒤로 가기 버튼을 눌렀을때 결제가 진행 되지 않게 만들어 주었습니다. 




### Sell & Payment
![SREAM-판매입찰](https://github.com/wecode-bootcamp-korea/48-2nd-F_Kiiler-frontend/assets/126768997/594b2938-1bfd-47aa-8793-679b0fe108ab)


[FE] : 제품의 즉시판매와 판매입찰 컴포넌트가 토글버튼으로 각각 보여지며, 판매입찰에서는 유저가 입력한 금액을 판매입찰하기 버튼을 누를 때 페이지 이동과 함께 가격데이터를 전송하였습니다. 결제에서는 유저의 포인트를 받아와서 사용 포인트를 입력하면 상품 금액에서 차감하여 나머지 금액을 저장하고 결제하기 버튼을 누르면 모달창에 유저의 구매 데이터를 보여주고 홈화면으로 이동하도록 하였습니다.
<br>
[BE] :제품의 판매,구매 버튼의 각 사이즈 별 가격을 나타내고 클릭 하엿을때 즉시 판매와 판매 입찰을 하면, 포인트를 사용하여

결제를 하게 만들었습니다. 만일 뒤로 가기 버튼을 눌렀을때 결제가 진행 되지 않게 만들어 주었습니다. 
