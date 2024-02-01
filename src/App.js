import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

import routes from "./system/router";
import { BASENAME, URL_HOME, URL_LOGIN, URL_NOT_FOUND } from "system/URL";
import ModalContainer from "modal/ModalContainer";
import { setUserInfo, userInfoAtom } from "system/recoil/checkAuth";

function App() {
  const [loading, setLoading] = useState(true);

  const userInfo = useRecoilValue(userInfoAtom);
  const registUserInfo = useSetRecoilState(setUserInfo);
  const isCheckAuth = !!userInfo && !!userInfo.token;

  useEffect(() => {
    // 새로고침 시 스크롤 맨 위로 이동
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };

    // 스토리지에 저장된 token이 있을 경우에는 자동로그인 활성화
    if (!!sessionStorage.getItem("userInfo")) {
      const storageUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      registUserInfo(storageUserInfo);
    }
    setLoading(false);
  }, []);

  if (loading) return <></>;

  return (
    <div className="App">
      <Router basename={BASENAME}>
        <CacheSwitch>
          {routes.map((route, index) => {
            const { path, component: Component, exact, isPrivate } = route;

            const RouteWrap = route.cache ? CacheRoute : Route;
            return (
              <RouteWrap
                key={index}
                path={path}
                exact={exact}
                render={(props) => {
                  // 권한이 필요한 페이지 분기 처리
                  if (isPrivate === true && !isCheckAuth) {
                    return <Redirect to={URL_LOGIN} />;
                  } else if (isPrivate === false && isCheckAuth) {
                    return <Redirect to={URL_HOME} />;
                  } else {
                    return <Component {...props} />;
                  }
                }}
              />
            );
          })}
          <Route
            path="*"
            render={(props) => <Redirect to={URL_NOT_FOUND} {...props} />}
          />
        </CacheSwitch>
      </Router>
      <ModalContainer />
    </div>
  );
}

export default App;
