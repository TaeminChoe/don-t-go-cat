import { URL_HOME } from "system/URL";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header" style={{ minHeight: "10vh" }}>
      <Link to={URL_HOME}>홈으로</Link>
    </header>
  );
};

export default Header;
