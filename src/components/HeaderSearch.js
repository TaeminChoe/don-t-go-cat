import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";
import { BASENAME } from "system/URL";

const HeaderSearch = () => {
  const [query, setQuery] = useState(""); // 메모리에 저장될 키워드
  const nav = useHistory();

  const onChangeKeyword = (e) => {
    debouncedSearch(e.target.value);
  };

  const getData = (keyword) => {
    console.log("데이터를 요청중 ...", keyword);
    // 데이터 요청 코드 넣는 자리
  };

  // debounce 최적화 (메모리에 저장된 값과 query를 비교했을때 다를 경우 실행)
  const debouncedSearch = useMemo(
    () =>
      debounce((keyword) => {
        // 모든 호출이 아닌
        // 지정 간격(2초)마다 리턴 값 받아서 query에 담고
        setQuery(keyword);

        // 그 값으로 API 데이터 가져오기
        getData(keyword);
      }, 2000),
    [query]
  );

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
          onChange={onChangeKeyword}
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
