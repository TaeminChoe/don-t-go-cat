import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import routes from "./system/router";
import { URL_LOGIN, URL_NOT_FOUND } from "system/URL";
import Layout from "components/Layout";

function App() {
  // 로그인 여부 권한 체크 -> 추후 전역 상태관리로 이동해야 함
  const checkAuth = () => {
    return true;
    // return false;
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => {
            const { path, component: Component, exact, isPrivate } = route;

            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) =>
                  // 권한이 필요한 페이지 분기 처리
                  isPrivate ? (
                    // 로그인 여부에 따라 페이지를 렌더링
                    checkAuth() ? (
                      <Layout>
                        <Component {...props} />
                      </Layout>
                    ) : (
                      // 권한이 없는 경우 로그인 페이지로 리다이렉트
                      <Redirect to={URL_LOGIN} />
                    )
                  ) : (
                    <Component {...props} />
                  )
                }
              />
            );
          })}
          {/* 미리 선언하지 않은 url에 접근하는 경우 not found페이지로 이동 */}
          <Route
            path="*"
            render={(props) => <Redirect to={URL_NOT_FOUND} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
