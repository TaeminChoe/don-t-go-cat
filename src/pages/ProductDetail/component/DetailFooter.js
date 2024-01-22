import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { URL_HOME } from "system/URL";
import { showConfirmModal } from "system/common";
import { changeFormatToKR } from "./../../../utils/format";

const DetailFooter = ({ data }) => {
  const [like, setLike] = useState(false);
  const nav = useHistory();

  const { price } = data;

  useEffect(() => {
    // 좋아요 값에 따른
  }, [like]);

  const handleOnClick = (e) => {
    showConfirmModal({
      content: "구매하시겠습니까?",
      clickAction: () => {
        nav.push(URL_HOME);
      },
    });
  };

  return (
    <footer className="footer">
      {/* <!-- 좋아요 버튼 토글 --> */}
      <div
        id="likeButton"
        className={`like ${like ? "active" : ""}`}
        onClick={() => setLike(!like)}
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
