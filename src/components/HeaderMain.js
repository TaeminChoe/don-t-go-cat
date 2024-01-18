import { URL_HOME } from "system/URL";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <header id="mainHeader">
      <Link to={URL_HOME} className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="로고" />
      </Link>
      <div className="icons">
        <span id="search-icon" className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/assets/icon/search.svg`}
            alt="검색"
          />
        </span>
        <span id="menu-icon" className="icon">
          <img
            src={`${process.env.PUBLIC_URL}/assets/icon/menu.svg`}
            className="menu"
            alt="검색"
          />
        </span>
      </div>
    </header>
  );
};

export default HeaderMain;
