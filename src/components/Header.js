import { BASENAME, URL_HOME, URL_SEARCH } from "system/URL";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="mainHeader">
      <Link to={URL_HOME} className="logo">
        <img src={`${BASENAME}/assets/img/logo.png`} alt="로고" />
      </Link>
      <div className="icons">
        <Link to={URL_SEARCH} id="search-info" className="icon">
          <img src={`${BASENAME}/assets/icon/search.svg`} alt="검색" />
        </Link>
        <span id="menu-icon" className="icon">
          <img
            src={`${BASENAME}/assets/icon/menu.svg`}
            className="menu"
            alt="메뉴"
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
