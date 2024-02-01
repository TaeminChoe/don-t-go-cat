import HeaderSearch from "components/HeaderSearch";
import Layout from "components/Layout";
import ProductList from "components/ProductList";
import { useEffect, useState } from "react";
import { getProductsNew } from "system/axios/api/product";

const onceCount = 20;

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const [autoKeyword, setAutoKeyword] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    setIsOpen(autoKeyword.length >= 1);
  }, [autoKeyword]);

  const searchKeyword = (item) => {
    const params = {
      count: onceCount,
      cursor: cursor,
      category: "keyword",
      keyword: item,
    };

    getProductsNew(params).then((res) => {
      const { list, totalCount } = res.data.result;
      setViewProducts((prev = []) => [...prev, ...list]);
      setTotalCount(totalCount);
      setCursor(cursor + onceCount);
      setIsOpen(false);
    });
  };

  return (
    <Layout
      CustomHeader={HeaderSearch}
      id="search"
      HeaderOptions={{
        keyword: keyword,
        setKeyword: setKeyword,
        setAutoKeyword: setAutoKeyword,
        searchKeyword: searchKeyword,
      }}
    >
      <div
        id="suggest-keyword"
        className={`dropdown-suggest ${isOpen ? "is-open" : ""}`}
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
          hasMore={totalCount >= cursor}
          next={() => {
            searchKeyword(keyword);
          }}
        />
      ) : (
        <div className="empty-result">
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </Layout>
  );
};

export default SearchPage;
