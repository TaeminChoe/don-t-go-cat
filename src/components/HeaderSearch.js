import { BASENAME } from "system/URL";
import { useHistory } from "react-router-dom";

const HeaderSearch = () => {
  const nav = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    nav.goBack();
  };

  return (
    <header id="searchHeader">
      <a className="back" id="backIcon" onClick={handleGoBack}>
        <img src={`${BASENAME}/assets/icon/back.svg`} alt="뒤로가기" />
      </a>
      <div className="search-container">
        <input
          id="keywordTextField"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <div id="searchBtn" className="icons">
          <span id="search-icon" className="icon">
            <img
              src={`${BASENAME}/assets/icon/search.svg`}
              className="search"
              alt="검색"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderSearch;
