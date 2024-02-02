import HeaderSearch from "components/HeaderSearch";
import Layout from "components/Layout";
import ProductList from "components/ProductList";
import { useEffect, useRef, useState } from "react";
import { getProductsNew } from "system/axios/api/product";

const onceCount = 20;

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [autoKeyword, setAutoKeyword] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const cursor = useRef(0);
  const [isLoading, setIsLoading] = useState(true);
  const searchRef = useRef(null);

  useEffect(() => {
    setIsOpen(autoKeyword.length >= 1);
  }, [autoKeyword]);

  const searchKeyword = (item) => {
    setIsOpen(false);
    setIsLoading(true);

    const params = {
      count: onceCount,
      cursor: cursor.current,
      category: "keyword",
      keyword: item,
    };

    getProductsNew(params)
      .then((res) => {
        const { list, totalCount } = res.data.result;
        setViewProducts((prev = []) => [...prev, ...list]);
        cursor.current = cursor.current + onceCount;
        setTotalCount(totalCount);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };

  const resetSearch = () => {
    cursor.current = 0;
    setViewProducts([]);
  };

  useEffect(() => {
    function outsideCLick(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", outsideCLick);
    document.addEventListener("scroll", outsideCLick);
    return () => {
      document.removeEventListener("click", outsideCLick);
      document.removeEventListener("scroll", outsideCLick);
    };
  }, [searchRef]);

  return (
    <Layout
      CustomHeader={HeaderSearch}
      id="search"
      HeaderOptions={{
        keyword: keyword,
        setKeyword: setKeyword,
        setAutoKeyword: setAutoKeyword,
        searchKeyword: searchKeyword,
        resetSearch: resetSearch,
      }}
    >
      <div
        id="suggest-keyword"
        className={`dropdown-suggest ${isOpen ? "is-open" : ""}`}
        ref={searchRef}
      >
        <h3 className="suggest-title">추천 검색어</h3>
        {autoKeyword.map((item, idx) => {
          return (
            <p
              className="dropdown-item"
              key={idx}
              onClick={() => {
                setKeyword(item);
                searchKeyword(item);
              }}
            >
              {item}
            </p>
          );
        })}
      </div>
      {viewProducts.length >= 1 ? (
        <ProductList
          title="검색 결과"
          viewProducts={viewProducts}
          hasMore={totalCount >= cursor.current}
          next={() => {
            searchKeyword(keyword);
          }}
        />
      ) : viewProducts.length === 0 && !isLoading ? (
        <div className="empty-result">
          <p>검색 결과가 없습니다.</p>
        </div>
      ) : null}
    </Layout>
  );
};

export default SearchPage;
