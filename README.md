# Don't go cat 프로젝트

## Go to page

**https://taeminchoe.github.io/don-t-go-cat/**

## 프로젝트 스펙

```
  node version : 16.15.0

  "axios": "^1.6.5",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^5.3.4",
  "react-scripts": "5.0.1"
```

## Tip

jsconfig.json을 통해 src하위 컴포넌트 참조할 때 조금더 수월하도록 설정하였습니다.

```
// jsconfig.json

{
  "compilerOptions": {
    "baseUrl": "src"
  }
}
```

```
// src/system/router에서 src/pages 하위 컴포넌트를 참조하는 상황

import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import ProductDetail from "pages/ProductDetail/ProductDetailPage";
```

페이지 추가하기

```
// URL.js
export const URL_HOME = "/";
export const URL_LOGIN = "/login";
export const URL_NOT_FOUND = "/not-found";
export const URL_PRODUCT_DETAIL = "/product-detail/:id";
// ... 추가 URL 선언
```

```
// router/index.js

const routes = [
  {
    path: URL.URL_LOGIN,
    exact: true,
    name: "로그인",
    component: LoginPage,
    isPrivate: false,
  },
  ... route객체 추가
]
```

# 실행 가이드

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

gh-pages를 이용해 git에 배포

명령어 하나로 build, deploy 모두 가능. repo에는 gh-pages라는 branch로 관리되어 작업하는 코드와는 분리됨.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
