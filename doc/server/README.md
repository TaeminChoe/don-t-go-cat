# 🍆 가지마켓 (Don't go cat) - Server

## 📍 목차

[개요](#📍-개요)  
[프로젝트](#📍-프로젝트)  
[모듈](#📍-모듈)  
[기능](#📍-기능)

## 📍 개요

웹 스터디 3회차 과제인 당근마켓 클론 프로젝트 `가지마켓`의 API 서버입니다.  
Node Runtime 환경에서 Express 프레임워크를 사용하여 개발하였습니다.  
기존에 테스트를 위해 간단히 작성하던 방식이 아닌 DTO, DAO를 이용하여 역할별 작성하였습니다.

<br />

## 📍 프로젝트

### 개발 환경

- Node.js v20.10.0
- express v4.18.2

### 실행 방법

```bash
# 1. 의존성 설치 ( 서버 Root 폴더 )
npm install

# 2. 서버 실행
npm start
```

## 📍 모듈

### `DB`

Mock DB로서 `json` 파일을 사용하였습니다.
초기 로딩시 1회만 각 DAO에서 File을 받아온 후 객체에 저장합니다.
이 후 DAO를 통해서만 데이터에 접근 하기 때문에
사용자(개발자)는 DB에 데이터가 실제 저장된 것처럼 느끼도록 작성하였습니다.  
<b style="color : red">서버 재구동시 Json파일에 저장되어 있는 데이터 이외에 추가 한 데이터는 초기화 됩니다.</b>

<br />

### DAO & DTO

> [기본 DAO 및 DTO 개념](https://melonicedlatte.com/2021/07/24/231500.html)

관심사를 분리하여 프로그램을 작성하기 위해 DAO와 DTO를 사용하였습니다.  
DAO는 DB에 접근하여 데이터를 가져오는 역할을 하며 DTO는 각 모듈별 데이터를 담아 전달하는 역할을 합니다.

#### `DAO ( Data Access Object )`

DB에 접근하여 데이터를 조회 및 조작하는 역할을 수행 합니다.
DAO라는 객체로 추상화하여 기본적인 CRUD, 리스트 조회 기능을 상속 받습니다.

- 각 DAO 객체의 기능을 추상화한 추상화 클래스

```javascript
// DAO/DAO.js
class DAO {
  constructor(target) {
    this.target = target;
  }

  get(id) {
    return this.target.find((item) => item.id === id);
  }

  add(item) {
    this.target.push(item);
  }
  ... // 생략
}

module.exports = DAO;
```

- DAO 객체를 상속 받아 작성한 DAO는 다음과 같습니다.

```javascript
// DAO/ProductDAO.js

const DAO = require("./DAO");
class ProductDAO extends DAO {
  constructor() {
    super(BASE_MOCK_PRODUCT_LIST);
  }
  ... // 생략

  getDetail(id) {
    const product = super.get(id); // 상위 DAO get 메서드 호출
    const user = new UserDAO().getUserInfo({ id: product.userId });
    const favoriteYn = new FavoriteDAO().getIsFavorite({
      userId: 1,
      productId: id,
    });

    const productDTO = new ProductDetailDTO({
      ...product,
      seller: user,
      favoriteYn,
    });
    return productDTO;
  }
}

module.exports = ProductDAO;
```

<br />

#### `DTO ( Data Transfer Object )`

각 모듈별 통신시 데이터를 담아 전달하는 역할을 수행합니다.  
JSON형식으로 객체를 만들어 전달하는 방식과 기능상으로 다르지 않지만,  
인스턴스 객체를 이용할 경우 다음과 같은 이점이 있다고 생각하여 사용하였습니다.

- 객체의 타입을 명확히 알 수 있습니다.
- 객체의 메서드를 이용하여 데이터를 가공할 수 있습니다.
  - 추가된 메서드는 없음
- 추후 명세를 위한 문서를 작성할 때 용이

```javascript
// DTO/ApiResultDTO.js

class ApiResultDTO {
  constructor(code, result, message) {
    this.code = code;
    this.result = result;
    this.message = message;
  }
}

module.exports = ApiResultDTO;
```

## 📍 기능

> API 규격은 별도 작성하여 배포하겠습니다.
