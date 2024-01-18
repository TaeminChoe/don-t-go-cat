import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import routes from "./system/router";
import { BASENAME, URL_HOME, URL_LOGIN, URL_NOT_FOUND } from "system/URL";
import Layout from "components/Layout";

function App() {
  // 로그인 여부 권한 체크 -> 추후 전역 상태관리로 이동해야 함
  const checkAuth = () => {
    // return true;
    return false;
  };
  return (
    <div className="App">
      <Router basename={BASENAME}>
        <Switch>
          {routes.map((route, index) => {
            const { path, component: Component, exact, isPrivate } = route;

            return (
              <Route
                key={index}
                path={path}
                exact={exact}
                render={(props) => {
                  // 권한이 필요한 페이지 분기 처리
                  if (isPrivate === true && !checkAuth()) {
                    return <Redirect to={URL_LOGIN} />;
                  } else if (isPrivate === false && checkAuth()) {
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
