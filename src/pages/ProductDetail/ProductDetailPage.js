import HeaderBack from "components/HeaderBack";
import Layout from "components/Layout";
import DetailFooter from "./component/DetailFooter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as DOMPurify from "dompurify";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MOCK_DATA = {
  productId: 1,
  price: 100000,
  registDate: "2024-02-17",
  productImages: [],
  title: "제목 영역입니다.",
  content: `이것은 짱짱 좋은 상품이고 <br />
  난 너를 믿었었던 만큼 내 친구도 믿었기에 🌈
  <br />난 아무런 부담없이 널 내 친구에게 소개시켜 줬고 <br />
  그런 만남이 있은 후부터 우리는 자주 함께 만나며 <br />
  즐거운 시간을 보내며 함께 어울렸던 것뿐인데 <br />
  <br />
  그런 만남이 어디부터 잘못됐는지 <br />난 알 수 없는 예감에 조금씩
  빠져들고 있을때쯤 <br />넌 나보다 내 친구에게 관심을 더 보이며
  <br />
  <br />날 조금씩 멀리하던 그 어느 날 너와 내가 🔥`,
};

const MOCK_USERINFO = {
  userId: "양태욱_멋있어",
  userMannerScore: "36.0",
};

const ProductDetail = () => {
  const { id } = useParams();
  const [productInfo, setProductInfo] = useState(MOCK_DATA);

  useEffect(() => {
    getData();
  });

  // 이거 나중에 redux에서 처리될 거임
  const getUserInfo = () => {
    return MOCK_USERINFO;
  };

  const getData = () => {
    setProductInfo(MOCK_DATA);
  };

  const { userId, userMannerScore } = getUserInfo();

  return (
    <Layout
      id={"detail"}
      CustomHeader={HeaderBack}
      CustomFooter={DetailFooter}
      FooterOptions={{ data: productInfo }}
    >
      {/* <!-- 배너 영역 : 라이브러리 적용 하십쇼 --> */}
      <Slider
        dots
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
      <div className="seller-info">
        {/* <!-- 판매자정보 : 아이콘 --> */}
        <div className="profile">
          <img src="../assets/img/sample500.png" />
        </div>
        {/* <!-- 판매자정보 : 아이디 --> */}
        <div className="seller-id">{userId}</div>
        {/* <!-- 판매자정보 : 평점 --> */}
        <div className="seller-score">
          <div>매너 점수</div>
          <div>{userMannerScore}</div>
        </div>
      </div>

      {/* <!-- 상품 정보 영역 --> */}
      <div className="product-info">
        {/* <!-- 상품 정보 : 제목 --> */}
        <div className="title">{productInfo.title}</div>
        {/* <!-- 상품 정보 : 날짜 --> */}
        <div className="product-date">{productInfo.registDate}</div>
        {/* <!-- 상품 정보 : 상세 설명 --> */}
        <div
          className="description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(productInfo.content),
          }}
        />
      </div>

      {/* <!-- 판매자의 다른 상품 : 폼 재활용 --> */}
      <div>
        <div className="mini-title">판매자의 다른 상품</div>
        <div className="container">
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">박희연이 준 z플립5 팝니다..!</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">늦은 밤 너의 집 앞 골목길에서</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">
              오래되었어 그 때 너의 웃음 너의 목소리 잊혀진것같아
            </div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">
              그런데 이게 뭐랄까 난 나 술한잔 하면서 괜찮은 듯 얘기 하며 널
              덜어내었는데
            </div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">구찌 남자벨트 판매합니다.</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">Mac Air 싸게 팝니다</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">딥다이브 팝니다</div>
            <div className="date">2024-02-17</div>
          </div>
          <div className="item">
            <img src="../assets/img/sample500.png" alt="아이템" />
            <div className="title">신입사원 구합니다 react 개발자 우대</div>
            <div className="date">2024-02-17</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
