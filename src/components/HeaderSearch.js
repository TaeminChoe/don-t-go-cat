const HeaderSearch = () => {
  return (
    <header id="searchHeader">
      <a className="back" id="backIcon">
        <img
          src={`${process.env.PUBLIC_URL}/assets/icon/back.svg`}
          alt="로고"
        />
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
              src={`${process.env.PUBLIC_URL}/assets/icon/search.svg`}
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
