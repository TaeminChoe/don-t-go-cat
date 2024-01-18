const responseCode = {
  SUCCESS: "200000",
  REQUIRED_EMPTY: "400001", // 필수값 누락
  EMPTY_DATA: "400002", // 데이터 없음

  // 미정의 에러
  UKNOW_ERROR: "999999",
};

module.exports = responseCode;
