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
import { checkAuthState } from "system/recoil/checkAuth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  const [checkAuth, setCheckAuth] = useRecoilState(checkAuthState);

  useEffect(() => {
    // 스토리지에 저장된 token이 있을 경우에는 checkAuth를 true로 바꿔서 자동로그인 활성화
    if (!!sessionStorage.getItem("userToken")) setCheckAuth(true);
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
                    if (isPrivate === true && !checkAuth) {
                      return <Redirect to={URL_LOGIN} />;
                    } else if (isPrivate === false && checkAuth) {
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
      </QueryClientProvider>
    </div>
  );
}

export default App;
