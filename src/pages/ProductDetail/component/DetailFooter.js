import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { URL_HOME } from "system/URL";
import { Dislike, postLike } from "system/axios/api/product";
import { openModal } from "system/recoil/modal";
import { changeFormatToKR } from "utils/format";

/**
 * @property {Object} data - 상품 상세 정보
 * @property {Function} resetQuery - 쿼리 초기화 함수
 * @returns
 */
const DetailFooter = ({ data, resetQuery = () => {} }) => {
  const showModal = useSetRecoilState(openModal);
  const [like, setLike] = useState(false);
  const nav = useHistory();

  const { price = 0, favoriteYn, id } = data || {};

  useEffect(() => {
    setLike(favoriteYn === "Y");
  }, [data]);

  const handleOnClick = (e) => {
    showModal({
      content: "구매하시겠습니까?",
      clickAction: () => {
        nav.push(URL_HOME);
      },
    });
  };

  /** 좋아요 버튼 클릭 이벤트 */
  const toggleLikeButton = () => {
    // 좋아요 버튼에 따른 API 호출 함수 분기
    const promiseFunc = !!like ? Dislike : postLike;
    promiseFunc(id)
      .then((res) => {
        console.log(res.message || "");
        setLike(!like);
      })
      .catch(console.error)
      // finally : 캐시 초기화
      .finally(() => {
        resetQuery();
      });
  };

  return (
    <footer className="footer">
      {/* <!-- 좋아요 버튼 토글 --> */}
      <div
        id="likeButton"
        className={`like ${like ? "active" : ""}`}
        onClick={toggleLikeButton}
      />
      {/* <!-- 상품 가격 --> */}
      <div className="price">{changeFormatToKR(price)}</div>
      {/* <!-- 구매하기 버튼 --> */}
      <div className="buy">
        <div id="butBtn" className="buy-button" onClick={handleOnClick}>
          구매하기
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
