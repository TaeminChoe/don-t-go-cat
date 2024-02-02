import { BASENAME, URL_HOME, URL_SEARCH } from "system/URL";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { userInfoAtom } from "system/recoil/checkAuth";
import { useRecoilValue, useResetRecoilState } from "recoil";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const menuRef = useRef(null);
  // 전역 상태의 사용자 정보 초기화
  const resetUserInfo = useResetRecoilState(userInfoAtom);
  // 전역 상태에서 가져온 사용자 정보
  const { nickname = "" } = useRecoilValue(userInfoAtom);

  useEffect(() => {
    /** 스크롤 상태에 따른 상태 변경 */
    const handleScroll = (event) => {
      // 메뉴가 열려있는 상태에서 메뉴 영역 외 클릭 시 메뉴 닫기
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpenMenu(false);
      }

      // 스크롤 위치에 따른 상태 변경
      if (window.scrollY >= 60) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    // 스크롤 관련 이벤트 추가
    document.addEventListener("scroll", handleScroll);
    return () => {
      // 컴포넌트 제거 시 스크롤 관련 이벤트 제거
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /** 로그아웃 이벤트 : 사용자 관련 데이터 제거 및 전파 */
  const logout = () => {
    setIsOpenMenu(!isOpenMenu);
    sessionStorage.removeItem("userInfo");
    resetUserInfo();
  };

  return (
    <>
      <header
        id="mainHeader"
        // 스크롤 상태이면서 메뉴가 닫힌 상태일 때 Shadow UI 추가
        className={`${isScroll && !isOpenMenu ? "is-scroll" : ""}`}
        ref={menuRef}
      >
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
        <div className="dropdown-item" onClick={() => {}}>
          <span style={{ color: "#8c35fe", fontWeight: "bold" }}>
            {nickname}
          </span>
          님 환영합니다.
        </div>
        <Link to={URL_SEARCH} className="dropdown-item">
          검색
        </Link>
        <div className="dropdown-item" onClick={logout}>
          로그 아웃
        </div>
      </aside>
    </>
  );
};

export default Header;
