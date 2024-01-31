import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useRecoilState } from "recoil";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";

import routes from "./system/router";
import { BASENAME, URL_HOME, URL_LOGIN, URL_NOT_FOUND } from "system/URL";
import ModalContainer from "modal/ModalContainer";
import { userInfoAtom } from "system/recoil/checkAuth";

function App() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

  useEffect(() => {
    // 스토리지에 저장된 token이 있을 경우에는 자동로그인 활성화
    if (!!sessionStorage.getItem("userInfo")) {
      const storageUserInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      const { token } = storageUserInfo;
      if (!!token) {
        setUserInfo(storageUserInfo);
      }
    }
  }, []);

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
                  if (isPrivate === true && !userInfo?.length === 0) {
                    return <Redirect to={URL_LOGIN} />;
                  } else if (isPrivate === false && userInfo?.length > 0) {
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
