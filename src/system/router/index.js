import * as URL from "../URL";

import NotFound from "NotFound";
import HomePage from "pages/Home/HomePage";
import LoginPage from "pages/Login/LoginPage";
import ProductDetail from "pages/ProductDetail/ProductDetailPage";
import Search from "pages/Search/SearchPage";

/**
 * route 설정 객체
 * @param path : [string] URL이 될 문자열. URL.js에서 참조됨
 * @param exact : [boolean] true일때 정확한 URL이 아니면 routing되지 않음. true권장
 * @param name : [string] 라우팅 되는 페이지의 구분명
 * @param component : [Component] 표출될 페이지 컴포넌트
 * @param isPrivate : [boolean] true일때 로그인 된 상태에서만 접근가능한 페이지가 됨
 * @param headerType : [string] 화면에 따라 header 다르게 적용
 */

const routes = [
  {
    path: URL.URL_LOGIN,
    exact: true,
    name: "로그인",
    component: LoginPage,
    isPrivate: false,
  },
  {
    path: URL.URL_HOME,
    exact: true,
    name: "메인",
    component: HomePage,
    isPrivate: true,
  },
  {
    path: `${URL.URL_PRODUCT_DETAIL}/:id`,
    exact: false,
    name: "상품상세",
    component: ProductDetail,
    isPrivate: true,
  },
  {
    path: URL.URL_SEARCH,
    exact: false,
    name: "검색",
    component: Search,
    isPrivate: true,
  },
  {
    path: URL.URL_NOT_FOUND,
    exact: true,
    name: "알수 없는 경로",
    component: NotFound,
    isPrivate: false,
  },
];

export default routes;
