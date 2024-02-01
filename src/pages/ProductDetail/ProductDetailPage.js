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
import { useEffect, useState } from "react";
import FallbackImage from "components/FallbackImage";
import { BASENAME } from "system/URL";
import { Skeleton } from "@mui/material";

const COUNT = 20;

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoadFirst, setIsLoadFirst] = useState(); // 첫번째 배너 이미지 로딩 여부
  const { data, isLoading, error } = useGetProductDetail(id);

  const [total, setTotal] = useState(0);
  const [cursor, setCursor] = useState(0);
  const [products, setProducts] = useState([]);

  const { bannerImages = [], title, description, date, seller } = data || {};

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

  useEffect(() => {
    if (!isLoading) {
      handleGetProducts();
    }
  }, [isLoading]);

  return (
    <Layout
      id={"detail"}
      CustomHeader={HeaderBack}
      CustomFooter={DetailFooter}
      FooterOptions={{ data }}
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
        {products.length && (
          <ProductList
            title="판매자가 파는 다른 상품"
            viewProducts={products}
            hasMore={total >= cursor}
            next={handleGetProducts}
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
        {/* <img src={profileImage} alt="profile" /> */}
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
