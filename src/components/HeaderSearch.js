import { useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";
import { BASENAME } from "system/URL";
import { getKeyword } from "system/axios/api/product";
import { openModal } from "system/recoil/modal";
import { useSetRecoilState } from "recoil";

const HeaderSearch = (props) => {
  const { keyword, setKeyword, setAutoKeyword, searchKeyword, resetSearch } =
    props;
  const [query, setQuery] = useState(""); // 메모리에 저장될 키워드
  const nav = useHistory();
  const showModal = useSetRecoilState(openModal);

  const onChangeKeyword = (e) => {
    debouncedSearch(e.target.value);
    setKeyword(e.target.value);
  };

  const getData = (keyword) => {
    console.log("데이터를 요청중 ...", keyword);
    // 데이터 요청 코드 넣는 자리
    getKeyword(keyword).then((res) => {
      const { result } = res.data;

      setAutoKeyword(result.slice(0, 6));
    });
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
      }, 300),
    [query]
  );

  const handleGoBack = (e) => {
    e.preventDefault();
    nav.goBack();
  };

  const handleSearch = () => {
    if (!!keyword) {
      resetSearch();
      searchKeyword(keyword);

      const userId = JSON.parse(sessionStorage.getItem("userInfo")).id;

      // 기존 스토리지에 저장된 최근 검색어 값 가져오기
      const recent = JSON.parse(localStorage.getItem("recentSearch")) || {};

      // 저장된 값중에 userId를 이용해서 저장된 값 가져오기
      const target = recent[userId] || [];
      // 검색어 배열에 추가
      target.push(keyword);

      // userId를 키값으로, 검색 키워드를 value로 넣기
      // 중복 제거를 위해 Set 객체로 변환하여 배열로 변환
      recent[userId] = Array.from(new Set(target));
      // 스토리지에 저장하기
      localStorage.setItem("recentSearch", JSON.stringify(recent));

      // debounce 해제
      debouncedSearch.cancel();
    } else {
      showModal({ content: "검색어를 입력해주세요." });
    }
  };

  const handleKeyDown = (e) => {
    // 엔터키 입력
    if (e.keyCode === 13) handleSearch();
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
          value={keyword}
          onKeyDown={handleKeyDown}
        />
        <div id="searchBtn" className="icons" onClick={handleSearch}>
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
