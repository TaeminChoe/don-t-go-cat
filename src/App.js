import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import routes from "./system/router";
import CacheRoute, { CacheSwitch } from "react-router-cache-route";
import { BASENAME, URL_HOME, URL_LOGIN, URL_NOT_FOUND } from "system/URL";
import ModalContainer from "modal/ModalContainer";
import { useSelector } from "react-redux";

function App() {
  const { checkAuth } = useSelector((state) => state.authReducer);

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
    </div>
  );
}

export default App;
