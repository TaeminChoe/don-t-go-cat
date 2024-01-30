import HeaderBack from "components/HeaderBack";
import Layout from "components/Layout";
import DetailFooter from "./component/DetailFooter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as DOMPurify from "dompurify";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductList from "components/ProductList";
import { getProductInfo } from "utils/api";
import { useQuery } from "react-query";
import { useGetProductDetail } from "utils/hooks";
import { useHistory } from "react-router-dom";

const MOCK_USERINFO = {
  userId: "양태욱_멋있어",
  userMannerScore: "36.0",
};

const ProductDetail = () => {
  const { id } = useParams();
  // const [productInfo, setProductInfo] = useState(MOCK_DATA);
  const { productInfo, isLoading, error } = useGetProductDetail(id);
  const nav = useHistory();

  useEffect(() => {
    // getData();
    // getProductInfo(id).then((res) => {
    //   console.log(res);
    // });
  });

  // const getData = () => {
  //   setProductInfo(MOCK_DATA);
  // };

  return (
    <Layout
      id={"detail"}
      CustomHeader={HeaderBack}
      CustomFooter={DetailFooter}
      FooterOptions={{ data: productInfo }}
    >
      <div style={{ marginBottom: "30px" }}>
        {/* <!-- 배너 영역 : 라이브러리 적용 하십쇼 --> */}
        {isLoading ? (
          <>Loading...</>
        ) : error ? (
          <>{error.message}</>
        ) : (
          <>
            <Slider
              dots
              dotsClass="slick-dots dots-position"
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={false}
            >
              <div className="banner">
                <img src="../assets/img/sample500.png" alt="배너" />
              </div>
              <div className="banner">
                <img src="../assets/img/sample500.png" alt="배너" />
              </div>
              <div className="banner">
                <img src="../assets/img/sample500.png" alt="배너" />
              </div>
              <div className="banner">
                <img src="../assets/img/sample500.png" alt="배너" />
              </div>
            </Slider>

            {/* <!-- 판매자 정보 영역 --> */}
            <SellerInfo productInfo={productInfo} />

            {/* <!-- 상품 정보 영역 --> */}
            <div className="product-info">
              {/* <!-- 상품 정보 : 제목 --> */}
              <div className="title">{productInfo.title}</div>
              {/* <!-- 상품 정보 : 날짜 --> */}
              <div className="product-date">{productInfo.date}</div>
              {/* <!-- 상품 정보 : 상세 설명 --> */}

              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(productInfo.description),
                }}
              />
            </div>
            <ProductList title="판매자의 다른 상품" pruducts={[]} />
          </>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;

const SellerInfo = ({ productInfo }) => {
  const { seller } = productInfo;

  return (
    <div className="seller-info">
      {/* <!-- 판매자정보 : 아이콘 --> */}
      <div className="profile">
        {/* <img src={seller.profileImage} /> */}
        <img src="../assets/img/sample500.png" />
      </div>
      {/* <!-- 판매자정보 : 아이디 --> */}
      <div className="seller-id">{seller.nickname || ""}</div>
      {/* <!-- 판매자정보 : 평점 --> */}
      <div className="seller-score">
        <div>매너 점수</div>
        <div>{seller.score || ""}</div>
      </div>
    </div>
  );
};
