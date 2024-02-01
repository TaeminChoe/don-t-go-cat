import { BASENAME, URL_PRODUCT_DETAIL } from "system/URL";
import { useHistory } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import FallbackImage from "./FallbackImage";
import { useState } from "react";
import { Skeleton } from "@mui/material";

/**
 * @description 상품 리스트 컴포넌트
 */
const ProductList = ({
  title = "", // 상품 리스트 제목
  viewProducts = [], // 상품 리스트 목록
  hasMore = false, // 더 가져올 리스트 있는지 여부
  next, // 더 가져올 리스트 함수
  isDetail=false // 상세 페이지 margin 조정
}) => {
  const history = useHistory();

  return (
    <div id="main">
      <div id="contentContainer" className="is-open">
        {!!title && <div className="mini-title"style={isDetail ? { marginTop:"25px" } : {}}>{title}</div>}
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
                  <PromiseWrapperImg
                    imgSrc={item.bannerImages[0]}
                    fallbackImg={`${BASENAME}/assets/img/sample500.png`}
                    style={{
                      visibility: "hidden",
                    }}
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

/**
 * @description 이미지 로딩 상태를 체크하여 로딩 중일 때는 스켈레톤을 보여주고, 로딩이 완료되면 이미지를 보여주는 컴포넌트
 */
const PromiseWrapperImg = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <SkeletonLoading
        style={{
          display: isLoading ? "block" : "none",
        }}
      />
      <FallbackImage
        {...props}
        style={{
          display: isLoading ? "none" : "block",
        }}
        onLoad={(e) => {
          setIsLoading(false);
        }}
      />
    </>
  );
};

/** 이미지용 스켈레톤 컴포넌트 */
const SkeletonLoading = (props) => {
  return (
    <Skeleton
      {...props}
      variant="rectangular"
      width={"100%"}
      height={"calc(50vw - 30px)"}
      sx={{ display: "inline-block" }}
    ></Skeleton>
  );
};
