import { BASENAME, URL_HOME, URL_LOGIN, URL_SEARCH } from "system/URL";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { userInfoAtom } from "system/recoil/checkAuth";
import { useResetRecoilState } from "recoil";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const resetUserInfo = useResetRecoilState(userInfoAtom);

  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 60) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  const logout = () => {
    // storage에 담겨져 있는 사용자 정보 삭제
    sessionStorage.removeItem("userInfo");
    resetUserInfo();
    history.push(URL_LOGIN); // 로그인 페이지로 이동
  };

  return (
    <>
      <header id="mainHeader" className={`${isScroll ? "is-scroll" : ""}`}>
        <Link to={URL_HOME} className="logo">
          <img src={`${BASENAME}/assets/img/logo.png`} alt="로고" />
        </Link>
        <div className="icons">
          <Link to={URL_SEARCH} id="search-info" className="icon">
            <img src={`${BASENAME}/assets/icon/search.svg`} alt="검색" />
          </Link>
          <span
            id="menu-icon"
            className="icon"
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <img
              src={`${BASENAME}/assets/icon/menu.svg`}
              className="menu"
              alt="메뉴"
            />
          </span>
        </div>
      </header>
      <aside
        id="menu"
        className={`dropdown-menu ${isOpenMenu ? "is-open" : ""}`}
      >
        <Link to={URL_SEARCH} className="dropdown-item">
          검색
        </Link>
        <a href="#" className="dropdown-item">
          로그인 아이디 : 양태욱멋있어
        </a>
        <div className="dropdown-item" onClick={logout}>
          로그 아웃
        </div>
      </aside>
    </>
  );
};

export default Header;
