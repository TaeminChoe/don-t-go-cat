const DetailFooter = () => {
  return (
    <footer className="footer">
      {/* <!-- 좋아요 버튼 토글 --> */}
      <div id="likeButton" className="like"></div>
      {/* <!-- 상품 가격 --> */}
      <div className="price">100,000원</div>
      {/* <!-- 구매하기 버튼 --> */}
      <div className="buy">
        <div id="butBtn" className="buy-button">
          구매하기
        </div>
      </div>
    </footer>
  );
};

export default DetailFooter;
