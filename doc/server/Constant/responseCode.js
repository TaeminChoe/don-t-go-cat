const responseCode = {
  SUCCESS: "200000",
  REQUIRED_EMPTY: "400001", // 필수값 누락
  EMPTY_DATA: "400002", // 데이터 없음
  ALREADY_FAVORITE: "400003", // 이미 즐겨찾기 등록
  ALREADY_UN_FAVORITE: "400004", // 이미 즐겨찾기 삭제 됨

  // 미정의 에러
  UKNOW_ERROR: "999999",
};

module.exports = responseCode;
