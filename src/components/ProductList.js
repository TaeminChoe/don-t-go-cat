import { useEffect, useState } from "react";
import { BASENAME, URL_PRODUCT_DETAIL } from "system/URL";
import { useHistory } from "react-router-dom";
import { getProducts } from "system/axios/api/product";
import InfiniteScroll from "react-infinite-scroll-component";

// 한 번에 불러올 데이터 수
const onceCount = 20;

const ProductList = ({ title = "", option = {} }) => {
  //  option 조회할 파라미터
  //  category : keyword(검색어) / user(판매자 다른 상품)
  //  keyword : keyword 검색시 사용할 String
  //  userId : user 검색시 사용할 Number

  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  const history = useHistory();

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const handleGetProduct = (loadMore = false) => {
    const params = {
      count: onceCount,
      cursor: cursor,
      ...option, // category 등 전달받은 조회할 데이터 값
    };

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    getProducts(queryString).then((res) => {
      const { list, totalCount } = res.data.result;
      if (loadMore) {
        setViewProducts(viewProducts.concat(list));
      } else {
        setViewProducts(list);
      }
      setTotalCount(totalCount);
      setCursor(cursor + onceCount);
    });
  };

  useEffect(() => {
    handleGetProduct(false);
  }, []);

  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        {!!title && <div className="mini-title">{title}</div>}
        <div className={`container ${title ? "isTitle" : ""}`}>
          <InfiniteScroll
            dataLength={viewProducts.length}
            next={() => {
              handleGetProduct(true);
            }}
            hasMore={totalCount >= cursor}
          >
            {viewProducts.map((item, idx) => {
              return (
                <div
                  className="item"
                  key={idx}
                  onClick={() => {
                    history.push(`${URL_PRODUCT_DETAIL}/${item.id}`);
                  }}
                >
                  <img
                    // src={`${BASENAME}/assets/img/sample500.png`}
                    src={item.bannerImages[0]}
                    alt="아이템"
                  />
                  <div className="title">{item.title}</div>
                  <div className="date">{item.date}</div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
