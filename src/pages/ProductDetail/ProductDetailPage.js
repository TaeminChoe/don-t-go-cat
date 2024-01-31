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

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductDetail(id);

  const { bannerImages = [], title, description, date, seller } = data || {};

  return (
    <Layout
      id={"detail"}
      CustomHeader={HeaderBack}
      CustomFooter={DetailFooter}
      FooterOptions={{ data }}
    >
      <div style={{ marginBottom: "30px" }}>
        {/* <!-- 배너 영역 : 라이브러리 적용 하십쇼 --> */}
        <Slider
          dots
          dotsClass="slick-dots dots-position"
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
        >
          {bannerImages.map((image, idx) => {
            return (
              <div className="banner" key={idx}>
                <img src={image} alt="배너" />
              </div>
            );
          })}
        </Slider>

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
        <ProductList options={{ category: "user" }} />
      </div>
    </Layout>
  );
};

export default ProductDetail;

const SellerInfo = ({ seller }) => {
  const { nickname, score } = seller || {};

  return (
    <div className="seller-info">
      <div className="profile">
        <img src="../assets/img/sample500.png" />
      </div>
      <div className="seller-id">{nickname || ""}</div>
      <div className="seller-score">
        <div>매너 점수</div>
        <div>{score || ""}</div>
      </div>
    </div>
  );
};
