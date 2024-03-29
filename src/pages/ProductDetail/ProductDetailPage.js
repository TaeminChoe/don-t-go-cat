import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as DOMPurify from "dompurify";
import Layout from "components/Layout";
import HeaderBack from "components/HeaderBack";
import ProductList from "components/ProductList";
import DetailFooter from "./component/DetailFooter";
import { useGetProductDetail } from "utils/hooks";
import { getProductsNew } from "system/axios/api/product";
import { useEffect, useRef, useState } from "react";
import FallbackImage from "components/FallbackImage";
import { BASENAME } from "system/URL";
import { Skeleton } from "@mui/material";
import SkeletonDetailLoading from "loading/SkeletonDetailLoading";
import { useQueryClient } from "react-query";

const COUNT = 20;

/**
 * @description 상품 상세 페이지
 * 홈, 검색, 상품 리스트 페이지에서 상품 클릭 시 해당 페이지로 진입 가능하다.
 */
const ProductDetail = (props) => {
  const { id } = useParams();
  const [isLoadFirst, setIsLoadFirst] = useState(); // 첫번째 배너 이미지 로딩 여부
  const { data, isLoading } = useGetProductDetail(id);
  const queryClient = useQueryClient();

  const [total, setTotal] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [products, setProducts] = useState([]);

  const sliderRef = useRef(null);

  const { bannerImages = [], title, description, date, seller } = data || {};

  /** 로딩이 완료된 후 상품 리스트 조회 */
  useEffect(() => {
    if (!isLoading) {
      handleGetProducts();
    }
  }, [isLoading]);

  /** 판매자의 다른 상품 상세로 이동시 초기화 작업 */
  useEffect(() => {
    // 스크롤 초기화
    window.scrollTo(0, 0);
    // 첫번째 이미지 로딩 여부 초기화
    setIsLoadFirst(false);
    // 슬라이더 인덱스 초기화
    !!sliderRef.current && sliderRef.current.slickGoTo(0);
  }, [props.match.params.id]);

  const handleGetProducts = () => {
    const {
      seller: { id },
    } = data;

    const params = {
      count: COUNT,
      cursor,
      category: "user",
      userId: id || null,
    };

    getProductsNew(params).then((res) => {
      const { list, totalCount } = res.data.result;
      setProducts((prev = []) => [...prev, ...list]);

      setTotal(totalCount);
      setCursor(cursor + COUNT);
    });
  };

  /** Cache Query 초기화 */
  const resetQuery = () => {
    queryClient.invalidateQueries("product_");
  };

  if (isLoading) return <SkeletonDetailLoading />;

  return (
    <Layout
      id={"detail"}
      CustomHeader={HeaderBack}
      CustomFooter={DetailFooter}
      FooterOptions={{ data, resetQuery }}
    >
      <div style={{ marginBottom: "30px" }}>
        <div className="image-container">
          {/* 첫 번째 이미지가 로드 되기전까지 스켈레톤 로딩 표출 */}
          {!isLoadFirst && <SkeletonLoading />}
          <Slider
            dots
            dotsClass="slick-dots dots-position"
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
            ref={sliderRef}
            style={{
              visibility: isLoadFirst ? "visible" : "hidden",
            }}
          >
            {bannerImages.map((image, idx) => {
              return (
                <div
                  className="banner"
                  key={idx}
                  style={{
                    margin: 0,
                  }}
                >
                  <FallbackImage
                    src={image}
                    alt="배너"
                    onLoad={(e) => {
                      if (idx === 0) {
                        setIsLoadFirst(true);
                      }
                    }}
                    handleError={() => {
                      if (idx === 0) {
                        setIsLoadFirst(true);
                      }
                    }}
                  />
                </div>
              );
            })}
          </Slider>
        </div>
        <SellerInfo seller={seller} />

        <div className="product-info">
          <div className="title">{title}</div>
          <div className="product-date">{date}</div>
          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(description),
            }}
          />
        </div>
        {!!products.length && (
          <ProductList
            title="판매자가 파는 다른 상품"
            viewProducts={products}
            hasMore={total >= cursor}
            next={handleGetProducts}
            isDetail={true}
          />
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;

/**
 *
 * @property {Object} seller 판매자 정보 객체
 * @property {string} seller.nickname 판매자 닉네임
 * @property {number} seller.score 판매자 매너 점수
 * @property {string} seller.profileImage 판매자 프로필 이미지 URL
 * @returns
 */
const SellerInfo = ({ seller }) => {
  const { nickname, score, profileImage } = seller || {};

  return (
    <div className="seller-info">
      <div className="profile">
        <FallbackImage
          imgSrc={profileImage || ""}
          fallbackImg={`${BASENAME}/assets/img/profile_fallback.jpeg`}
        />
      </div>
      <div className="seller-id">{nickname || ""}</div>
      <div className="seller-score">
        <div>매너 점수</div>
        <div>{score || ""}</div>
      </div>
    </div>
  );
};

/** 이미지용 스켈레톤 컴포넌트 */
const SkeletonLoading = (props) => {
  return (
    <Skeleton
      {...props}
      variant="rectangular"
      width={"100vw"}
      height={"100vw"}
      sx={{ display: "inline-block" }}
    ></Skeleton>
  );
};
