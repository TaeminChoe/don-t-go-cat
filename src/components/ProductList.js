import { BASENAME, URL_PRODUCT_DETAIL } from "system/URL";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import FallbackImage from "./FallbackImage";

const ProductList = ({
  title = "", // 상품 리스트 제목
  viewProducts = [], // 상품 리스트 목록
  hasMore = false, // 더 가져올 리스트 있는지 여부
  next, // 더 가져올 리스트 함수
}) => {
  const history = useHistory();

  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        {!!title && <div className="mini-title">{title}</div>}
        <div className={`container ${title ? "isTitle" : ""}`}>
          <InfiniteScroll
            dataLength={viewProducts.length}
            next={next}
            hasMore={hasMore}
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
                  <FallbackImage
                    imgSrc={item.bannerImages[0]}
                    fallbackImg={`${BASENAME}/assets/img/sample500.png`}
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
