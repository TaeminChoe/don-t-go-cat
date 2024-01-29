import { useEffect, useState } from "react";
import { BASENAME, URL_PRODUCT_DETAIL } from "system/URL";
import { useInView } from "react-intersection-observer";
import { useHistory } from "react-router-dom";
import { getProducts } from "system/axios/api/product";

// 한 번에 불러올 데이터 수
const onceCount = 20;

const ProductList = ({ title = "" }) => {
  const [viewProducts, setViewProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [cursor, setCursor] = useState(0);

  const [ref, inView] = useInView();
  const history = useHistory();

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView]);

  // 데이터 가져오는 함수(loadMore : 추가로 가져올 때 true)
  const getProduct = (loadMore = false) => {
    getProducts({
      count: onceCount,
      cursor: cursor,
    }).then((res) => {
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
    getProduct(false);
  }, []);

  // 다음 데이터 가져오기
  const loadMore = () => {
    if (totalCount >= cursor) {
      getProduct(true);
    }
  };

  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        {!!title && <div className="mini-title">{title}</div>}
        <div className={`container ${title ? "isTitle" : ""}`}>
          {viewProducts.map((item, idx) => {
            return (
              <div
                className="item"
                key={idx}
                ref={idx === viewProducts.length - 1 ? ref : null}
                onClick={() => {
                  history.push(`${URL_PRODUCT_DETAIL}/${item.id}`);
                }}
              >
                <img
                  src={`${BASENAME}/assets/img/sample500.png`}
                  alt="아이템"
                />
                <div className="title">{item.title}</div>
                <div className="date">{item.date}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
